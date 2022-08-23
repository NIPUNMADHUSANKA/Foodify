import React, { useState } from 'react';
import { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import theme, { Colours } from '../assets/theme/theme'; //to use theme provider,need to import this
import '../assets/css/Profile.css';
import Pnavbar from '../components/Navbar';
import Pcarousel from '../components/profile/profileCarouselGood';
import Fooditemstable from '../components/profile/VieweatenFooditems';


const ProfileD = () => {


  return (
    <Box className='Profile-body-Style' marginTop="0px" sx={{overflow:"visible"}}>
      <Pnavbar />
      <Pcarousel/>
      <Box>
      <Typography variant="h3" gutterBottom component="div" sx={{
        color: Colours.grayWhite,
        ml:"4%",
        mt:"3%",

        // Changing font family 
        fontFamily:"Poppins",
        [theme.breakpoints.down('sm')]: {
          fontSize: '220%',
          mt:"5%",
          ml:"5%"
        }
      }}>Orders</Typography>
        <Box>
          <Fooditemstable/>
        </Box>

      </Box>

    </Box>

     
   

    
  )
}

export default ProfileD
