import { Button, Grid, IconButton } from "@mui/material";
import image from "../../images/logo.png";
import { useNavigate } from "react-router";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import "./style.scss";
import { useState } from "react";
import AddMemberDialog from "../AddMemberDialog";
import TahyyinDialog from "../TahyyinDialog";

const Navbar = () => {
    const navigate = useNavigate();
    const [addMemberOpen, setAddMemberOpen] = useState(false);
    const [tahyyinOpen, setTahyyinOpen] = useState(false);

    return (
        <Grid container item xs={12} direction="row">
            <Grid item xs={2}>
                <img src={image} alt="logo" className="image" onClick={() => navigate("/")} />
            </Grid>
            <Grid container item xs={10} justifyContent="center" alignItems="center" spacing={4}>
                <Grid item>
                    <IconButton onClick={() => setAddMemberOpen(true)}>
                        <AddCircleIcon color="primary" />
                    </IconButton>
                </Grid>
                <Grid item>
                    <Button variant="contained" onClick={() => setTahyyinOpen(true)}>تحيين</Button>
                </Grid>
            </Grid>

            {tahyyinOpen && <TahyyinDialog open={tahyyinOpen} handleClose={() => setTahyyinOpen(false)} />}
            {addMemberOpen && <AddMemberDialog open={addMemberOpen} handleClose={() => setAddMemberOpen(false)} />}
        </Grid>
    )
};

export default Navbar;