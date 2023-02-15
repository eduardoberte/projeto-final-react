import styled from "@emotion/styled";
import { Grid } from "@mui/material";



export const MeuContainer = styled(Grid)(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
    backgroundImage: 'radial-gradient(circle, #006cad, #001aab, #580d7c)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
}));