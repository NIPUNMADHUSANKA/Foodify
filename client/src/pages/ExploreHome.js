import React from 'react'
import { Box } from '@mui/material';
import Menubar from '../components/Menubar';
import Explore from '../components/home/Explore.js';
import FoodCard from '../components/home/FoodCard.js';
import Carousel from '../components/carousel/carousel';

//import '../assets/css/Home.css';
// import '../assets/css/App.css';  


const ExploreHome = () => {
    return (
        <div style={{ 
            background:"linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, rgba(0, 0, 0, 0.65) 100%)",
            backgroundImage:`url("../images/home-background.jpg")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%"
          }}>

            <Box>
                <Menubar/>
                <Explore/>
                    {/* <FoodCard/> */}
                    <Carousel />
            </Box>
        </div>
    )
}

export default ExploreHome
