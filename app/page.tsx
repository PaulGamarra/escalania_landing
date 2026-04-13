
import { Box, Container, Grid} from '@mui/material';

export const metadata = {
    title: 'Escalania | Transformamos la creatividad infantil ',
	  description:'A través del dibujo y el arte, invitamos a los niños a imaginar, crear y dar vida a sus propias prendas de vestir',
};

import { Beneficio } from '@/ui/componentes/beneficio/Beneficio';

export default async function HomePage() {
    

    return (
        <Box>
            <Container>
                <h1>hola a todos</h1>
                <Grid container spacing={3} alignItems="stretch">
                    <Grid size={{ xs: 12, md:4, lg:3}}>
                        <Beneficio
                            icono='timelapse'
                            titulo='Atención inmediata'
                            subTitulo='Responde en segundos, sin dejar mensajes olvidados.'
                        />
                    </Grid>
                    <Grid size={{ xs: 12, md:4, lg:3}}>
                        <Beneficio
                            icono='store'
                            titulo='Más ventas'
                            subTitulo='Convierte conversaciones en oportunidades reales de cierre.'
                        />
                    </Grid>
                    <Grid size={{ xs: 12, md:4, lg:3}}>
                        <Beneficio
                            icono='alarm'
                            titulo='Ahorro de tiempo'
                            subTitulo='Tu equipo deja de repetir respuestas una y otra vez.'
                        />
                    </Grid>
                    <Grid size={{ xs: 12, md:4, lg:3}}>
                        <Beneficio
                            icono='event_available'
                            titulo='Disponibilidad 24/7'
                            subTitulo='Tu negocio sigue atendiendo incluso cuando tú no estás.'
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}