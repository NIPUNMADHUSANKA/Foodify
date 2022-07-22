
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from '@mui/material';
import Footer from './components/Footer';
import Login from './pages/Login';


// import Navbar from './components/Navbar';
import './App.css';

import Restaurant from './pages/Restaurant';
import Landing from './pages/Landing';
import Home from './pages/Explore';

import './App.css';

function App() {
  return (
    <Box width="400px" sx={{width:'100%'}} m="0">
       
        {/* <Navbar /> */}

        <Routes>
        
          <Route path="/" element = {<Landing/>} />
          <Route path="/Home" element = {<Home/>} />
          <Route path="/restaurant" element = {<Restaurant/>} />
          <Route path="/login" element = {<Login/>} />


        </Routes>
        <Footer/>
      
    </Box>
  )
}

export default App;
