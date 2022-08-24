
import React from 'react';
import { Box } from '@mui/material';
import EditAboutUs from './EditAboutUs';
import RestaurantOffers from '../RestaurantOffers';
import RestaurantMenu from '../RestaurantMenu';
import RestaurantEditContact from './RestaurantEditContact';
import RestaurantComment from '../RestaurantComments';

import AboutImage from '../../../assets/images/golden-cutlery.jpg';//exporting the image for about section
import Map from '../../../assets/images/GoogleMapTA.webp';

// for scroll reveals
import Fade from 'react-reveal/Fade';

// to collect the description imformation
// const details = {
//   "detail1" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quosblanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eumquasi quidem quibusdam.",
//   "detail2" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quosblanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eumquasi quidem quibusdam.",
//   "detail3" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quosblanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eumquasi quidem quibusdam.",
// }

// to collect the description imformation
const details = {
    "detail1": "One of Sri Lankan's most beloved restaurants,",
    "detail2": "Bojun Hut has welcomed guests to enjoy its contemporary Sri Lankan cuisine, warm hospitality, and unparalleled service in Colombo City for over two decades.",
    "detail3": " Chef Michael Anthony's ever-evolving seasonal menu showcases the restaurant's relationships with local farms and purveyors.",
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

const RestaurantHome = () => {
    return (
        <Box>

            <Fade left>
                <EditAboutUs AboutImage={AboutImage} details={details} />
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
                <RestaurantEditContact Map={Map} details={contactdetails} />
            </Fade>

        </Box>
    )
}

export default RestaurantHome
