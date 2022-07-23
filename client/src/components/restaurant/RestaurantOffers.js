import { Box } from '@mui/material';
import React from 'react';
import Carousel from '../carousel/carousel';

import CardImage1 from '../../assets/images/offer1.jpg';
import CardImage2 from '../../assets/images/offer2.jpg';
import CardImage3 from '../../assets/images/offer5.jpg';
import CardImage4 from '../../assets/images/offer6.jpg';


import BackgroundImage from '../../assets/images/pv4WkDi.webp';

const item1 = {
  "id": "1",
  "title": "",
  "image":CardImage1,
  "decription":"",
  "name":"view"
}

const item2 = {
  "id": "1",
  "title": "view",
  "image":CardImage2,
  "decription":"",
}
const item3 = {
  "id": "1",
  "title": "view",
  "image":CardImage3,
  "decription":"",
}
const item4 = {
  "id": "1",
  "title": "view",
  "image":CardImage4,
  "decription":"",
}

// use when giving separate button name


const title = "Offers";

const RestaurantOffers = () => {
  return (
    <Box sx={{
      position:'relative',
      width:'100%',
      p:'0px',
    }}>
      <Carousel item = {item1} title={title} bimage={BackgroundImage}/>
    </Box>
  )
}

export default RestaurantOffers
