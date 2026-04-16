// src/infrastructure/contacto/services/GmailServicioDeCorreo.ts

import nodemailer, { Transporter } from "nodemailer";
import { ServicioDeCorreoPort } from "@/application/contacto/ports/ServicioDeCorreoPort";
import { SolicitudContacto } from "@/domain/contacto/entities/SolicitudContacto";
import { CorreoConfiguracion } from "../configuracion/correoConfiguracion";
import {
    mapSolicitudContactoAGmailHtml,
    mapSolicitudContactoAGmailText,
} from "../mappers/mapSolicitudContactoAGmailHtml";

export class GmailServicioDeCorreo implements ServicioDeCorreoPort {
    private readonly transporter: Transporter;
    private readonly config: CorreoConfiguracion;

    constructor(config: CorreoConfiguracion) {
        this.config = config;

        this.transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: config.usuario,
                pass: config.passwordDeAplicacion,
            },
        });
    }

    public async enviarFormularioContacto(
        solicitudContacto: SolicitudContacto
    ): Promise<void> {
        await this.transporter.sendMail({
            from: `"Escalania Web" <${this.config.usuario}>`,
            to: this.config.destinatario,
            subject: "Nuevo lead desde el formulario web",
            replyTo: solicitudContacto.correo.value,
            text: mapSolicitudContactoAGmailText(solicitudContacto),
            html: mapSolicitudContactoAGmailHtml(solicitudContacto),
        });
    }
}