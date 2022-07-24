import React from 'react';
import { useEffect } from 'react';
import { Box } from '@mui/material';

// to import necessacry components of the restuarant page
import RestaurantBanner from '../../components/restaurant/RestaurantBanner';
import RestaurantAbout from '../../components/AboutUs2';
import RestaurantOffers from '../../components/restaurant/RestaurantOffers';
import RestaurantMenu from '../../components/restaurant/RestaurantMenu';
import RestaurantContact from '../../components/restaurant/RestaurantContact';
import RestaurantComment from '../../components/restaurant/RestaurantComments';
import Navbar from '../../components/Navbar';

import AboutImage from '../../assets/images/golden-cutlery.jpg';//exporting the image for about section
import Map from '../../assets/images/GoogleMapTA.webp';

// to collect the description imformation
const details = {
  "detail1" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quosblanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eumquasi quidem quibusdam.",
  "detail2" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quosblanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eumquasi quidem quibusdam.",
  "detail3" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quosblanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eumquasi quidem quibusdam.",
}

const contactdetails = {
  "Location":"Location",
  "Address":"Address",
  "TpNumber":"Tp Number",
}

const comments = {
  "name":"username",
  "detail1" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quosblanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eumquasi quidem quibusdam.",
}



const Restaurant = () => {

  useEffect(() => {
    document.title = "Restaurant Page";
  })

  return (
    <Box>
      <Navbar />
      <RestaurantBanner />
      <RestaurantAbout AboutImage = {AboutImage}  details = {details} />
      <RestaurantOffers />
      <RestaurantMenu />
      <RestaurantComment comments = {comments}/>
      <RestaurantContact  Map = {Map}  details = {contactdetails}/>
  
    </Box>
  )
}

export default Restaurant
