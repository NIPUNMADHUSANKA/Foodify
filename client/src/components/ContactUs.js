import React from 'react'
import { Box, Typography } from '@mui/material';
import SOCIAL_ICONS from '../assets/images/Social media links.png'


function ContactUs() {
  return (

    <Box sx={{mt:"5%",ml:"45%",mr:"45%"}}> 

      <img src={SOCIAL_ICONS} alt="banner" className='social-media-image' />

    </Box>
  )
}

export default ContactUs;