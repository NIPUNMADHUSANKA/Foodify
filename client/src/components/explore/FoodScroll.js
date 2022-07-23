import React, { Component } from 'react';
import {Box, Typography} from '@mui/material';
import Carousel from 'react-elastic-carousel';

import theme, { Colours } from '../../assets/theme/theme'; //to use theme provider,need to import this
import { width } from '@mui/system';

// import FoodCard from '../FoodCard';
import FoodCard1 from '../FoodCard';
import FoodCard2 from './FoodCard';

//toggle for food and restaurant
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const breakpoints = [
  {width:1, itemsToShow: 1},
  {width:550, itemsToShow: 2},
  {width:770, itemsToShow: 3},
  {width:1200, itemsToShow: 4},
]


function CardBar(details) {
    
    const X = [1,2,3,4,5];
    const [view, setView] = React.useState('Food');
    const [FoodCard, setCard] = React.useState('FoodCard1');

    const handleCards = (event, value) => {
        if (value){
            if (value == 'Food'){
                setCard(FoodCard1)
            } else {
                // console.log(value)
                setCard(FoodCard2)
            }
        }
        setView(value);
    };

    // console.log(X)
  return (
      <Box className='foodScroll'>
        <ToggleButtonGroup
            value={view}
            //colors not working properly
            // color= {Colours.primary.main}
            color="primary"
            exclusive
            onChange={handleCards}
            sx={{
                mb:{lg:'3%', xs:'2%'},
                ml:{sm:'2.5%'},
            }}
        >
            <ToggleButton value = 'Food' >
                <Typography color="#EFEAEA" fontWeight="200" fontSize="20px" fontFamily='Poppins' >
                    Food
                </Typography>
            </ToggleButton>
            <ToggleButton value = 'Restaurant'>
                <Typography color="#EFEAEA" fontWeight="200" fontSize="20px" fontFamily='Poppins' >
                    Restaurant
                </Typography>
            </ToggleButton>
        </ToggleButtonGroup>

        <Carousel breakPoints={breakpoints} pagination={false} disableArrowsOnEnd={true} >
          
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

export default CardBar