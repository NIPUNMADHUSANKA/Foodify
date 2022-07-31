import React, { useState } from 'react';
import { useEffect } from 'react';
import { Box } from '@mui/material';
import theme, { Colours } from '../assets/theme/theme'; //to use theme provider,need to import this
import '../assets/css/Profile.css';
import Pnavbar from '../components/profile/profileNavbar';
import Pcarousel from '../components/profile/profileCarouselGood';


const ProfileD = () => {


  return (
    <Box className='Profile-body-Style' marginTop="0px">
      <Pnavbar />
      <Pcarousel/>
      <Box>
        <p>This is your Chance</p>
        <p>Get Ready</p>

      </Box>
      
      
    </Box>

    
  )
}

export default ProfileD
