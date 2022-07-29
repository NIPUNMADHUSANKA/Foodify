import React from 'react'
import { Box, Typography, Button, ThemeProvider, Stack } from '@mui/material';

import FOODIFY_BANNER from '../assets/images/foodify-banner.png';

import theme, { Colours } from './../assets/theme/theme';//to use theme provider,need to import this

import Zoom from '@mui/material/Zoom'; //Zoom text
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import arrowDown from "react-useanimations";


function FoodufyBanner() {
  return (

    <ThemeProvider theme={theme}>

      <Box textAlign="center">
    
        <Box sx={{mt:{lg:'12%', xs:'10%'},ml:{sm:'50px'}, 
                [theme.breakpoints.down('sm')]: {
                  padding:"5%"
                }}}
        position="relative" p="20px">

            <Zoom in={true}>
                  
                  <Typography color="#95CD41" fontWeight="400" variant="h2" fontSize="500%"
                    sx= {{[theme.breakpoints.down('md')]: {
                      fontSize: '350%'
                    },
                    [theme.breakpoints.down('sm')]: {
                      fontSize: '230%'
                    }
                  }}
                  >
                    Healthy Foods
                  </Typography>

            </Zoom>

            <Zoom in={true} style={{ transitionDelay: '500ms' }}>

                <Typography color="#FFFFFF" fontWeight="400" variant="h3" fontSize="300%"
                  sx= {{[theme.breakpoints.down('md')]: {
                    fontSize: '200%'
                  },
                  [theme.breakpoints.down('sm')]: {
                    fontSize: '180%'
                  }
                  }}>
                  Recommendation <br /> & <br /> Order Foods
                </Typography>

            </Zoom>
            

            <Zoom in={true} style={{ transitionDelay: '600ms' }}>
            
                <Box textAlign="center" mt="2%">

                      <Button variant="outlined" style={{marginRight:"2%", color:'#95CD41', borderColor: "#95CD41"
                      ,"&:hover": {
                      backgroundColor: "#15e577",
                      borderColor:"#564345"
                    } }}>
                      SignIn
                    </Button>
                    
                    <Button variant="outlined" style={{color:'#95CD41', borderColor: "#95CD41",
                      "&:hover": {
                      backgroundColor: "#15e577",
                      borderColor:"#564345"
                    } }}>
                      SignUp
                    </Button>


                </Box>

            </Zoom>

        </Box>

      </Box>

    </ThemeProvider>
  )
}

export default FoodufyBanner