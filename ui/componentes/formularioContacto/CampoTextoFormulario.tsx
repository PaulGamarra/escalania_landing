"use client";

import TextField from "@mui/material/TextField";
import { alpha, useTheme } from "@mui/material/styles";

interface PropsCampoTextoFormulario {
    label: string;
    value: string;
    onChange: (value: string) => void;
    type?: string;
    autoComplete?: string;
    error?: boolean;
    helperText?: string;
}

export function CampoTextoFormulario({
    label,
    value,
    onChange,
    type = "text",
    autoComplete,
    error = false,
    helperText = "",
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
            error={error}
            helperText={helperText}
            sx={{
                "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                    backgroundColor: alpha(theme.palette.common.black, 0.08),
                    color: theme.palette.common.black,
                    transition: "all 0.25s ease",
                    "& fieldset": {
                        borderColor: "transparent",
                    },
                    "&:hover fieldset": {
                        borderColor: alpha(theme.palette.common.black, 0.15),
                    },
                    "&.Mui-focused fieldset": {
                        borderColor: theme.palette.marca.secundario,
                        borderWidth: "2px",
                    },
                    "&.Mui-error fieldset": {
                        borderColor: "#b3261e",
                    },
                },
                "& .MuiInputLabel-root": {
                    color: alpha(theme.palette.common.black, 0.72),
                },
                "& .MuiInputLabel-root.Mui-focused": {
                    color: theme.palette.common.black,
                },
                "& .MuiInputBase-input": {
                    py: 1.7,
                },
                "& .MuiFormHelperText-root": {
                    mx: 0.5,
                    mt: 0.8,
                },
            }}
        />
    );
}