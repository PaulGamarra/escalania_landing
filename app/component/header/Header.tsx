'use client';
import { Box, Container, Grid, Typography} from '@mui/material';
import { Beneficio } from '@/ui/componentes/beneficio/Beneficio';
import { useTheme, alpha } from "@mui/material/styles";
import Izquierda from './Izquierda';
import { FormularioContacto } from '@/ui/componentes/formularioContacto/FormularioContacto';
import { CardCambiante } from '@/ui/componentes/cards/CardCambiante';

export default function Header() {

    const theme = useTheme();
    
    return (
        <Box sx={{py:{ xs: 6, md:8, lg: 12}, px:{ xs: 6, md:8, lg: 12}, background: theme.palette.marca.acento }}>
            <Container maxWidth="xl">
                    <Grid container spacing={6} sx={{ alignItems: "stretch" }}>
                        <Grid size={{ xs: 12, md:6, lg:7}}>
                            <Izquierda/>
                        </Grid>

                        <Grid size={{ xs: 12, md:6, lg:5}}>
                            <CardCambiante colorBase={theme.palette.marca.principal} colorVisible={theme.palette.marca.superficie}>
                                <FormularioContacto />
                            </CardCambiante>
                        </Grid>
                    </Grid>
            </Container>
        </Box>
    );
}