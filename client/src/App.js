import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Box } from '@mui/material';
import Footer from './components/Footer';
import Login from './pages/Login';

import './assets/css/Main_App.css';

import Restaurant from './pages/Restaurant';
import Landing from './pages/Landing';
<<<<<<< HEAD
import Complaints from './pages/Complaints';
import Explore from './pages/ExploreHome';
import Navbar from './components/Navbar';
import IntakeChart from './pages/IntakeChart';
=======
import Home from './pages/Explore';
>>>>>>> main


function App() {
  return (
<<<<<<< HEAD
    <Box width="400px" sx={{width:{xl:'1488px'}}} m="auto">
      
        <Navbar />
=======
    <Box width="400px" sx={{width:'100%'}} m="0">
       
        {/* <Navbar /> */}

>>>>>>> main
        <Routes>
        
          <Route path="/" element = {<Landing/>} />
          <Route path="/Explore" element = {<Explore/>} />
          <Route path="/restaurant" element = {<Restaurant/>} />
<<<<<<< HEAD
          <Route path="/Complaints" element = {<Complaints/>} />
          <Route path="/Intake" element = {<IntakeChart/>} />
=======
          <Route path="/login" element = {<Login/>} />

>>>>>>> main

        </Routes>
        <Footer/>
      
    </Box>
  )
}

export default App;
