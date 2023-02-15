import { Paper, styled} from "@mui/material";

export const MeuPaper = styled(Paper)(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '15px',
    opacity: '70%',
    filter: 'drop-shadow(0px 0px 15px #48b7f9)',
}));
