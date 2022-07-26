import React, { useState } from 'react';
import { useEffect } from 'react';
import { Box } from '@mui/material';
import theme, { Colours } from '../assets/theme/theme'; //to use theme provider,need to import this
import '../assets/css/Profile.css';
import Unavbar from '../components/Navbar';
import UserOrderBanner from '../components/user_order/user_order_upper';
import UserOrderForm from '../components/user_order/user_order_form';

const UserOrder = () => {


  return (
<Box marginTop="0px">
      <Unavbar/>

      <Box  className='order-body-Style'>
      <UserOrderBanner/>
      </Box>
      <UserOrderForm/>
    
      
    </Box>

    
  )
}

export default UserOrder
