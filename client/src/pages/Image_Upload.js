import React, { useState } from 'react';
import { useEffect } from 'react';
import { Box, Container, Paper, ThemeProvider, Typography } from '@mui/material';
import theme, { Colours } from '../assets/theme/theme'; //to use theme provider,need to import this

import Navbar from '../components/Navbar';
import PageTitle from '../components/User/PageTitle';

import ImageUpload from '../components/UploadImage/ImageUpload'
import Details from '../components/UploadImage/Details';
import AddCircleIcon from '@mui/icons-material/AddCircle';


//import "../assets/css/ImageUpload.css" 

const MainHeader = "Image Upload";

function Image_Upload() {

   useEffect(() => {
        document.title = "Add Image Upload";
    })

  return (
    <Box className='image_upload_body' sx={{ margin:0}}>
        
        <Navbar />
        <PageTitle MainHeader = {MainHeader}/>

        <Box textAlign="right" marginRight="10%" style={{color:'#ccc', fontSize:"150%", marginBottom:"1%"}}>
            <AddCircleIcon />
            Add New Food
        </Box>
        
        <Box display="flex" flexdirection = "row" marginLeft="5%">
          <ImageUpload />
          <Details />
        </Box>
        
    </Box>
  )
}

export default Image_Upload