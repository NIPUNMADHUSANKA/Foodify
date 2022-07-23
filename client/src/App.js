import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Box } from '@mui/material';
import Footer from './components/Footer';
import Login from './pages/Login';

import './assets/css/Main_App.css';

import Restaurant from './pages/Restaurant';
import Landing from './pages/Landing';
import Complaints from './pages/Complaints';
import Explore from './pages/ExploreHome';
import Navbar from './components/Navbar';
import IntakeChart from './pages/IntakeChart';
import Home from './pages/Explore';


function App() {
  return (
    <Box width="400px" sx={{width:'100%'}} m="0">
       
        {/* <Navbar /> */}

        <Routes>
        
          <Route path="/" element = {<Landing/>} />
          <Route path="/Explore" element = {<Explore/>} />
          <Route path="/restaurant" element = {<Restaurant/>} />
          <Route path="/Complaints" element = {<Complaints/>} />
          <Route path="/Intake" element = {<IntakeChart/>} />
          <Route path="/login" element = {<Login/>} />


        </Routes>
        <Footer/>
      
    </Box>
  )
}

export default App;
