// ui/componentes/formulario-contacto/BotonEnviarFormulario.tsx

"use client";

import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { alpha, useTheme } from "@mui/material/styles";

interface PropsBotonEnviarFormulario {
    loading: boolean;
    disabled?: boolean;
}

export function BotonEnviarFormulario({
    loading,
    disabled = false,
}: PropsBotonEnviarFormulario) {
    const theme = useTheme();

    return (
        <Button
            type="submit"
            fullWidth
            disabled={disabled}
            sx={{
                mt: 1,
                minHeight: 58,
                borderRadius: "999px",
                textTransform: "none",
                fontWeight: 800,
                fontSize: "1rem",
                backgroundColor: theme.palette.marca.secundario,
                color: '#fff',
                boxShadow: "none",
                transition: "transform 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease",
                transform: "translateY(0)",
                "&:hover": {
                    backgroundColor: theme.palette.marca.secundario,
                    transform: "translateY(-5px)",
                },
                "&.Mui-disabled": {
                    backgroundColor: alpha(theme.palette.marca.principal, 0.45),
                    color: alpha(theme.palette.marca.superficie, 0.8),
                },
            }}
        >
            {loading ? <CircularProgress size={24} /> : "Enviar"}
        </Button>
    );
}