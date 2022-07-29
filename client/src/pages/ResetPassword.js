import React from 'react'
import { Box } from '@mui/material';
import ResetPasswordBanner from '../components/login/ResetPasswordBanner';
import RegisterNavbar from '../components/Register/RegisterNavbar';
import '../assets/css/Registeruser.css';

const ResetPassword = () => {
  return (
    <Box className='Register-body-Style' >
        <RegisterNavbar />
        <ResetPasswordBanner />

    </Box>
    
  )
}

export default ResetPassword