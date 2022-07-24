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
import AddFoodMenu from './pages/AddFoodMenu';
import Image_Upload from './pages/Image_Upload';
import Nutrition_Summary from './pages/Nutrition_Summary';

function App() {
  return (
    <Box width="400px" sx={{width:{xl:'1488px'}}} m="auto">
      
        <Routes>
        
          <Route path="/" element = {<Landing/>} />
          <Route path="/Explore" element = {<Explore/>} />
          <Route path="/restaurant" element = {<Restaurant/>} />
          <Route path="/Complaints" element = {<Complaints/>} />
          <Route path="/Intake" element = {<IntakeChart/>} />
          <Route path="/login" element = {<Login/>} />
          <Route path="/AddFoodMenu" element = {<AddFoodMenu/>} />
          <Route path="/Image_Upload" element = {<Image_Upload/>} />
          <Route path="/Nutrition_Summary" element = {<Nutrition_Summary/>} />
          


        </Routes>
        <Footer/>
      
    </Box>
  )
}

export default App;
