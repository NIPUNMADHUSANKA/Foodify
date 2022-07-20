import React from 'react';
import { Box } from '@mui/material';

import FoodBanner from '../components/FoodufyBanner';
import HorizontalBar from '../components/HorizontalBar';
import AboutUs from '../components/AboutUs2';
import ContactUs from '../components/ContactUs';

import FOODIFY_ABOUTUS from '../assets/images/golden-cutlery.jpg';

const details = {
  "detail1" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quosblanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eumquasi quidem quibusdam.",
  "detail2" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quosblanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eumquasi quidem quibusdam.",
  "detail3" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quosblanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eumquasi quidem quibusdam.",
}

function Landing() {
  return (
    <Box>
        <FoodBanner />
        <HorizontalBar />
        <AboutUs AboutImage = {FOODIFY_ABOUTUS}  details = {details} />
        <ContactUs />
       
    </Box>
  )
}

export default Landing