import React from 'react'
import { Box } from '@mui/material';
import TermsBanner from '../../components/Register/TermsBanner';
import RegisterNavbar from '../../components/Register/RegisterNavbar';
import '../../assets/css/Registeruser.css';

const Terms = () => {
  return (
    <Box className='Register-body-Style' >
        <RegisterNavbar />
        <TermsBanner />

    </Box>
    
  )
}

export default Terms