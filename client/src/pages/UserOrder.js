import React, { useState } from 'react';
import { useEffect } from 'react';
import { Box } from '@mui/material';
import theme, { Colours } from '../assets/theme/theme'; //to use theme provider,need to import this
import '../assets/css/Profile.css';
import Unavbar from '../components/user_order/user_order_navbar';
import UserOrderBanner from '../components/user_order/user_order_upper';
const RestaurantOrder = () => {


  return (
    <Box marginTop="0px">
      <Unavbar/>
      <UserOrderBanner/>

    </Box>

    
  )
}

export default RestaurantOrder
