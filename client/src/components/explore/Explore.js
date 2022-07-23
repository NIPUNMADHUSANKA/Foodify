import React from 'react'
import { Box, Typography } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';
import Brightness1Icon from '@mui/icons-material/Brightness1';

// function StandaloneToggleButton() {
  
// }

const ToggleB = styled('div')(({ theme }) => ({
    display: 'flex', 
    flexDirection: 'row', 
    alignItems: 'center',
    borderRadius: '15px',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));

const Color = "#fff";

function handleLocation(){
  if (Color == "#fff"){
    Color='#95CD41'
  }else{
    Color='#fff'
  }
}

function Explore() {
    return (
      <Box 
        sx={{
            mt:{lg:'4%', xs:'3%'},
            mb:{lg:'1.5%', xs:'2%'},
            ml:{sm:'3%'},
            position: 'relative',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'baseline'
            }}>
        
        <Typography color="#EFEAEA" fontWeight="200" fontSize="70px" fontFamily='Poppins' paddingRight="30px">
          Explore
        </Typography>

        <ToggleB>
          <ToggleButton
            value="#95CD41"
            Color={Color}
            onChange={() => {
                handleLocation()
            }}
            sx={{padding: '7px 10px 7px 14px' }}>
            
            <Typography color="#EFEAEA" fontWeight="300" fontSize="21px" fontFamily='Poppins'>
                Near Me
            </Typography>
            
            <Brightness1Icon style={{ color:Color, paddingLeft:'6px'}}/> 
          
          </ToggleButton>
        </ToggleB>  

      </Box>
    )
  }
  
export default Explore;

