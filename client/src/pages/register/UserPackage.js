import React from 'react'
import { Box } from '@mui/material';
import RegisterBanner1 from '../../components/Register/RegisterBanner1';
import RegisterNavbar from '../../components/Register/RegisterNavbar';
import '../../assets/css/Registeruser.css';

const UserPackage = () => {
  return (
    <Box className='Registeruserpackage-body-Style' >
        <RegisterNavbar />

        <RegisterBanner1 />

    </Box>
    
  )
}

export default UserPackage