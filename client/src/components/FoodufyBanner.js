import React from 'react'
import { Box, Typography, Button } from '@mui/material';
import FOODIFY_BANNER from '../assets/images/foodify-banner.png';

import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme();

theme.typography.h3 = {
  fontSize: '3rem',
  '@media (min-width:600px)': {
    fontSize: '3.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '4rem',
  },
};

function FoodufyBanner() {
  return (
    <Box sx={{mt:{lg:'150px', xs:'70px'},ml:{sm:'50px'}}}
    position="relative" p="20px">

    <ThemeProvider theme={theme}>

        <Typography color="#95CD41" fontWeight="350" variant="h3">
          Healthy Foods
        </Typography>

        <Typography color="#FFFFFF" fontWeight="400" variant="h3">
          Recommendation & <br /> Order Foods
        </Typography>

    </ThemeProvider>

        <Button variant='contained' 
        style={{
            borderRadius: 10,
            backgroundColor: "#95CD41",
            fontSize: "18px",
            color:"#1B1B1E",
            width:120
         }}
        >
        SIGNIN
        </Button>

        <Button variant='contained' 
        style={{
            borderRadius: 10,
            backgroundColor: "#95CD41",
            fontSize: "18px",
            color:"#1B1B1E",
            width:120,
            
         }}
         sx={{ml:{lg:'15px', xs:'40px'}}}
        >
        SIGNUP
        </Button>

        <img src={FOODIFY_BANNER} alt="banner" className='hero-banner-img' />

       
    </Box>
  )
}

export default FoodufyBanner