// src/domain/contacto/value-objects/NumeroWhatsapp.ts

export class NumeroWhatsapp {
    public readonly value: string;

    constructor(value: string) {
        const normalizado = value.trim();

        if (!normalizado) {
            throw new Error("El WhatsApp es obligatorio.");
        }

        if (normalizado.length > 25) {
            throw new Error("El WhatsApp no puede superar los 25 caracteres.");
        }

        const regexWhatsapp = /^[+\d\s\-()]+$/;

        if (!regexWhatsapp.test(normalizado)) {
            throw new Error("El WhatsApp solo puede contener números, espacios, +, guiones y paréntesis.");
        }

        const soloDigitos = normalizado.replace(/\D/g, "");

        if (soloDigitos.length < 9) {
            throw new Error("El WhatsApp debe tener al menos 9 dígitos.");
        }

        if (soloDigitos.length > 15) {
            throw new Error("El WhatsApp no puede tener más de 15 dígitos.");
        }

        this.value = normalizado;
    }
}