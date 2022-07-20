import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Box } from '@mui/material';
import Footer from './components/Footer';

import './assets/css/Main_App.css';

import Navbar from './components/Navbar';

import Landing from './pages/Landing';
import Restaurant from './pages/Restaurant';

function App() {
  return (
    <Box width="400px" sx={{width:{xl:'1488px'}}} m="auto">
       
        <Navbar />

        <Routes>
          <Route path="/" element = {<Landing/>} />
          <Route path="/Restaurant" element = {<Restaurant/>} />
        </Routes>
        <Footer/>
      
    </Box>
  )
}

export default App;