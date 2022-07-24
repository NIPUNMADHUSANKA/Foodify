import React, { useState } from 'react';
import { useEffect } from 'react';
import { Box, Container, Paper, ThemeProvider, Typography } from '@mui/material';
import theme, { Colours } from '../assets/theme/theme'; //to use theme provider,need to import this

import Navbar from '../components/Navbar';
import PageTitle from '../components/User/PageTitle';

//import UploadImages from "../components/UploadImage/upload-images.component";

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
        

    
    </Box>
  )
}

export default Image_Upload