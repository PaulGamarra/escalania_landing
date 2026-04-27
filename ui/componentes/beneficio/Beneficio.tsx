"use client";

import * as React from "react";
import { Box, Card, CardContent, Icon, Typography } from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";
import CornerCard from "../Cornercard";

export interface PropsBeneficio {
    icono: string;
    titulo: string;
    subTitulo: string;
}

export function Beneficio({icono, titulo, subTitulo}: PropsBeneficio) {
    const theme = useTheme();
    return (
        <CornerCard cornerColor={theme.palette.marca.principal} variant="dot"
            /*sx={{
                backgroundColor: theme.palette.marca.superficie,
                //borderRadius: 10,
                boxShadow: "none",
                width: "100%",
                height: "100%",
                border: `0.1px solid ${theme.palette.marca.principal}`,
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
                transform: "translateY(0)",
                "&:hover": {
                    transform: "translateY(-12px)",
                },
            }}*/
        >
            <CardContent
                sx={{
                    px: 4,
                    py: 4,
                    textAlign: "center",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    color: '#fff'
                }}
            >

                <Typography variant="h4">
                    {titulo}
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        my: 6,
                    }}
                >
                    <Icon sx={{ fontSize: 60, color: theme.palette.marca.principal }}>
                        {icono}
                    </Icon>
                </Box>

                <Box sx={{ mt: "auto", mb:2 }}>
                    <Typography variant="h6">
                        {subTitulo}
                    </Typography>
                </Box>
            </CardContent>
        </CornerCard >
    )
}