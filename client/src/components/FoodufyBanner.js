import React from 'react'
import { Box, Typography, Button } from '@mui/material';
import FOODIFY_BANNER from '../assets/foodify-banner.png';

function FoodufyBanner() {
  return (
    <Box sx={{mt:{lg:'150px', xs:'70px'},ml:{sm:'50px'}}}
    position="relative" p="20px">

        <Typography color="#95CD41" fontWeight="400" fontSize="80px">
          Healthy Foods
        </Typography>

        <Typography color="#FFFFFF" fontWeight="400" sx={{fontSize:{lg:'44px', xs:'40px'}}}>
          Recommendation & <br /> Order Foods
        </Typography>


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