import React from 'react'
import { Box, Typography } from '@mui/material';

// function StandaloneToggleButton() {
  
// }



// var Color = "#fff";

function Explore() {
  
  return (
    
    <Box 
    sx={{
            mt:{lg:'3%', xs:'3%'},
            mb:{lg:'0.5%', xs:'2%'},
            ml:{sm:'3%'},
            position: 'relative',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'baseline'
            }}>
        
        <Typography color="#EFEAEA" fontWeight="200" fontSize="55px" fontFamily='Poppins' paddingRight="30px">
          Explore
        </Typography>

        

      </Box>
    )
  }
  
export default Explore;

