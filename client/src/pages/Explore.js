import React, { useEffect } from 'react'
import { ThemeProvider, Box, Typography, Tab, Tabs, Grid, Container } from '@mui/material';

import Menubar from '../components/Menubar';
import ExploreF from '../components/explore/Explore.js';
// import Tabs from '../components/explore/Tabs';
import FoodScroll from '../components/explore/FoodScroll';
import RestaurantScroll from '../components/explore/RestaurantScroll';
import Nearme from '../components/explore/Nearme';
import TabPanel from '../components/TabPanel';

import theme, { Colours } from '../assets/theme/theme';

import '../assets/css/Home.css';



const Explore = () => {

    useEffect(() => {
        document.title = "Explore";
    })

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box className='bg' sx={{ display:"flex", flexDirection:'column', margin:0}}>
            <Menubar/>
            <ExploreF/>
            <Box sx={{ display:"flex", flexDirection:'row', alignItems: 'baseline'}}>
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
                    <Tab value={0} label={
                        <Typography color="primary" fontWeight="200" fontSize="18px">Food</Typography>
                    }/>
                    <Tab value={1} label={
                        <Typography color="primary" fontWeight="200" fontSize="18px">Restaurant</Typography>
                    }/>
                </Tabs>
                <Nearme />
            </ThemeProvider>
            </Box >
            <Box minHeight="50vh">
                <TabPanel value={value} index={0}>
                    <FoodScroll/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <RestaurantScroll/>
                </TabPanel>
            </Box>
        </Box >
        
    )
}

export default Explore
