import React from 'react'
import { Box } from '@mui/material';
import RegisterBannerUser from '../components/Register/RegisterBannerUser';
import RegisterNavbar from '../components/Register/RegisterNavbar';
import '../assets/css/Registeruser.css';

const Signupuser = () => {
  return (
    <Box className='Register-body-Style' >
        <RegisterNavbar />
        <RegisterBannerUser />

    </Box>
    
  )
}

export default Signupuser