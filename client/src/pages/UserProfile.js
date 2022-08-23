import React, { useState } from 'react';
import { useEffect } from 'react';
import { Box } from '@mui/material';
import theme, { Colours } from '../assets/theme/theme'; //to use theme provider,need to import this
import '../assets/css/Profile.css';
import Pcarousel from '../components/profile/profileCarouselGood';

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
     
    </Box>

    
  )
}

export default ProfileD
