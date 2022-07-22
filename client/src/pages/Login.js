import React from 'react';
import { Box } from '@mui/material';

import LoginBanner from '../components/login/LoginBanner';
import HorizontalBar from '../components/HorizontalBar';
import LoginNavbar from '../components/login/LoginNavbar';
import '../assets/css/Login.css';
import theme, { Colours } from '../assets/theme/theme';




function Login() {
  return (
    <Box className='Login-body-Style' 
    >
        <LoginNavbar/>
        <LoginBanner />
      
    </Box>
  )
}

export default Login