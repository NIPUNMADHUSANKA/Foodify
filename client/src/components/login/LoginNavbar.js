import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../assets/icons/foodify-logo.png';
import theme, { Colours } from '../../assets/theme/theme';


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" sx={{ bgcolor: Colours.dark}} >
        <Toolbar >
        <Box
            component="img"
            sx={{    
                height: 40,
            }}
            src={Logo}
        />
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            
          </Typography>
          <Button variant="outlined" style={{ color: 'Colours.white', borderColor:'Colours.white'}} sx={{position:'relative'}} color="inherit">SignUp</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
