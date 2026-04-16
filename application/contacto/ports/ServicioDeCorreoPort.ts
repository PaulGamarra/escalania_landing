// application/contacto/ports/ServicioDeCorreoPort.ts

import { SolicitudContacto } from "@/domain/contacto/entities/SolicitudContacto";

export interface ServicioDeCorreoPort {
    enviarFormularioContacto(solicitudContacto: SolicitudContacto): Promise<void>;
}