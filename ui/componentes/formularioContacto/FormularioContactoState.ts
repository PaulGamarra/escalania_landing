// ui/componentes/formulario-contacto/FormularioContactoState.ts

export interface FormularioContactoState {
    nombreApellidos: string;
    correo: string;
    whatsapp: string;
    rubroEmpresa: string;
}

export const formularioContactoInicial: FormularioContactoState = {
    nombreApellidos: "",
    correo: "",
    whatsapp: "",
    rubroEmpresa: "",
};