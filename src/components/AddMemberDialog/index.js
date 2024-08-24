import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";
import { AddMemberService } from "../../apps/Home/HttpServices";
import { useState } from "react";

const AddMemberDialog = (props) => {
    const [name, setName] = useState("");

    const addMember = () => {
        AddMemberService({name: name});
        window.location.reload();
    };
    
    return (
        <Dialog
            open={props.open}
            onClose={props.handleClose}
        >
            <DialogTitle>
                Ajouter un membre
            </DialogTitle>
            <DialogContent>
                <TextField
                    fullWidth
                    label="Nom"
                    variant="standard"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose}>Annuler</Button>
                <Button onClick={() => addMember()} autoFocus>Confirmer</Button>
            </DialogActions>
        </Dialog>
    )
}

export default AddMemberDialog;