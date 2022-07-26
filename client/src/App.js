import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Box } from '@mui/material';
import Footer from './components/Footer';


import './assets/css/Main_App.css';

import Restaurant from './pages/Restaurant';
import Landing from './pages/Landing';
import Explore from './pages/Explore';
import Login from './pages/Login';
import UserProfile from './pages/UserProfile';
import MyProfile from './pages/MyProfile';
import RestaurantOrder from './pages/RestaurantOrder';
import UserOrder from './pages/UserOrder';




function App() {
  return (
    <Box width="400px" sx={{width:'100%'}} m="0">
       
        {/* <Navbar /> */}

        <Routes>
        
          <Route path="/" element = {<Landing/>} />
          <Route path="/Explore" element = {<Explore/>} />
          <Route path="/restaurant" element = {<Restaurant/>} />
          <Route path="/login" element = {<Login/>} />
          <Route path="/userprofile" element = {<UserProfile/>} />
          <Route path="/restaurantorder" element = {<RestaurantOrder/>} />
          <Route path="/myprofile" element = {<MyProfile/>} />
          <Route path="/userorder" element = {<UserOrder/>} />



        
          



        </Routes>
        {/* <Footer/> */}
      
    </Box>
  )
}

export default App;
