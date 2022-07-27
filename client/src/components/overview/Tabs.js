import React from 'react';
import {ThemeProvider, Box, Typography, Tab, Tabs} from '@mui/material';
import Drawer from '@mui/material/Drawer';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import IconButton from '@mui/material/IconButton';

import theme, { Colours } from '../../assets/theme/theme'; //to use theme provider,need to import this
import zIndex from '@mui/material/styles/zIndex';

const drawerWidth = 240;

function TabBar(props){
    
    const [value, setValue] = React.useState('one');
    // const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
        
    };
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const drawer = (
        <Tabs
                value={value}
                onChange={handleChange}
                textColor= "primary"
                indicatorColor="secondary"
                orientation="vertical"
                sx = {{
                    position:"relative",
                    width:"70%"
                }}
            >
                <Tab value="one" label="System" sx={{fontSize:"18px", fontWeight:"300"}}/>
                <Tab value="two" label="Users"  sx={{fontSize:"18px", fontWeight:"300"}}/>
                <Tab value="three" label="Restaurants" sx={{fontSize:"18px", fontWeight:"300"}}/>
                <Tab value="four" label="Orders"  sx={{fontSize:"18px", fontWeight:"300"}}/>
                <Tab value="five" label="Complains"  sx={{fontSize:"18px", fontWeight:"300"}}/>
            </Tabs>
    
    );
    
    // const container = window !== undefined ? () => window().document.body : undefined;
    
  return (
    <ThemeProvider theme={theme}>

        <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <ArrowForwardIosIcon />
        </IconButton>

        {/* Drawer for mobile ----------------------------------------*/}
        <Drawer
        //   container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { 
                alignItems: "flex-end",
                boxSizing: 'border-box', 
                width: drawerWidth,
                position: "relative",
                backgroundColor: "transparent",
                 
             },            
          }}
        >
          {drawer}
        </Drawer>

        {/* Drawer for big screen devices------------------------------------ */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { 
                alignItems: "flex-end",
                boxSizing: 'border-box', 
                width: drawerWidth, 
                position: "relative",
                backgroundColor: "transparent",               
            },
          }}
          open
        >
          {drawer}
        </Drawer>

    </ThemeProvider>
  );
}

export default TabBar;