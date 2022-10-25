import React, { useState } from 'react';
import { useEffect } from 'react';
import { Box } from '@mui/material';
import theme, { Colours } from '../assets/theme/theme'; //to use theme provider,need to import this
import '../assets/css/Profile.css';
import '../assets/css/Profile.css';
import UserOrderd from '../components/restaurant_order/user_oreder_details';

// for scroll reveals
import Fade from 'react-reveal/Fade';
import Navbar from '../components/Navbar';
import { useLocation } from "react-router-dom";


const RestaurantOrder = () => {

  const location = useLocation();
  console.log(location);

  const item = location.state.detailsRow;
  const orderId = location.state.orderId1;

  return (
    <Box marginTop="0px">
      
      <Fade top>
            <Navbar />
      </Fade>
      <UserOrderd item={item} orderId={orderId} />

    </Box>

    
  )
}

export default RestaurantOrder
