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


function Explore() {
    const [selected, setSelected] = React.useState(false);
    return (
      <Box 
        sx={{
            mt:{lg:'5%', xs:'3%'},
            ml:{sm:'3%'},
            position: 'relative',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-end'
            }}>
        
        <Typography color="#EFEAEA" fontWeight="200" fontSize="70px" fontFamily='Poppins' paddingRight="30px">
          Explore
        </Typography>

        <ToggleB>
          <ToggleButton
            value="check"
            selected={selected}
            onChange={() => {
                setSelected(!selected);
            }}
            sx={{padding: '7px 10px 7px 14px' }}>
            
            <Typography color="#EFEAEA" fontWeight="300" fontSize="21px" fontFamily='Poppins'>
                Near Me
            </Typography>
            <Brightness1Icon style={{ color:'#95CD41', paddingLeft:'6px'}}/> 
     
          </ToggleButton>
        </ToggleB>  

      </Box>
    )
  }
  
export default Explore;

