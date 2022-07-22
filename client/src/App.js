
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from '@mui/material';
import Footer from './components/Footer';
import Login from './pages/Login';


// import Navbar from './components/Navbar';
import './App.css';

import Restaurant from './pages/Restaurant';
import Landing from './pages/Landing';
import Home from './pages/Home';

import './App.css';

function App() {
  return (
    <Box width="400px" sx={{width:{xl:'1488px'}}} m="auto">
       
        {/* <Navbar /> */}

        <Routes>
        
          <Route path="/" element = {<Landing/>} />
          <Route path="/Home" element = {<Home/>} />
          <Route path="/restaurant" element = {<Restaurant/>} />
        </Routes>
        <Footer/>
      
    </Box>
  )
}

export default App;
