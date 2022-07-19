import React from 'react'
import { Route , Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './assets/css/App.css';
import Restaurant from './pages/Restaurant';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <Box>
      <Navbar/>
      <Routes>
        <Route path="/" element={ <Restaurant /> } />
      </Routes>
      <Footer/>
    </Box>
  )
}

export default App