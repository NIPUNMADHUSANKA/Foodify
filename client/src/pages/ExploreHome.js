import React from 'react'
import { Box } from '@mui/material';
import Menubar from '../components/Menubar';
import Explore from '../components/home/Explore.js';
import FoodCard from '../components/home/FoodCard.js';
import Carousel from '../components/carousel/carousel';
<<<<<<< HEAD:client/src/pages/ExploreHome.js

//import '../assets/css/Home.css';
=======
import '../assets/css/Home.css';
>>>>>>> main:client/src/pages/Home.js
// import '../assets/css/App.css';  


const ExploreHome = () => {
    return (
<<<<<<< HEAD:client/src/pages/ExploreHome.js
        <div style={{ 
            background:"linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, rgba(0, 0, 0, 0.65) 100%)",
            backgroundImage:`url("../images/home-background.jpg")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%"
          }}>

            <Box>
=======
        <Box className='body-Style' sx={{ margin:0}} >
            <Box >
>>>>>>> main:client/src/pages/Home.js
                <Menubar/>
                <Explore/>
                    {/* <FoodCard/>
                    <Carousel /> */}
            </Box>
        </Box>
    )
}

export default ExploreHome
