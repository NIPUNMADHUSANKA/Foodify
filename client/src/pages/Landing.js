import React from 'react';
import { Box } from '@mui/material';

import FoodBanner from '../components/FoodufyBanner';
import HorizontalBar from '../components/HorizontalBar';
import AboutUs from '../components/AboutUs';

function Landing() {
  return (
    <Box>
        <FoodBanner />
        <HorizontalBar />
        <AboutUs />
       
    </Box>
  )
}

export default Landing