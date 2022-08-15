import React from 'react'
import { Box } from '@mui/material';
import RegisterBanner0 from '../../components/Register/RegisterBanner0';
import RegisterNavbar from '../../components/Register/RegisterNavbar';
import '../../assets/css/Registeruser.css';

const Signup = () => {
  return (
    <Box className='Registerrole-body-Style' >
        <RegisterNavbar />

        <RegisterBanner0 />

    </Box>
    
  )
}

export default Signup