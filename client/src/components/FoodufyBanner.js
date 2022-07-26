import React from 'react'
import { Box, Typography, Button, ThemeProvider } from '@mui/material';

import FOODIFY_BANNER from '../assets/images/foodify-banner.png';

import theme, { Colours } from './../assets/theme/theme';//to use theme provider,need to import this


function FoodufyBanner() {
  return (

    <ThemeProvider theme={theme}>

      <Box >
    
        <Box sx={{mt:{lg:'12%', xs:'10%'},ml:{sm:'50px'}, 
                [theme.breakpoints.down('sm')]: {
                  padding:"5%"
                }}}
        position="relative" p="20px">

            <Typography color="#95CD41" fontWeight="350" variant="h3" fontSize="390%"
              sx= {{[theme.breakpoints.down('md')]: {
                fontSize: '300%'
              }}}
            >
              Healthy Foods
            </Typography>

            <Typography color="#FFFFFF" fontWeight="400" variant="h3" fontSize="300%"
              sx= {{[theme.breakpoints.down('md')]: {
                fontSize: '250%'
              }}}>
              Recommendation & <br /> Order Foods
            </Typography>

            <Box sx={{mt:{lg:'5%', xs:'3%'}}}>

                <Button variant='contained' 
                style={{
                    borderRadius: 10,
                    backgroundColor: "#95CD41",
                    fontSize: "18px",
                    color:"#1B1B1E",
                    width:120
                }}
                >
                SIGNIN
                </Button>

                <Button variant='contained' 
                style={{
                    borderRadius: 10,
                    backgroundColor: "#95CD41",
                    fontSize: "18px",
                    color:"#1B1B1E",
                    width:120,
                    
                }}
                sx={{ml:{lg:'15px', xs:'40px'},
                [theme.breakpoints.down('xs')]: {
                  ml:{lg:"80%"}
                }}}
                >
                SIGNUP
                </Button>

            </Box>
        </Box>

        <img src={FOODIFY_BANNER} alt="banner" className='hero-banner-img' />
      
      </Box>

    </ThemeProvider>
  )
}

export default FoodufyBanner