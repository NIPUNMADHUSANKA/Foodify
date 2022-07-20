import React from 'react';
import { Box } from '@mui/material';

import FoodBanner from '../components/FoodufyBanner';
import HorizontalBar from '../components/HorizontalBar';
import AboutUs from '../components/AboutUs';
import ContactUs from '../components/ContactUs';

function Landing() {
  return (
    <Box>
        <Navbar />
        <FoodBanner />
        <HorizontalBar />
        <AboutUs />
        <ContactUs />
       
    </Box>

  )
}

export default Landing