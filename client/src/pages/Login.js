import React from 'react';
import { Box } from '@mui/material';

import LoginBanner from '../components/login/LoginBanner';
import HorizontalBar from '../components/HorizontalBar';
import LoginNavbar from '../components/login/LoginNavbar';


function Landing() {
  return (
    <Box>
        <LoginNavbar/>
        <LoginBanner />
      
    </Box>
  )
}

export default Landing