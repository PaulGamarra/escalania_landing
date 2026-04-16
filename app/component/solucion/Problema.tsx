'use client';
import { Box, Typography} from '@mui/material';
import { CardCambiante } from '@/ui/componentes/cards/CardCambiante';
import { useTheme, alpha } from "@mui/material/styles";

export default function Problema() {

    const theme = useTheme();
    
    return (
        <CardCambiante colorBase={theme.palette.marca.principal} colorVisible={theme.palette.marca.superficie}>
            
            <Box sx={{ mb: 3 }}>
                <Typography variant="h3"
                    sx={{
                        color: theme.palette.marca.principal,
                        display: "inline",
                        backgroundImage: "linear-gradient(currentColor, currentColor)",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "0 100%",
                        backgroundSize: "0% 4px",
                        transition: "background-size 0.5s cubic-bezier(0.22, 1, 0.36, 1)",

                        "@media (hover: hover)": {
                            "&:hover": {
                                backgroundSize: "100% 4px",
                            },
                        },
                    }}
                >
                    Tus clientes escriben a toda hora.
                </Typography>   
            </Box>

            <Box sx={{ mb: 5 }}>
                <Typography variant="h3"
                    sx={{
                        color: "#fff",
                        display: "inline",
                        backgroundImage: "linear-gradient(currentColor, currentColor)",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "0 100%",
                        backgroundSize: "0% 4px",
                        transition: "background-size 0.5s cubic-bezier(0.22, 1, 0.36, 1)",

                        "@media (hover: hover)": {
                            "&:hover": {
                                backgroundSize: "100% 4px",
                            },
                        },
                    }}
                >
                    Tu negocio no debería perder oportunidades.
                </Typography>   
            </Box>

            <Typography variant="h6"  sx={{ color:'#fff'}}>
                Con un agente de IA, tu negocio puede responder de forma inmediata, consistente y profesional, incluso fuera del horario laboral.
            </Typography>
        </CardCambiante>              
    );
}