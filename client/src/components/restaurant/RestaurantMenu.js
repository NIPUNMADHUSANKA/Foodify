import { Box } from '@mui/material';
import React from 'react';
import Carousel from '../carousel/carousel';

import CardImage from '../../assets/images/cardfood.png';

// ----------------------for the caousel----------------------
const item = {
  "id": "1",
  "title": "",
  "image":CardImage,
  "decription":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. deleniti? Eumquasi quidem quibusdam.",
  "name": "view",
}

const title = "Menu";
const itemcount = 4;
const bgcolor1 = "theme.Colours.secondary";
// ------------------------------------------------------------------------------

const RestaurantMenu = () => {
  return (
    <Box sx={{
      position:'relative',
      width:'100%',
      p:'0px',
    }}>
      <Carousel item = {item} title={title} count={itemcount} bgcolour = {bgcolor1}/>
    </Box>
  )
}

export default RestaurantMenu
