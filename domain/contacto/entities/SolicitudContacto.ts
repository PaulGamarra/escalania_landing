// src/domain/contacto/entities/SolicitudContacto.ts

import { CorreoElectronico } from "../value-objects/CorreoElectronico";
import { NombreApellidos } from "../value-objects/NombreApellidos";
import { NumeroWhatsapp } from "../value-objects/NumeroWhatsapp";
import { RubroEmpresa } from "../value-objects/RubroEmpresa";

export interface SolicitudContactoProps {
    nombreApellidos: NombreApellidos;
    correo: CorreoElectronico;
    whatsapp: NumeroWhatsapp;
    rubroEmpresa: RubroEmpresa;
}

export class SolicitudContacto {

    public readonly nombreApellidos: NombreApellidos;
    public readonly correo: CorreoElectronico;
    public readonly whatsapp: NumeroWhatsapp;
    public readonly rubroEmpresa: RubroEmpresa;

    constructor(props: SolicitudContactoProps) {
        this.nombreApellidos = props.nombreApellidos;
        this.correo = props.correo;
        this.whatsapp = props.whatsapp;
        this.rubroEmpresa = props.rubroEmpresa;
    }

    public toPrimitives() {
        return {
            nombreApellidos: this.nombreApellidos.value,
            correo: this.correo.value,
            whatsapp: this.whatsapp.value,
            rubroEmpresa: this.rubroEmpresa.value,
        };
    }
}