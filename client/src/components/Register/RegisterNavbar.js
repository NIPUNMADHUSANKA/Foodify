import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Logo from '../../assets/icons/foodify-logo.png';
import { border, borderColor, color } from '@mui/system';
import { Typography } from '@mui/material';

const pages = ['Home', 'Latest', 'About Us', 'Contact'];
const RegisterNavbar = () => {
  return (
    <AppBar position="static"  style={{ background: '#3E3E3E' }} >
      <Container maxWidth="xl">
        <Toolbar disableGutters>

        <Box
            component="img"
            sx={{    
                height: 40,
            }}
            src={Logo}
        />
        
        {/* <Typography style={{ color:'#FFFFFF', margin:"0px 0PX 0px 1000px" }}> Already have an account?
                            </Typography> */}
        <Button variant="outlined" style={{ color: '#FFFFFF', borderColor:'#FFFFFF', margin:"0px 0PX 0px 1200px"}}  >
            Login
        </Button>
        {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'} }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'white', display: 'block', ml:10 }}
              >
                {page}
              </Button>
            ))}
        </Box> */}

        {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
        </Search> */}
        

          
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default RegisterNavbar