import React from 'react';
import { Box } from '@mui/material';

import FoodBanner from '../components/FoodufyBanner';
import HorizontalBar from '../components/HorizontalBar';
import AboutUs from '../components/AboutUs2';
import ContactUs from '../components/ContactUs';
import Navbar from '../components/Navbar';

import FOODIFY_ABOUTUS from '../assets/images/golden-cutlery.jpg';

// for scroll reveals
import Fade from 'react-reveal/Fade';

const details = {
  "detail1" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quosblanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eumquasi quidem quibusdam.",
  "detail2" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quosblanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eumquasi quidem quibusdam.",
  "detail3" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quosblanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eumquasi quidem quibusdam.",
}

function Landing() {
  return (

    <div className='landingbg'>

    <Fade top>
        <Navbar />

        <FoodBanner />
    </Fade>
      
      <Fade left>
        <Box mt="8%">
          <AboutUs AboutImage = {FOODIFY_ABOUTUS}  details = {details} />
       </Box>
      </Fade>
       
      <Fade right>
        <Box>
          <ContactUs />
       </Box>
      </Fade>
       
        
        
    </div>

  )
}

export default Landing