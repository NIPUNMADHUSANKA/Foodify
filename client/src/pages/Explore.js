import React, { useEffect } from 'react'
import { Box } from '@mui/material';

import Menubar from '../components/Menubar';
import ExploreF from '../components/explore/Explore.js';
import Tabs from '../components/explore/Tabs';
import FoodScroll from '../components/explore/FoodScroll';
import Nearme from '../components/explore/Nearme';

import '../assets/css/Home.css';



const Explore = () => {

    useEffect(() => {
        document.title = "Explore";
    })

    return (
        
        <Box className='bg' sx={{ display:"flex", flexDirection:'column', margin:0}}>
            <Menubar/>
            <ExploreF/>
            <Box sx={{ display:"flex", flexDirection:'row', alignItems: 'baseline'}}>
                <Tabs />
                <Nearme />
            </Box>
            <FoodScroll />
        </Box>
        
    )
}

export default Explore
