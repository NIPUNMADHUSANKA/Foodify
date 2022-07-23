import React from 'react'
import { Box } from '@mui/material';
import Menubar from '../components/Menubar';
import Explore from '../components/explore/Explore.js';
import FoodCard from '../components/explore/FoodCard.js';
import Carousel from '../components/carousel/carousel';

//import '../assets/css/Home.css';
import '../assets/css/Home.css';
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
        <Box className='body-Style' sx={{ margin:0}} >
            <Box >
                <Menubar/>
                <Explore/>
                    {/* <FoodCard/>
                    <Carousel /> */}
            </Box>
        </Box>
        </Box>
        </div>
    )
};

export default ExploreHome
