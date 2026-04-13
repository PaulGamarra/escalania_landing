"use client";

import * as React from "react";
import { Box, Card, CardContent, Icon, Typography } from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";

export interface PropsBeneficio {
    icono: string;
    titulo: string;
    subTitulo: string;
}


export function Beneficio({icono, titulo, subTitulo}: PropsBeneficio) {
    const theme = useTheme();
    return (
        <Card sx={{backgroundColor: theme.palette.marca.superficie, borderRadius: 5, boxShadow: "none", }}>
            <CardContent sx={{p:4, textAlign:'center'}}>

                <Typography variant="h3">
                    {titulo}
                </Typography>

                <Icon sx={{ fontSize: 60, my:4}}>{icono}</Icon>

                <Typography variant="h6">
                    {subTitulo}
                </Typography>
            </CardContent>
        </Card>
    )
}