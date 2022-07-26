import React, { useState } from 'react';
import { useEffect } from 'react';
import { Box } from '@mui/material';
import theme, { Colours } from '../assets/theme/theme'; //to use theme provider,need to import this
import '../assets/css/Profile.css';
import Pnavbar from '../components/profile/profileNavbar';
import Pcarousel from '../components/profile/profileCarouselGood';
import AddressFormW from '../components/profile/AddressForm';
import '../assets/css/Profile.css';
import UserOrderd from '../components/restaurant_order/user_oreder_details';

const RestaurantOrder = () => {


  return (
    <Box marginTop="0px">
      <Pnavbar/>
      <UserOrderd/>

    </Box>

    
  )
}

export default RestaurantOrder