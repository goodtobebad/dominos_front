import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, Grid, MenuItem, OutlinedInput, Select, TextField, Typography } from "@mui/material";
import { GetMembersService, UpdateMembersService } from "../../apps/Home/HttpServices";
import { useEffect, useState } from "react";

const TahyyinDialog = (props) => {
    const [members, setMembers] = useState([]);
    const [gagnant1, setGagnant1] = useState({});
    const [gagnant2, setGagnant2] = useState({});
    const [perdant1, setPerdant1] = useState({});
    const [perdant2, setPerdant2] = useState({});
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        async function fetchData () {
          const response = await GetMembersService();
    
          if(response.error) {
            
          }else {
            setMembers(response.data.data.members)
          }
        }
    
        fetchData();
    }, []);

    const submitResult = () => {
        if(checked) {
            const results = [
                {...gagnant1, Games: gagnant1.Games + 1, GamesWon: gagnant1.GamesWon + 1, IhoudiWon: gagnant1.IhoudiWon + 1, Score: gagnant1.Score + 5},
                {...gagnant2, Games: gagnant2.Games + 1, GamesWon: gagnant2.GamesWon + 1, IhoudiWon: gagnant2.IhoudiWon + 1, Score: gagnant2.Score + 5},
                {...perdant1, Games: perdant1.Games + 1, GamesLost: perdant1.GamesLost + 1, IhoudiLost: perdant1.IhoudiLost + 1, Score: perdant1.Score - 5},
                {...perdant2, Games: perdant2.Games + 1, GamesLost: perdant2.GamesLost + 1, IhoudiLost: perdant2.IhoudiLost + 1, Score: perdant2.Score - 5}
            ];

            UpdateMembersService({members: results});
        }else {
            const results = [
                {...gagnant1, Games: gagnant1.Games + 1, GamesWon: gagnant1.GamesWon + 1, Score: gagnant1.Score + 2},
                {...gagnant2, Games: gagnant2.Games + 1, GamesWon: gagnant2.GamesWon + 1, Score: gagnant2.Score + 2},
                {...perdant1, Games: perdant1.Games + 1, GamesLost: perdant1.GamesLost + 1},
                {...perdant2, Games: perdant2.Games + 1, GamesLost: perdant2.GamesLost + 1}
            ];

            UpdateMembersService({members: results});
        }

        window.location.reload();
    };

    return (
        members &&
        <Dialog
            open={props.open}
            onClose={props.handleClose}
            PaperProps={{
                style: {width: 800}
            }}
        >
            <DialogTitle align="center">
                تحيين
            </DialogTitle>
            <DialogContent>
                <Grid container direction="column">
                    <Grid item container direction="column">
                        <Typography>Gagnants</Typography>
                        <Grid item container direction="row" justifyContent="space-evenly" alignItems="center">
                            <Select
                                style={{width: 100}}
                                displayEmpty
                                value={gagnant1}
                                onChange={(e) => {
                                    if(e.target.value._id === gagnant2._id || e.target.value._id === perdant1._id || e.target.value._id === perdant2._id) {
                                        
                                    }else {
                                        setGagnant1(e.target.value)
                                    }
                                }}
                                input={<OutlinedInput />}
                            >
                                <MenuItem disabled value="">
                                    <em>Gagnant 1</em>
                                </MenuItem>
                                {members.map((member) => (
                                    <MenuItem
                                        key={member._id}
                                        value={member}
                                    >
                                        {member.Name}
                                    </MenuItem>
                                ))}
                            </Select>
                            <Typography>Et</Typography>
                            <Select
                                style={{width: 100}}
                                displayEmpty
                                value={gagnant2}
                                onChange={(e) => {
                                    if(e.target.value._id === gagnant1._id || e.target.value._id === perdant1._id || e.target.value._id === perdant2._id) {
                                        
                                    }else {
                                        setGagnant2(e.target.value)
                                    }
                                }}
                                input={<OutlinedInput />}
                            >
                                <MenuItem disabled value="">
                                    <em>Gagnant 2</em>
                                </MenuItem>
                                {members.map((member) => (
                                    <MenuItem
                                        key={member._id}
                                        value={member}
                                    >
                                        {member.Name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                    </Grid>
                    <Grid item container direction="column" marginTop={5}>
                        <Typography>Perdants</Typography>
                        <Grid item container direction="row" justifyContent="space-evenly" alignItems="center">
                            <Select
                                style={{width: 100}}
                                displayEmpty
                                value={perdant1}
                                onChange={(e) => {
                                    if(e.target.value._id === gagnant1._id || e.target.value._id === gagnant2._id || e.target.value._id === perdant2._id) {
                                        
                                    }else {
                                        setPerdant1(e.target.value)
                                    }
                                }}
                                input={<OutlinedInput />}
                            >
                                <MenuItem disabled value="">
                                    <em>Perdant 1</em>
                                </MenuItem>
                                {members.map((member) => (
                                    <MenuItem
                                        key={member._id}
                                        value={member}
                                    >
                                        {member.Name}
                                    </MenuItem>
                                ))}
                            </Select>
                            <Typography>Et</Typography>
                            <Select
                                style={{width: 100}}
                                displayEmpty
                                value={perdant2}
                                onChange={(e) => {
                                    if(e.target.value._id === gagnant1._id || e.target.value._id === gagnant2._id || e.target.value._id === perdant1._id) {
                                        
                                    }else {
                                        setPerdant2(e.target.value)
                                    }
                                }}
                                input={<OutlinedInput />}
                            >
                                <MenuItem disabled value="">
                                    <em>Perdant 2</em>
                                </MenuItem>
                                {members.map((member) => (
                                    <MenuItem
                                        key={member._id}
                                        value={member}
                                    >
                                        {member.Name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                    </Grid>
                    <Grid item container direction="row" alignItems="center" marginTop={5}>
                        <Typography marginRight={5}>يهودي ?</Typography>
                        <Checkbox
                            checked={checked}
                            onChange={() => setChecked(!checked)}
                        />
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose}>Annuler</Button>
                <Button 
                    onClick={() => submitResult()}
                    disabled={
                        Object.keys(gagnant1).length === 0
                        || Object.keys(gagnant2).length === 0
                        || Object.keys(perdant1).length === 0
                        || Object.keys(perdant2).length === 0
                    }
                    autoFocus
                >
                    Confirmer
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default TahyyinDialog;