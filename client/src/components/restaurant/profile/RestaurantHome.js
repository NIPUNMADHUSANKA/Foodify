
import React from 'react';
import { Box } from '@mui/material';
import RestaurantAbout from '../../AboutUs2';
import RestaurantOffers from '../RestaurantOffers';
import RestaurantMenu from '../RestaurantMenu';
import RestaurantContact from '../RestaurantContact';
import RestaurantComment from '../RestaurantComments';

import AboutImage from '../../../assets/images/golden-cutlery.jpg';//exporting the image for about section
import Map from '../../../assets/images/GoogleMapTA.webp';

// for scroll reveals
import Fade from 'react-reveal/Fade';

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

const RestaurantHome = () => {
    return (
        <Box>

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
                <RestaurantComment comments={comments} />
            </Fade>

            <Fade left>
                <RestaurantContact Map={Map} details={contactdetails} />
            </Fade>

        </Box>
    )
}

export default RestaurantHome
