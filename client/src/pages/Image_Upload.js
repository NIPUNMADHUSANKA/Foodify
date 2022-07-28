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
    <Box className='image_upload_body'  >


      <Fade top>
        <Navbar />
        <PageTitle MainHeader = {MainHeader}/>
      </Fade>
        
      <Fade right>
        <Box  style={{color:'#ccc', fontSize:"100%", marginBottom:"1%", float:"right", marginRight:'18%'}}>

            <select id="select" style={{backgroundColor:"#2E2E2E", borderRadius:"5px", marginRight:"20px"  ,border:"none", color:"#E0E0E0", padding:"8px"}}>
              <option>Breakfast</option>
              <option>Lunch</option>
              <option>Dinner</option>
              <option>Other</option>
            </select>

            
            Add New Food
            
        </Box>
      </Fade>

      <Fade left>
          <Box mt="5%">
              
                <Box display="flex" flexdirection = "row" marginLeft="5%" 
                sx={{[theme.breakpoints.down('lg')]:{
                    flexDirection:"column",
                    textAlign:"center",
                    justifyContent:"center",
                    alignItems:"center",
                    mt:"7%",
                    
               },
               [theme.breakpoints.down('md')]:{
                mt:"10%"                
              },
              [theme.breakpoints.down('sm')]:{
               mt:"15%"                
             }
           }} >

                <Box>
                  <ImageUpload border="1px solid #000" />
                </Box>

                <Box>
                  
                </Box>
                  
  
                </Box>
              

                
                  <Button variant="outlined" style={{color:'#95CD41', borderColor: "#95CD41",
                    float:"right",
                    marginRight:"20%",
                    marginBottom:"8%",
                    marginTop:"2%"
                    ,"&:hover": {
                    backgroundColor: "#15e577",
                    borderColor:"#564345"
                  } }}>
                    Check
                  </Button>
                         
          </Box>
      </Fade>
    </Box>
  )
}

export default Image_Upload