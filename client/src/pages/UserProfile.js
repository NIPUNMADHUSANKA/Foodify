import React, { useState } from 'react';
import { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import theme, { Colours } from '../assets/theme/theme'; //to use theme provider,need to import this
import '../assets/css/Profile.css';
import Pcarousel from '../components/profile/profileCarouselGood';
import Fooditemstable from '../components/profile/VieweatenFooditems';

// for scroll reveals
import Fade from 'react-reveal/Fade';
import Navbar from '../components/Navbar';


const ProfileD = () => {


  return (

   

    <Box className='Profile-body-Style' marginTop="0px" >
      <Fade top>
            <Navbar />
      </Fade>

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
