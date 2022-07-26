import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Box } from '@mui/material';
import Footer from './components/Footer';


import './assets/css/Main_App.css';

import Restaurant from './pages/restuarant/Restaurant';
import FoodCategory from './pages/restuarant/FoodCategory';
import FoodRating from './pages/restuarant/FoodRating';
import RestaurantRating from './pages/restuarant/RestaurantRating';
import RestaurantOffer from './pages/restuarant/RestaurantOffer';
import OrderFood from './pages/restuarant/OrderFood';
import Landing from './pages/Landing';

import Complaints from './pages/Complaints';
import Explore from './pages/Explore';
import DashboardA from './pages/Dashboard-admin';

import IntakeChart from './pages/IntakeChart';


import Login from './pages/Login';
import UserProfile from './pages/UserProfile';
import MyProfile from './pages/MyProfile';
import RestaurantOrder from './pages/RestaurantOrder';
import UserOrder from './pages/UserOrder';






import Signup from './pages/Signup';

import Signupuser from './pages/Signupuser';

function App() {
  return (

  
      
    <Box width="400px" sx={{width:'100%'}} m="0">
       
        {/* <Navbar /> */}


        <Routes>
        
          <Route path="/" element = {<Landing/>} />
          <Route path="/Explore" element = {<Explore/>} />
          <Route path="/Dashboard" element = {<DashboardA/>} />

          <Route path="/restaurant" element = {<Restaurant/>} />

          <Route path="/Complaints" element = {<Complaints/>} />
          <Route path="/Intake" element = {<IntakeChart/>} />

          <Route path="/login" element = {<Login/>} />
          <Route path="/userprofile" element = {<UserProfile/>} />
          <Route path="/restaurantorder" element = {<RestaurantOrder/>} />
          <Route path="/myprofile" element = {<MyProfile/>} />
          <Route path="/userorder" element = {<UserOrder/>} />



        
          



          <Route path="/Restaurant/Category" element = {<FoodCategory/>} />
          <Route path="/FoodRating" element = {<FoodRating/>} />
          <Route path="/Restaurant/RestaurantRating" element = {<RestaurantRating/>} />
          <Route path="/Restaurant/Offers" element = {<RestaurantOffer/>} />
          <Route path="/Restaurant/Category/Orderfood" element = {<OrderFood/>} />

          <Route path="/Signup" element = {<Signup/>} />
          <Route path="/Signupuser" element = {<Signupuser/>} />
          <Route path="/restaurant/category" element = {<FoodCategory/>} />


        </Routes>
        {/* <Footer/> */}
      
    </Box>
  )
}

export default App;