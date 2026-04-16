// src/infrastructure/contacto/config/correoConfig.ts

export interface CorreoConfiguracion {
    usuario: string;
    passwordDeAplicacion: string;
    destinatario: string;
}

export function obtenerCorreoConfiguracion(): CorreoConfiguracion {
    const usuario = process.env.GMAIL_USER;
    const passwordDeAplicacion = process.env.GMAIL_APP_PASSWORD;
    const destinatario = process.env.GMAIL_TO;

    if (!usuario) {
        throw new Error("Falta la variable de entorno GMAIL_USER.");
    }

    if (!passwordDeAplicacion) {
        throw new Error("Falta la variable de entorno GMAIL_APP_PASSWORD.");
    }

    if (!destinatario) {
        throw new Error("Falta la variable de entorno GMAIL_TO.");
    }

    return {
        usuario,
        passwordDeAplicacion,
        destinatario,
    };
}