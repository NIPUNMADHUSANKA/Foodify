import React from 'react'
import { Box, Typography } from '@mui/material';
import FOODIFY_ABOUTUS from '../assets/foodify-logo.png';
import SOCIAL_ICONS from '../assets/Social media links.png'


function ContactUs() {
  return (
    <Box sx={{mt:{lg:'150px', xs:'70px'}}}
    position="relative" p="20px" backgroundColor="rgba(39, 39, 39, 0.5)">

        <img src={FOODIFY_ABOUTUS} alt="banner" className='footer-image' />
        
        
        <Typography color="#FFFFFF" fontWeight="200" sx={{fontSize:{lg:'20px', xs:'40px'},ml:{sm:'600px'}}}>
            Address: No 25, Colombo-7, Sri-Lanaka <br />
            Tel: +94 11 22 95 789/ +94 77 59 368 <br />
            Fax: +94 11 22 95 789
        </Typography>

        <Typography color="#FFFFFF" fontWeight="200" sx={{fontSize:{lg:'20px', xs:'40px'},ml:{sm:'600px'}}}>
       
        </Typography>

        <img src={SOCIAL_ICONS} alt="banner" className='social-media-image' />

    </Box>
  )
}

export default ContactUs;