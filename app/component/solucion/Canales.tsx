'use client';
import { Box, Card, Container, Grid, Icon, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography} from '@mui/material';
import { CardCambiante } from '@/ui/componentes/cards/CardCambiante';
import { Beneficio } from '@/ui/componentes/beneficio/Beneficio';
import { useTheme, alpha } from "@mui/material/styles";


import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import ForwardIcon from '@mui/icons-material/Forward';

export default function Canales() {

    const theme = useTheme();
    
    return (
        <Box>

            <Box sx={{ mb: 3 }}>
                <Typography variant="h4"
                    sx={{
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
                    Tu asistente comercial inteligente siempre activo
                </Typography>   
            </Box>

            <Box sx={{ mb: 2 }}>
                <Typography variant="body1">
                    En Escalania implementamos un agente de IA entrenado para atender a tus clientes en tus canales principales: WhatsApp, Instagram, Facebook, etc.
                </Typography>
                <Typography variant="body1">
                    Tu agente puede:
                </Typography>
            </Box>

            <Box sx={{ width: '100%'}}>
                <nav aria-label="main mailbox folders">
                    <List>
                        
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <ForwardIcon color='secondary' fontSize="medium"/>
                                </ListItemIcon>
                                <Typography variant="body1">Responder preguntas frecuentes.</Typography>
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton>
                            <ListItemIcon>
                                <ForwardIcon color="secondary" fontSize="medium"/>
                            </ListItemIcon>
                            <Typography variant="body1">Dar información sobre tus servicios.</Typography>
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <ForwardIcon color="secondary" fontSize="medium"/>
                                </ListItemIcon>
                                <Typography variant="body1">Resolver dudas de clientes potenciales.</Typography>
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton>
                            <ListItemIcon>
                                <ForwardIcon color="secondary" fontSize="medium"/>
                            </ListItemIcon>
                            <Typography variant="body1">Agendar citas.</Typography>
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton>
                            <ListItemIcon>
                                <ForwardIcon color="secondary" fontSize="medium"/>
                            </ListItemIcon>
                            <Typography variant="body1">Guiar conversaciones hacia la venta.</Typography>
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton>
                            <ListItemIcon>
                                <ForwardIcon color="secondary" fontSize="medium"/>
                            </ListItemIcon>
                            <Typography variant="body1">Mantener una atención rápida y profesional.</Typography>
                            </ListItemButton>
                        </ListItem>

                    </List>
                </nav>

            </Box>
            
        </Box>
    );
}