// src/app/api/contacto/route.ts

import { NextRequest, NextResponse } from "next/server";
import { EnviarFormularioContactoUseCase } from "@/application/contacto/usecases/EnviarFormularioContactoUseCase";
import { GmailServicioDeCorreo } from "@/infrastructure/contacto/services/GmailServicioDeCorreo";
import { obtenerCorreoConfiguracion } from "@/infrastructure/contacto/configuracion/correoConfiguracion";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        const useCase = new EnviarFormularioContactoUseCase({
            servicioDeCorreo: new GmailServicioDeCorreo(
                obtenerCorreoConfiguracion()
            ),
        });

        const resultado = await useCase.ejecutar({
            nombreApellidos: body.nombreApellidos ?? "",
            correo: body.correo ?? "",
            whatsapp: body.whatsapp ?? "",
            rubroEmpresa: body.rubroEmpresa ?? "",
        });

        return NextResponse.json(resultado, { status: 200 });
    } catch (error) {
        const mensaje =
            error instanceof Error
                ? error.message
                : "No se pudo procesar el formulario.";

        return NextResponse.json(
            {
                ok: false,
                mensaje,
            },
            { status: 400 }
        );
    }
}