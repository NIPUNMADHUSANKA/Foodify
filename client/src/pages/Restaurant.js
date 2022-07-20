import React, { useState } from 'react';
import { Box } from '@mui/material';
import { useEffect } from 'react';


// to import necessacry components of the restuarant page
import RestaurantBanner from '../components/restaurant/RestaurantBanner';
import RestaurantAbout from '../components/restaurant/RestaurantAbout';
import RestaurantOffers from '../components/restaurant/RestaurantOffers';
import RestaurantMenu from '../components/restaurant/RestaurantMenu';
import RestaurantContact from '../components/restaurant/RestaurantAbout';



const Restaurant = () => {

  useEffect(() => {
    document.title = "Restaurant Page";
  })

  return (
    <Box>

      <RestaurantBanner />
      <RestaurantAbout />
      <RestaurantOffers />
      <RestaurantMenu />
      <RestaurantContact />
  
    </Box>
  )
}

export default Restaurant
