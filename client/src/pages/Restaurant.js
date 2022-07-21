import React, { useState } from 'react';
import { useEffect } from 'react';
import { Box } from '@mui/material';
import theme, { Colours } from '../assets/theme/theme'; //to use theme provider,need to import this

// to import necessacry components of the restuarant page
import RestaurantBanner from '../components/restaurant/RestaurantBanner';
import RestaurantAbout from '../components/AboutUs2';
import RestaurantOffers from '../components/restaurant/RestaurantOffers';
import RestaurantMenu from '../components/restaurant/RestaurantMenu';
import RestaurantContact from '../components/restaurant/RestaurantContact';

import AboutImage from '../assets/images/golden-cutlery.jpg';//exporting the image for about section

// to collect the description imformation
const details = {
  "detail1" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quosblanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eumquasi quidem quibusdam.",
  "detail2" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quosblanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eumquasi quidem quibusdam.",
  "detail3" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quosblanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eumquasi quidem quibusdam.",
}


const Restaurant = () => {

  useEffect(() => {
    document.title = "Restaurant Page";
  })

  return (
    <Box>

      <RestaurantBanner />
      <RestaurantAbout AboutImage = {AboutImage}  details = {details} />
      <RestaurantOffers />
      <RestaurantMenu />
      <RestaurantContact />
  
    </Box>
  )
}

export default Restaurant
