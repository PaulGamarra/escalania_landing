"use client";

import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { alpha, useTheme } from "@mui/material/styles";

interface PropsBotonEnviarFormulario {
    loading: boolean;
}

export function BotonEnviarFormulario({
    loading,
}: PropsBotonEnviarFormulario) {
    const theme = useTheme();

    return (
        <Button
            type="submit"
            fullWidth
            disabled={loading}
            sx={{
                mt: 1,
                minHeight: 64,
                borderRadius: "999px",
                textTransform: "none",
                fontWeight: 500,
                fontSize: "1.2rem",
                backgroundColor: theme.palette.marca.secundario,
                color: "#fff",
                boxShadow: "none",
                transition: "transform 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease",
                transform: "translateY(0)",
                "@media (hover: hover)": {
                    "&:hover": {
                        backgroundColor: theme.palette.marca.secundario,
                        transform: "translateY(-5px)",
                        boxShadow: `0 12px 24px ${alpha(theme.palette.marca.secundario, 0.28)}`,
                    },
                },
                "&.Mui-disabled": {
                    backgroundColor: alpha(theme.palette.marca.secundario, 0.55),
                    color: "rgba(255,255,255,0.9)",
                },
            }}
        >
            {loading ? (
                <CircularProgress size={24} sx={{ color: "#fff" }} />
            ) : (
                "Enviar mensaje"
            )}
        </Button>
    );
}