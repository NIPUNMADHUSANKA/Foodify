import { Box, Button } from '@mui/material';
import React from 'react';
import Carousel from '../carousel/carousel';

import CardImage from '../../assets/images/cardfood.png';
import theme, { Colours } from '../../assets/theme/theme';
import EditIcon from '@mui/icons-material/Edit';

import image1 from '../../assets/images/food categories/1.jpg';
import image2 from '../../assets/images/food categories/2.jpg';
import image3 from '../../assets/images/food categories/3.webp';
import image4 from '../../assets/images/food categories/4.jpg';
import image5 from '../../assets/images/food categories/5.jpg';

// -------to import forms------------
import MenuForm from './profile/MenuForm';

// ----------------------for the caousel----------------------
const item = {
  "id": "1",
  "title": "All day breakfast",
  "image": image1,
  "decription": "",
  "name": "view",
}

const item1 = [
  {
    "id": "1",
    "title": "All day breakfast",
    "image": image1,
    "decription": "",
    "name": "view",
    "name2": "Edit",
    "name3": "Delete"
  },
  {
    "id": "2",
    "title": "Rise",
    "image": image2,
    "decription": "",
    "name": "view",
    "name2": "Edit",
    "name3": "Delete"
  },
  {
    "id": "3",
    "title": "Sea Foods",
    "image": image3,
    "decription": "",
    "name": "view",
    "name2": "Edit",
    "name3": "Delete"
  },
  {
    "id": "4",
    "title": "Drinks",
    "image": image4,
    "decription": "",
    "name": "view",
    "name2": "Edit",
    "name3": "Delete",
  },
  {
    "id": "5",
    "title": "Soup",
    "image": image5,
    "decription": "",
    "name": "view",
    "name2": "Edit",
    "name3": "Delete"
  }
]

const title = "Menu";
const itemcount = 4;
const bgcolor1 = "theme.Colours.secondary";

var ROLE = null;

// ------------------------------------------------------------------------------

const RestaurantMenu = () => {
  return (
    <Box sx={{
      position: 'relative',
      width: '100%',
      p: '0px',
    }}>

      {/*------------------------------START SET USERTOLE-------------------------------------------------*/}
      {(() => {
        if (JSON.parse(localStorage.getItem('ROLE'))) {
          ROLE = JSON.parse(localStorage.getItem('ROLE'))[0].authority;
          console.log(ROLE)
        }
      }
      )()}
      {/*------------------------------END SET USERTOLE-------------------------------------------------*/}

      {(() => {
        if (ROLE === "restaurant") {
          return (
          <MenuForm />
          );
        }
      }
      )()}


      <Carousel item={item1} title={title} count={itemcount} bgcolour={bgcolor1} />


    </Box>
  )
}

export default RestaurantMenu
