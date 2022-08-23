import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'

import Background from '../../assets/images/categoryBackground.png'
import theme, { Colours } from '../../assets/theme/theme'

import CardImage from '../../assets/images/plate1.jpg';
import CarouselCard2 from '../../components/carousel/CarouselCard2';
import Carousel from 'react-elastic-carousel'; //for the carousel
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Link} from 'react-router-dom';

// ---------------css for carousel-------------------------

// -----------------------------for the carousel-------------------
const item = {
  "id": "1",
  "title": "Name of the food",
  "image": CardImage,
  "name2": "Yoe foods",
  "price": "Rs.200",
  "name": "Order Now",
}

const itemcount = 4;

// ------------------------------------------------------

const FoodCategory = () => {

  return (

    <Box sx={{
      width: '100%',
      height: "auto",
      padding: 0,
      margin: 0,
      background: `url(${Background})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 100%",
    }}>
      {/*------------------------- main area--------------------- */}
      <Box sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        marginTop: 0,
        padding: 0,

      }}>

        <Box sx={{
          marginTop: "8%",
          [theme.breakpoints.down('sm')]: {
            marginTop: "40%",
          },
        }}>
          {/* ---------title area------------ */}
          <Box sx={{
            width: '100%',
            display:"flex",
            flexDirection:"row",
          }}>
            <IconButton component={Link} to={"/Restaurant/#menu"}>
              <ArrowBackIcon sx={{
                color:Colours.green,
                fontSize:"2rem",
              }}/>
            </IconButton>
            <Typography variant="h4" gutterBottom component="div" sx={{
              width: '100%',
              textAlign: 'left',
              color: Colours.green,
              padding:"1rem",
              margin:0,
              [theme.breakpoints.down('sm')]: {
                fontSize: '30px',
                padding: '2px',
              },
            }}>
              Sea Food
            </Typography>
          </Box>
          {/* ---------end of title area------------ */}


          {/* ---------------carousel area-------------------------- */}

          <Box sx={{
            padding:"1rem",
          }}>
            <Carousel
              itemsToShow={itemcount}
              easing={"ease"}
              breakPoints={theme.breakPoints = [
                { width: 1, itemsToShow: 1 },
                { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
                { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
                { width: 1450, itemsToShow: 5 },
                { width: 1750, itemsToShow: 6 },
              ]}

            >
              {/* <Box> */}
              <CarouselCard2 item={item} />
              <CarouselCard2 item={item} />
              <CarouselCard2 item={item} />
              <CarouselCard2 item={item} />
              <CarouselCard2 item={item} />
              <CarouselCard2 item={item} />

            </Carousel>
          </Box>
          {/* </Box> */}

          {/* ---------------end of carousel area-------------------------- */}
        </Box>

      </Box>

    </Box >

  )
}

export default FoodCategory
