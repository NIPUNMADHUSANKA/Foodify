import React from 'react'
import { Box } from '@mui/material';
import ForgetPasswordBanner from '../components/login/ForgetPasswordBanner';
import RegisterNavbar from '../components/Register/RegisterNavbar';
import '../assets/css/Registeruser.css';

const ForgetPassword = () => {
  return (
    <Box className='Register-body-Style' >
        <RegisterNavbar />
        <ForgetPasswordBanner />

    </Box>
    
  )
}

export default ForgetPassword