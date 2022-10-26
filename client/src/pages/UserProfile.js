import React, { useState } from 'react';
import { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import theme, { Colours } from '../assets/theme/theme'; //to use theme provider,need to import this
import '../assets/css/Profile.css';
import Pcarousel from '../components/profile/profileCarouselGood';
import Pnavbar from '../components/Navbar';

const ProfileD = () => {


  return (

    <Box className='Profile-body-Style' marginTop="0px" sx={{overflow:"visible"}}>
      <Pnavbar />

      <Pcarousel/>
     
    </Box>

    
  )
}

export default ProfileD
