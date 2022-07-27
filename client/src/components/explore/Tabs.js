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
            <Tab value="one" label={
                <Typography color="primary" fontWeight="200">Food</Typography>
            }/>
            <Tab value="two" label={
                <Typography color="primary" fontWeight="200">Restaurant</Typography>
            }/>
        </Tabs>

    </ThemeProvider>
  )
}

export default TabBar