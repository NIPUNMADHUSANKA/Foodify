import React, { useEffect } from 'react'
import { Box } from '@mui/material';
import Menubar from '../components/Menubar';
import ExploreF from '../components/explore/Explore.js';
import FoodCard from '../components/explore/FoodCard.js';
import FoodScroll from '../components/explore/FoodScroll';
// import Carousel from '../components/Carousel.js';
import '../assets/css/Home.css';
// import '../assets/css/App.css';  


const Explore = () => {

    useEffect(() => {
        document.title = "Explore";
    })

    return (
        
        <Box>
            <Menubar/>
            <ExploreF/>
            <FoodScroll />
                
        </Box>
        
    )
}

export default Explore
