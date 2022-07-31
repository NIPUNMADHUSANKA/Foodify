import React, { useState } from 'react';
import { useEffect } from 'react';
import { Box, Container, Paper, ThemeProvider, Typography } from '@mui/material';
import theme, { Colours } from '../assets/theme/theme'; //to use theme provider,need to import this

import Navbar from '../components/Navbar';
import PageTitle from '../components/User/PageTitle';

const MainHeader = "Add Foods Menu";

function AddFoodMenu() {

  useEffect(() => {
    document.title = "Add Foods Menu";
  })

  return (
    <Box>
      <Navbar />
      <PageTitle MainHeader = {MainHeader}/>

    </Box>
  )
}

export default AddFoodMenu