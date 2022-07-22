import React from 'react'
import { Box } from '@mui/material';
import Menubar from '../components/Menubar';
import Explore from '../components/home/Explore.js';
import FoodCard from '../components/home/FoodCard.js';
import Carousel from '../components/carousel/carousel';
import '../assets/css/Home.css';
// import '../assets/css/App.css';  


const Home = () => {
    return (
        <Box className='body-Style' sx={{ margin:0}} >
            <Box >
                <Menubar/>
                <Explore/>
                    {/* <FoodCard/>
                    <Carousel /> */}
            </Box>
        </Box>
    )
}

export default Home
