import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import AppLayout from './components/AppLayout';
import './style.scss';
import { Home } from './apps/Home';

function App() {
  
  return (
    <Grid container direction="column">
      <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route exact path="/" element={<Home />} />
            </Route>
          </Routes>
      </BrowserRouter>
    </Grid>
  );
}

export default App;