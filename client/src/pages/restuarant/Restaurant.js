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

import AboutImage from '../../assets/images/golden-cutlery.jpg';//exporting the image for about section
import Map from '../../assets/images/GoogleMapTA.webp';

// for scroll reveals
import Fade from 'react-reveal/Fade';
import Navbar from './../../components/Navbar';

// to collect the description imformation
const details = {
  "detail1": "One of Sri Lankan's most beloved restaurants,",
  "detail2": "Bojun Hut has welcomed guests to enjoy its contemporary Sri Lankan cuisine, warm hospitality, and unparalleled service in Colombo City for over two decades.",
  "detail3": " Chef Michael Anthony's ever-evolving seasonal menu showcases the restaurant's relationships with local farms and purveyors.",
}


const contactdetails = {
  "Location": "Location",
  "Address": "401/A1,3rd lane,Gale Road",
  "TpNumber": "011-2738920",
}

const comments = {
  "name": "username",
  "detail1": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quosblanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eumquasi quidem quibusdam.",
}

const comments1 = [
  {
    "name": "Navod",
    "detail1": "This is a good restaurant",
  },
  {
    "name": "Sankalpa98",
    "detail1": "This place has good hospitality",
  },
  {
    "name": "Nisheda",
    "detail1": "This place provides good service",
  },
  {
    "name": "Shehan21",
    "detail1": "This offers food with exelent quality",
  },
  {
    "name": "Jane",
    "detail1": "This is a good restaurant",
  }
]



const Restaurant = () => {

  useEffect(() => {
    document.title = "Restaurant Page";
  })

  return (
    <Box>


      <Fade top>
        <Navbar />
      </Fade>

      <Fade>
        <RestaurantBanner />
      </Fade>

      <Fade left>
        <RestaurantAbout AboutImage={AboutImage} details={details} />
      </Fade>

      <Fade right>
        <RestaurantOffers />
      </Fade>

      <Fade bottom>
        <RestaurantMenu />
      </Fade>

      <Fade big>
        <RestaurantComment comments={comments1} />
      </Fade>

      <Fade left>
        <RestaurantContact Map={Map} details={contactdetails} />
      </Fade>

    </Box>
  )
}

export default Restaurant
