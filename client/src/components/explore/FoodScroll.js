import React from 'react';
import {ThemeProvider, Box, Typography} from '@mui/material';
import Carousel from 'react-elastic-carousel';

import FoodCard from './RestaurantCard'
import theme, { Colours } from '../../assets/theme/theme'; //to use theme provider,need to import this
import { width } from '@mui/system';

const breakpoints = [
    {width:1, itemsToShow: 1},
    {width:550, itemsToShow: 2},
    {width:770, itemsToShow: 4},
    {width:1200, itemsToShow: 4.5},
]

function FoodScroll(details) {

  
    const X = [1,2,3,4,5,6,7,8,9,10,11,12,];
    console.log(X)
    return (
  
        <Box
        sx = {{
            color: "primary",
            mt: "4%",
            mb: "6%"
        }}>
          <Carousel breakPoints={breakpoints} pagination={true} disableArrowsOnEnd={true} sx={{paddingTop:"1%"}}>
            
          {Array.isArray(X)
           ? 
           X.map(Y=>
                (<FoodCard/> ))
           : null   
          }
          
          </Carousel>
        </Box>
  
    )
  }
  
export default FoodScroll