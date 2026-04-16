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
                    borderRadius: "18px",
                    backgroundColor: alpha(theme.palette.common.white, 0.04),
                    color: theme.palette.common.white,
                    transition: "all 0.25s ease",
                    "& fieldset": {
                        borderColor: alpha(theme.palette.common.white, 0.18),
                    },
                    "&:hover fieldset": {
                        borderColor: alpha(theme.palette.common.white, 0.4),
                    },
                    "&.Mui-focused fieldset": {
                        borderColor: theme.palette.marca.principal,
                        borderWidth: "2px",
                    },
                },
                "& .MuiInputLabel-root": {
                    color: alpha(theme.palette.common.white, 0.75),
                },
                "& .MuiInputLabel-root.Mui-focused": {
                    color: theme.palette.common.white,
                },
                "& .MuiOutlinedInput-input": {
                    color: theme.palette.common.white,
                    py: 1.8,
                },
            }}
        />
    );
}