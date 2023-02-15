import { Button, Card, CardActions, CardContent, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useAppDispatch } from "../../store/modules/hooks";
import { atualizarRecado, Recados, removerRecado } from "../../store/modules/recadosSlice/RecadosSlice";



export const CardRecado = ({ uid, userId, tarefa, descricao, data }: Recados) => {
    const [open, setOpen] = React.useState(false);
    const [newTarefa, setNewTarefa] = React.useState('');
    const [newDescricao, setNewDescricao] = React.useState('');
    const [newDate, setNewDate] = React.useState('');
    const dispatch = useAppDispatch();


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const updateRecado = () => {
        if (!newDescricao && !newTarefa) {
            alert(`Digite todos os campos`);
            return
        }
        dispatch(atualizarRecado({ id: uid, changes: { tarefa: newTarefa, descricao: newDescricao, data: newDate } }));
        handleClose();
    }

    const deleteRecado = () => {
        dispatch(removerRecado(uid));
    }

    return (
        <Card sx={{ minWidth: 200 }} elevation={5}>
            <CardContent>

                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {data}
                </Typography>

                <Typography variant="h5" component="div">
                    {tarefa}
                </Typography>

                <Typography variant="body2" marginTop={1} textAlign="justify">
                    {descricao}
                </Typography>

            </CardContent>

            <CardActions>
                <Grid container justifyContent={'flex-end'}>

                    <Button color='secondary' sx={{m:1}}
                        size='small' variant='contained'
                        onClick={handleClickOpen}
                    > Editar </Button>

                    <Button color='error' sx={{m:1}}
                        size='small' variant='contained'
                        onClick={() => {
                            if (window.confirm('ALERTA DO SISTEMA: \n Tem certeza que deseja excluir este recado?')) {
                                deleteRecado();
                            }
                        }}
                    >Deletar</Button>
                </Grid>

            </CardActions>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Editar Recado</DialogTitle>

                <DialogContent>

                <TextField
                        autoFocus
                        margin="dense"
                        id="data"
                        type="date"
                        variant="standard"
                        onChange={((e) => setNewDate(e.target.value))}
                    />

                    <TextField
                        autoFocus
                        margin="dense"
                        id="tarefa"
                        label='Tarefa'
                        placeholder={tarefa}
                        type="text"
                        fullWidth
                        variant="filled"
                        sx={{ my: 1 }}
                        onChange={((e) => setNewTarefa(e.target.value))}
                    />

                    <TextField
                        autoFocus
                        margin="dense"
                        id="descricao"
                        label="Descrição"
                        placeholder={descricao}
                        type="text"
                        fullWidth
                        variant="filled"
                        onChange={((e) => setNewDescricao(e.target.value))}
                    />
                </DialogContent>
                
                <DialogActions>
                    <Button
                        color='warning'
                        size='small' variant='text'
                        onClick={handleClose}
                    >Cancelar</Button>

                    <Button
                        color='success'
                        size='small' variant='text'
                        onClick={updateRecado}
                    >Atualizar</Button>

                </DialogActions>
            </Dialog>
        </Card>
    );
};