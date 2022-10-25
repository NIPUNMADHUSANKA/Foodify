import React from 'react';
import { Box } from '@mui/material';
import '../assets/css/Profile.css';
import '../assets/css/Profile.css';
import UserOrderd from '../components/restaurant_order/user_oreder_details';

// for scroll reveals
import Fade from 'react-reveal/Fade';
import Navbar from '../components/Navbar';


const RestaurantOrder = () => {


  return (
    <Box marginTop="0px">
      
      <Fade top>
            <Navbar />
      </Fade>
      <UserOrderd/>

    </Box>

    
  )
}

export default RestaurantOrder
