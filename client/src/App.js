
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from '@mui/material';
import Footer from './components/Footer';
import Login from './pages/Login';

import './App.css';

import Navbar from './components/Navbar';

import Landing from './pages/Landing';

function App() {
  return (
    <Box width="400px" sx={{width:{xl:'1488px'}}} m="auto">
        <Routes>
          <Route path="/" element = {<Login/>} />
        </Routes>
        <Footer/>
      
    </Box>
  )
}

export default App;