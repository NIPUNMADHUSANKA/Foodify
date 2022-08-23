import React, { useState } from 'react';
import { useEffect } from 'react';
import { Box, Container, Paper, ThemeProvider, Typography } from '@mui/material';
import theme, { Colours } from '../assets/theme/theme'; //to use theme provider,need to import this

import Carousel from 'react-elastic-carousel';

import PageTitle from '../components/User/PageTitle';
import AddFoodMenuDes from '../components/restaurant/AddFoodMenuDes';
import AddFoodMenuIns from '../components/restaurant/AddFoodMenuIns';

import Avatar from '@mui/material/Avatar';

// when calling data, nned to take from there
import bgImage from '../assets/images/offersbg.png';
import resturantLogo from '../assets/images/restaurant-logo.jpg'



// for scroll reveals
import Fade from 'react-reveal/Fade';
import Navbar from '../components/Navbar';

import { margin } from '@mui/system';
import AddFoodMenuCon from '../components/restaurant/AddFoodMenuCon';

const MainHeader = "Add Foods Menu";

function AddFoodMenu() {

  useEffect(() => {
    document.title = "Add Foods Menu";
  })

  return (
    <Box sx={{
      margin: 0,
      padding: 0,
      width: "100%",
      height: "100vh",
      background: `url(${bgImage})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      justifyContent:"center",
      [theme.breakpoints.down('sm')]: {
          flexDirection: "column-reverse",
      },
      }}>
      <Fade top>
        <Navbar />

        <Box  sx={{
          display:"flex",
          flexDirection:"row"
          }}>

          <Avatar src={resturantLogo} sx={{
            width:"6%",
            height:"6%",
            mt:"2%",
            ml:"2%"
          }}/>
          <PageTitle MainHeader = {MainHeader}/>

        </Box>

      </Fade>

      
        
     
      <Box mt="3%">
        <Fade left>
          <Carousel pagination={false} disableArrowsOnEnd={true} >
              <AddFoodMenuDes />
              <AddFoodMenuIns />
              <AddFoodMenuCon />
              
          </Carousel>
        </Fade>
      </Box>

      
      


    </Box>
  )
}

export default AddFoodMenu