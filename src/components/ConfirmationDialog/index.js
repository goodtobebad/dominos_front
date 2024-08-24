import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";

const ConfirmationDialog = (props) => {

    const action = () => {
        props.action();
        window.location.reload();
    };

    return(
        <Dialog
            open={props.open}
            onClose={props.handleClose}
        >
            <DialogTitle id="dialog-title">
                Êtes vous sûr de vouloir supprimer ce membre ?
            </DialogTitle>
            <DialogActions>
                <Button onClick={props.handleClose}>Annuler</Button>
                <Button onClick={() => action()} autoFocus>Confirmer</Button>
            </DialogActions>
        </Dialog>
    );
};

export default ConfirmationDialog;