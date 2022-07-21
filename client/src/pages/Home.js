import React from 'react'
import { Box } from '@mui/material';
import Menubar from '../components/Menubar';
import Explore from '../components/home/Explore.js';
import FoodCard from '../components/home/FoodCard.js';
import Carousel from '../components/Carousel.js';
import '../assets/css/Home.css';
// import '../assets/css/App.css';  


const Home = () => {
    return (
        <div>
            <Box>
                <Menubar/>
                <Explore/>
                    {/* <FoodCard/> */}
                    <Carousel />
            </Box>
        </div>
    )
}

export default Home
