import React, { useState } from 'react';
import { useEffect } from 'react';
import Carousel from 'react-elastic-carousel';

import { Box, Container, Paper, ThemeProvider, Typography } from '@mui/material';
import theme, { Colours } from '../assets/theme/theme'; //to use theme provider,need to import this

import PageTitle from '../components/User/PageTitle';

// for scroll reveals
import ImageDetails from '../components/UploadImage/ImageDetails';

// for scroll reveals
import Fade from 'react-reveal/Fade';
import Navbar from '../components/Navbar';


const MainHeader = "Image Upload";

function Image_Upload() {

    useEffect(() => {
        document.title = "Image Upload";
    })

  return (
    <Box className='image_upload_body' height="100%" >
      
      <Fade top>
        <Navbar />
        <PageTitle MainHeader = {MainHeader}/>
      </Fade>
        
        <Box>
            <ImageDetails />
        </Box>


    </Box>
  )
}

export default Image_Upload