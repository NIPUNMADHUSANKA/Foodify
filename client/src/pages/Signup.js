import React from 'react'
import { Box } from '@mui/material';
import RegisterBannerUser from '../components/Register/RegisterBannerUser';
import RegisterNavbar from '../components/Register/RegisterNavbar';

const Signup = () => {
  return (
    <Box>
        <RegisterNavbar />
        <RegisterBannerUser />
      
    </Box>
    
  )
}

export default Signup