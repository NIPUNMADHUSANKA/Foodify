import React, { useState } from 'react';
import { useEffect } from 'react';
import { Box } from '@mui/material';
import theme, { Colours } from '../../assets/theme/theme'; //to use theme provider,need to import this
import '../../assets/css/Profile.css';
import Pickup from '../../assets/images/pickup.png';
import Pickupmap from '../../assets/images/pickupmap.png';

const RestaurantOrder = () => {


  return (
    <Box marginTop="0px">
      <img className='pickupcss'
      src={Pickup}/>
      <Box
      sx={{
       color:Colours.white,
       fontSize:35,
       marginTop:'3%',
       marginLeft:'2%',
       [theme.breakpoints.down('sm')]: {
        fontSize: 28,
        marginTop:'3%',
        marginLeft:'2%',
      },
      }}
      >Salad Hut - Colombo</Box>


      {/* map */}
      <Box sx={{
        marginTop:'3%',
      }}>
      <img src={Pickupmap}/>
      </Box>


    </Box>

    
  )
}

export default RestaurantOrder
