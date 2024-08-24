import { Grid, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import ConfirmationDialog from '../../../components/ConfirmationDialog';

//todo : refresh page when you delete / update / tahyiin

const Home = (props) => {
  const [members, setMembers] = useState([]);
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const [memberId, setMemberId] = useState();

  useEffect(() => {
    async function fetchData () {
      const response = await props.getMembers();

      if(response.error) {
        
      }else {
        setMembers(response.data.data.members)
      }
    }

    fetchData();
  }, []);

  const deleteMember = (id) => {
    setMemberId(id);
    setConfirmationOpen(true);
  };

  return (
    members &&
    <Grid
      container item xs={12}
    >
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Membre</TableCell>
              <TableCell align="right">Parties</TableCell>
              <TableCell align="right">Parties gagnés</TableCell>
              <TableCell align="right">Parties perdus</TableCell>
              <TableCell align="right">يهودي gagnés</TableCell>
              <TableCell align="right">يهودي perdus</TableCell>
              <TableCell align="right">Score</TableCell>
              <TableCell align="right">Classement</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {members.sort((a, b) => b.Score - a.Score).map((member, index) => (
              <TableRow
                key={member._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {member.Name}
                </TableCell>
                <TableCell align="right">{member.Games}</TableCell>
                <TableCell align="right">{member.GamesWon}</TableCell>
                <TableCell align="right">{member.GamesLost}</TableCell>
                <TableCell align="right">{member.IhoudiWon}</TableCell>
                <TableCell align="right">{member.IhoudiLost}</TableCell>
                <TableCell align="right">{member.Score}</TableCell>
                <TableCell align="right">{index+1}</TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => deleteMember(member._id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {confirmationOpen &&
        <ConfirmationDialog
          open={confirmationOpen}
          handleClose={() => setConfirmationOpen(false)}
          action={() => props.deleteMember(memberId)}
        />}
    </Grid>
  );
}

export default Home;