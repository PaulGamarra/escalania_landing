'use client';
import { Box, Container, Grid, Typography} from '@mui/material';
import { Beneficio } from '@/ui/componentes/beneficio/Beneficio';
import { useTheme, alpha } from "@mui/material/styles";
import Canales from './Canales';
import Problema from './Problema';

export default function Solucion() {

    const theme = useTheme();
    
    return (
        <Box sx={{py:{ xs: 6, md:8, lg: 12}, px:{ xs: 6, md:8, lg: 12}, background: theme.palette.marca.acento }}>
            <Container maxWidth="xl">
                    <Grid container spacing={6} sx={{ alignItems: "stretch" }}>
                        <Grid size={{ xs: 12, md:6, lg:6}}>
                            <Problema/>
                        </Grid>

                        <Grid size={{ xs: 12, md:6, lg:6}}>
                            <Canales/>
                        </Grid>
                    </Grid>
            </Container>
        </Box>
    );
}