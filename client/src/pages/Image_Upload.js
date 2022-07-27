import React, { useState } from 'react';
import { useEffect } from 'react';
import { Box, Container, Paper, ThemeProvider, Typography } from '@mui/material';
import theme, { Colours } from '../assets/theme/theme'; //to use theme provider,need to import this

import Navbar from '../components/Navbar';
import PageTitle from '../components/User/PageTitle';

import ImageUpload from '../components/UploadImage/ImageUpload'
import Details from '../components/UploadImage/Details';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import Button from '@mui/material/Button';

// for scroll reveals
import Fade from 'react-reveal/Fade';

//import "../assets/css/ImageUpload.css" 

const MainHeader = "Image Upload";

function Image_Upload() {

   useEffect(() => {
        document.title = "Add Image Upload";
    })

  return (
    <Box className='image_upload_body' sx={{ margin:0}}>


      <Fade top>
        <Navbar />
        <PageTitle MainHeader = {MainHeader}/>
      </Fade>  
        
      <Fade right>
        <Box float="right" textAlign="right" marginRight="10%" style={{color:'#ccc', fontSize:"150%", marginBottom:"1%"}}>

            <select id="select" style={{ width: '15%', marginRight: '50px', backgroundColor:"#2E2E2E", border:"none", color:"#E0E0E0", padding:"8px"}}>
              <option>Breakfast</option>
              <option>Lunch</option>
              <option>Dinner</option>
              <option>Other</option>
            </select>

            <AddCircleIcon />
            Add New Food
        </Box>
      </Fade>

      <Fade left>
        <Box display="flex" flexdirection = "row" marginLeft="5%">
          <ImageUpload />
          <Details />
        </Box>
      </Fade>

      <Fade right>
        <Button variant="outlined" style={{color:'#95CD41', borderColor: "#95CD41",
           float:"right",
           marginRight:"8%",
           marginTop:"2%"
           ,"&:hover": {
           backgroundColor: "#15e577",
           borderColor:"#564345"
        } }}>
          Check
        </Button>
      </Fade>
        
    </Box>
  )
}

export default Image_Upload