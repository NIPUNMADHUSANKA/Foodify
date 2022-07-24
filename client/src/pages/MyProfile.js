import React, { useState } from 'react';
import { useEffect } from 'react';
import { Box } from '@mui/material';
import theme, { Colours } from '../assets/theme/theme'; //to use theme provider,need to import this
import '../assets/css/Profile.css';
import Pnavbar from '../components/profile/profileNavbar';
import Pcarousel from '../components/profile/profileCarouselGood';
import ProfileDetails from '../components/profile/profile_details';
import AddressFormW from '../components/profile/AddressForm';
import '../assets/css/Profile.css';

const Profile = () => {


  return (
    <Box className='Profile2-body-Style' marginTop="0px">
      <Pnavbar/>
      <AddressFormW/>
      
      
    </Box>

    
  )
}

export default Profile
