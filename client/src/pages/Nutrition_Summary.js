import React, { useState } from 'react';
import { useEffect } from 'react';
import Carousel from 'react-elastic-carousel';

import { Box, Container, Paper, ThemeProvider, Typography } from '@mui/material';
import theme, { Colours } from '../assets/theme/theme'; //to use theme provider,need to import this

import Navbar from '../components/Navbar';
import PageTitle from '../components/User/PageTitle';
import Nutrition_Card from '../components/User/Nutrition_Card';
import Nutrition_Card_Summary from '../components/User/Nutrition_Card_Summary';
const MainHeader = "Nutritions";

function Nutrition_Summary() {

    useEffect(() => {
        document.title = "Nutritions";
    })

  return (
    <Paper className='image_upload_body'>
        <Navbar />
        <PageTitle MainHeader = {MainHeader}/>
        
        <Carousel pagination={false} disableArrowsOnEnd={true} >
            <Nutrition_Card />
            <Nutrition_Card_Summary />
        </Carousel>


    </Paper>
  )
}

export default Nutrition_Summary