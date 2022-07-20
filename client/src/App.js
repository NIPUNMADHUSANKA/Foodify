
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from '@mui/material';
import Footer from './components/Footer';

import './App.css';

import Navbar from './components/Navbar';
import Restaurant from './pages/Restaurant';
import Landing from './pages/Landing';

function App() {
  return (
    <Box width="400px" sx={{width:{xl:'1488px'}}} m="auto">
       
       
      
        <Navbar />

        <Routes>
        
          <Route path="/" element = {<Landing/>} />
          <Route path="/restaurant" element = {<Restaurant/>} />
        </Routes>
        <Footer/>
      
    </Box>
  )
}

export default App;