
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from '@mui/material';
import Footer from './components/Footer';


// import Navbar from './components/Navbar';
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
        </Routes>
        <Footer/>
      
    </Box>
  )
}

export default App;