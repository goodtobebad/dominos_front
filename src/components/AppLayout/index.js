import { Grid } from "@mui/material"
import { Outlet } from "react-router";
import Navbar from "../Navbar";


const AppLayout = () => (
    <Grid container item direction="column" spacing={10} alignItems="center" justifyContent="center" >
        <Navbar />
        <Outlet/>
    </Grid>
)

export default AppLayout;