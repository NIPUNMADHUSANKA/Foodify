import React from 'react';
import { Box } from '@mui/material';
import '../assets/css/Profile.css';
import UserOrderBanner from '../components/user_order/user_order_upper';
import UserOrderForm from '../components/user_order/user_order_form';

// for scroll reveals
import Fade from 'react-reveal/Fade';
import Navbar from '../components/Navbar';


const UserOrder = () => {


  return (
    <Box marginTop="0px">

      <Fade top>
        <Navbar />
      </Fade>

      <Box className='order-body-Style'>
        <UserOrderBanner />
      </Box>
      <UserOrderForm />


    </Box>


  )
}

export default UserOrder
