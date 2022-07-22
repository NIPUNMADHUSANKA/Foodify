
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from '@mui/material';
import Footer from './components/Footer';

import './App.css';

import Navbar from './components/Navbar';

import Landing from './pages/Landing';

import Signup from './pages/Signup';

import Signupuser from './pages/Signupuser';

function App() {
  return (
    <Box width="400px" sx={{width:{xl:'1488px'}}} m="auto">
       
       {/* <BrowserRouter> */}
      
        <Navbar />

        <Routes>
          <Route path="/" element = {<Landing/>} />
          <Route path="/Signup" element = {<Signup/>} />
          <Route path="/Signupuser" element = {<Signupuser/>} />
        </Routes>
        <Footer/>
      {/* </BrowserRouter> */}
    </Box>
  )
}

export default App;