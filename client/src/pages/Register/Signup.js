import React from 'react'
import { Box, Typography } from '@mui/material';
import Signup1_left from '../../assets/images/Signup1_left.png';
import Signup1_right from '../../assets/images/Signup1_right.png';

const Signup = () => {
  return (
    <Box sx={{mt:{lg:'150px', xs:'70px'},ml:{sm:'50px'}}}
    position="relative" p="20px">

        <img src={Signup1_left} alt="banner" className='signup1-left-img' />
        
        
        <Typography color="#EFEAEA" fontWeight="400" fontSize="40px" 
        
        sx={{mt:{lg:'-70px', xs:'70px'},ml:{sm:'600px'}}}>
          Sign Up
        </Typography>

        <Typography color="#FFFFFF" fontWeight="200" sx={{fontSize:{lg:'20px', xs:'40px'},ml:{sm:'600px'}}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </Typography>

        {/* <img src={Signup1_right} alt="banner" className='signup1-right-img' /> */}

        
    </Box>
    
  )
}

export default Signup