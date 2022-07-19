import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from '@mui/material';

import './App.css';

import Navbar from './components/Navbar';

import Landing from './pages/Landing';

function App() {
  return (
    <Box width="400px" sx={{width:{xl:'1488px'}}} m="auto">
       
       <BrowserRouter>
      
        <Navbar />

        <Routes>
          <Route path="/" element = {<Landing/>} />
        </Routes>

      </BrowserRouter>

    </Box>
  )
}

export default App;