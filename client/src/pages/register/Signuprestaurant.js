import React from 'react'
import { Box } from '@mui/material';
import RegisterBannerRestaurant from '../../components/Register/RegisterBannerRestaurant';
import RegisterNavbar from '../../components/Register/RegisterNavbar';
import '../../assets/css/Registeruser.css';

const Signuprestaurant = () => {
  return (
    <Box className='Register-body-Style' >
        <RegisterNavbar />
        <RegisterBannerRestaurant />

    </Box>
    
  )
}

export default Signuprestaurant