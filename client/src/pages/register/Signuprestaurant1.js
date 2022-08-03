import React from 'react'
import { Box } from '@mui/material';
import RegisterBannerRestaurant1 from '../../components/Register/RegisterBannerRestaurant1';
import RegisterNavbar from '../../components/Register/RegisterNavbar';
import '../../assets/css/Registeruser.css';

const Signuprestaurant1 = () => {
  return (
    <Box className='Register-body-Style' >
        <RegisterNavbar />
        <RegisterBannerRestaurant1 />

    </Box>
    
  )
}

export default Signuprestaurant1