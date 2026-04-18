// src/ui/componentes/formulario-contacto/CampoTextoFormulario.tsx

"use client";

import TextField from "@mui/material/TextField";
import { alpha, useTheme } from "@mui/material/styles";

interface PropsCampoTextoFormulario {
    label: string;
    value: string;
    onChange: (value: string) => void;
    type?: string;
    autoComplete?: string;
}

export function CampoTextoFormulario({
    label,
    value,
    onChange,
    type = "text",
    autoComplete,
}: PropsCampoTextoFormulario) {
    const theme = useTheme();

    return (
        <TextField
            fullWidth
            label={label}
            value={value}
            type={type}
            autoComplete={autoComplete}
            onChange={(event) => onChange(event.target.value)}
            variant="outlined"
            sx={{
                "& .MuiOutlinedInput-root": {
                    borderRadius: "12px",
                    backgroundColor: alpha(theme.palette.marca.secundario, 0.1),
                    color: theme.palette.common.white,
                    transition: "all 0.25s ease",
                    "& fieldset": {
                        borderColor: theme.palette.marca.principal,
                    },
                    "&:hover fieldset": {
                        borderColor: theme.palette.marca.principal
                    },
                    "&.Mui-focused fieldset": {
                        borderColor: theme.palette.marca.principal,
                    },
                },
                "& .MuiInputLabel-root": {
                    color: theme.palette.marca.secundario,
                },
                "& .MuiInputLabel-root.Mui-focused": {
                    color: theme.palette.marca.secundario,
                },
                "& .MuiOutlinedInput-input": {
                    color: theme.palette.marca.secundario,
                    py: 1.8,
                },
            }}
        />
    );
}