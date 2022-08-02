import { Box, Button } from '@mui/material';
import React from 'react';
import Carousel from '../carousel/carousel';

import CardImage from '../../assets/images/cardfood.png';
import theme, { Colours } from '../../assets/theme/theme';
import EditIcon from '@mui/icons-material/Edit';

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
      <Button sx={{
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
        }}/>}>Edit Menu</Button>
      <Carousel item = {item} title={title} count={itemcount} bgcolour = {bgcolor1}/>
    </Box>
  )
}

export default RestaurantMenu
