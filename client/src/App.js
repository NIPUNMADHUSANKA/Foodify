import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Box } from '@mui/material';
import Footer from './components/Footer';

import './assets/css/Main_App.css';

import Restaurant from './pages/Restaurant';
import Landing from './pages/Landing';
import Complaints from './pages/Complaints';
import Explore from './pages/ExploreHome';
import Navbar from './components/Navbar';


function App() {
  return (
    <Box width="400px" sx={{width:{xl:'1488px'}}} m="auto">
      
        <Navbar />
        <Routes>
        
          <Route path="/" element = {<Landing/>} />
          <Route path="/Explore" element = {<Explore/>} />
          <Route path="/restaurant" element = {<Restaurant/>} />
          <Route path="/Complaints" element = {<Complaints/>} />

        </Routes>
        <Footer/>
      
    </Box>
  )
}

export default App;