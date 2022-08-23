import { Box, Button } from '@mui/material';
import React from 'react';
import Carousel from '../carousel/carouselOffers';
import {Link} from 'react-router-dom';

import CardImage1 from '../../assets/images/offer1.jpg';
// import CardImage2 from '../../assets/images/offer2.jpg';
// import CardImage3 from '../../assets/images/offer5.jpg';
// import CardImage4 from '../../assets/images/offer6.jpg';


import BackgroundImage from '../../assets/images/pv4WkDi.webp';
import theme, { Colours } from '../../assets/theme/theme';
import EditIcon from '@mui/icons-material/Edit';

const item1 = {
  "id": "1",
  "title": "",
  "image": CardImage1,
  "decription": "",
  "name": "view"
}

// const item2 = {
//   "id": "1",
//   "title": "view",
//   "image":CardImage2,
//   "decription":"",
// }
// const item3 = {
//   "id": "1",
//   "title": "view",
//   "image":CardImage3,
//   "decription":"",
// }
// const item4 = {
//   "id": "1",
//   "title": "view",
//   "image":CardImage4,
//   "decription":"",
// }

// use when giving separate button name


const title = "Offers";
const itemcount = 3;

const RestaurantOffers = () => {
  return (
    <Box sx={{
      position: 'relative',
      width: '100%',
      p: '0px',
    }}>
      <Button component={Link} to={"/Restaurant/AddOffers"} sx={{
        margin: '0.5rem',
        marginBottom:0,
        marginTop:4,
        width:"15%",
        background: Colours.yellow, '&:hover': {
          backgroundColor: Colours.green,
        },
        color: Colours.dark,
        fontSize: '1rem',
        hover: Colours.green,
        borderRadius: "1rem",
        Width: "20%",
        [theme.breakpoints.down('sm')]: {
          fontSize: '8px',
          padding: '2px',
          width:"25%",
        },
      }} endIcon={<EditIcon sx={{
        color:Colours.primary,
        [theme.breakpoints.down('sm')]: {
          '& svg': {
              fontSize: "15px",
          }
      },
        }}/>}>Edit Offers</Button>
      <Carousel item={item1} title={title} bimage={BackgroundImage} count={itemcount} />
    </Box>
  )
}

export default RestaurantOffers
