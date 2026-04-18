// src/ui/componentes/formulario-contacto/FormularioContacto.tsx

"use client";

import { FormEvent, useMemo, useState } from "react";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";

import { CampoTextoFormulario } from "./CampoTextoFormulario";
import { BotonEnviarFormulario } from "./BotonEnviarFormulario";
import {
    FormularioContactoState,
    formularioContactoInicial,
} from "./FormularioContactoState";

interface EstadoRespuestaFormulario {
    abierto: boolean;
    tipo: "success" | "error";
    mensaje: string;
}

export function FormularioContacto() {
    const theme = useTheme();

    const [formulario, setFormulario] = useState<FormularioContactoState>(
        formularioContactoInicial
    );
    const [loading, setLoading] = useState(false);
    const [respuesta, setRespuesta] = useState<EstadoRespuestaFormulario>({
        abierto: false,
        tipo: "success",
        mensaje: "",
    });

    const formularioEsValido = useMemo(() => {
        return (
            formulario.nombreApellidos.trim() !== "" &&
            formulario.correo.trim() !== "" &&
            formulario.whatsapp.trim() !== "" &&
            formulario.rubroEmpresa.trim() !== ""
        );
    }, [formulario]);

    const actualizarCampo = (
        campo: keyof FormularioContactoState,
        value: string
    ) => {
        setFormulario((prev) => ({
            ...prev,
            [campo]: value,
        }));
    };

    const resetearFormulario = () => {
        setFormulario(formularioContactoInicial);
    };

    const abrirRespuesta = (
        tipo: "success" | "error",
        mensaje: string
    ) => {
        setRespuesta({
            abierto: true,
            tipo,
            mensaje,
        });
    };

    const cerrarRespuesta = () => {
        setRespuesta((prev) => ({
            ...prev,
            abierto: false,
        }));
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (loading) return;

        setLoading(true);

        try {
            const response = await fetch("/api/contacto", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formulario),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data?.mensaje ?? "No se pudo enviar el formulario."
                );
            }

            resetearFormulario();
            abrirRespuesta("success", data.mensaje ?? "Formulario enviado correctamente.");
        } catch (error) {
            const mensaje =
                error instanceof Error
                    ? error.message
                    : "Ocurrió un error inesperado al enviar el formulario.";

            abrirRespuesta("error", mensaje);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Card
                sx={{
                    borderRadius: { xs: "2px", md: "20px" },
                    backgroundColor: theme.palette.marca.principal,
                    boxShadow: "none",
                }}
            >
                <Box
                    sx={{
                        px: { xs: 2.5, md: 4 },
                        py: { xs: 3, md: 4 },
                    }}
                >
                    <Typography variant="h4" sx={{mb: 1}}>
                        Agenda una demostración
                    </Typography>

                    <Typography variant="body1" sx={{mb: 4}}>
                        Déjanos tus datos y te contactaremos para mostrarte cómo un agente de IA puede atender a tus clientes por WhatsApp, Instagram y Facebook.
                    </Typography>

                    <Box component="form" onSubmit={handleSubmit}>
                        <Stack spacing={2}>
                            <CampoTextoFormulario
                                label="Nombre y apellidos"
                                value={formulario.nombreApellidos}
                                onChange={(value) =>
                                    actualizarCampo("nombreApellidos", value)
                                }
                                autoComplete="name"
                            />

                            <CampoTextoFormulario
                                label="Correo"
                                type="email"
                                value={formulario.correo}
                                onChange={(value) =>
                                    actualizarCampo("correo", value)
                                }
                                autoComplete="email"
                            />

                            <CampoTextoFormulario
                                label="WhatsApp"
                                value={formulario.whatsapp}
                                onChange={(value) =>
                                    actualizarCampo("whatsapp", value)
                                }
                                autoComplete="tel"
                            />

                            <CampoTextoFormulario
                                label="Rubro de la empresa"
                                value={formulario.rubroEmpresa}
                                onChange={(value) =>
                                    actualizarCampo("rubroEmpresa", value)
                                }
                            />

                            <BotonEnviarFormulario
                                loading={loading}
                                disabled={loading || !formularioEsValido}
                            />
                        </Stack>
                    </Box>
                </Box>
            </Card>

            <Snackbar
                open={respuesta.abierto}
                autoHideDuration={4500}
                onClose={cerrarRespuesta}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
                <Alert
                    onClose={cerrarRespuesta}
                    severity={respuesta.tipo}
                    variant="filled"
                    sx={{ width: "100%" }}
                >
                    {respuesta.mensaje}
                </Alert>
            </Snackbar>
        </>
    );
}