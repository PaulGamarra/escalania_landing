'use client';
import { createTheme } from '@mui/material/styles';
import { paletaMarca } from './colores';
import { tipografia } from './tipografia';

declare module '@mui/material/styles' {

    interface Palette {
        marca: {
            principal: string;
            secundario: string;
            superficie: string;
            acento: string;
        };
    }

    interface PaletteOptions {
        marca?: {
            principal?: string;
            secundario?: string;
            superficie?: string;
            acento?: string;
        };
    }
}

export const tema = createTheme({
    typography: tipografia,
    palette: {
        primary: {
            main: paletaMarca.principal,
        },
        secondary: {
         main: paletaMarca.secundario,
        },
        text: {
            primary: paletaMarca.textoPrincipal,
            secondary: paletaMarca.textoSecundario,
        },
        background: {
            default: '#0A0D04',
        },
        marca: {
            principal: paletaMarca.principal,
            secundario: paletaMarca.secundario,
            superficie: paletaMarca.superficie,
            acento: paletaMarca.acento,
        },
    },
});