import React from 'react';
import {ThemeProvider, Box, Typography, Tab, Tabs} from '@mui/material';

import theme, { Colours } from '../../assets/theme/theme'; //to use theme provider,need to import this
import { width } from '@mui/system';


function TabBar(details) {
    
    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
  return (
    <ThemeProvider theme={theme}>
        <Tabs
            value={value}
            onChange={handleChange}
            textColor= "primary"
            indicatorColor="secondary"
            sx = {{
                color: "primary",
                mb: "1%",
                ml: "3%",
            }}
        >
            <Tab value="one" label="Food" sx={{fontSize:"18px", fontWeight:"200"}}/>
            <Tab value="two" label="Restaurant"  sx={{fontSize:"18px", fontWeight:"200"}}/>
        </Tabs>

    </ThemeProvider>
  )
}

export default TabBar