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
//import DashboardA from './pages/Dashboard-admin';

import IntakeChart from './pages/IntakeChart';
import Home from './pages/Explore';
import AddFoodMenu from './pages/AddFoodMenu';
import Image_Upload from './pages/Image_Upload';
import Nutrition_Summary from './pages/Nutrition_Summary';
import Login from './pages/Login';
import UserProfile from './pages/UserProfile';
import MyProfile from './pages/MyProfile';




import Signup from './pages/Signup';

import Signupuser from './pages/Signupuser';

function App() {
  return (

    <Box sx={{margin:"0"}}>
      
    <Box width="400px" sx={{width:'100%'}} m="0">
       
        {/* <Navbar /> */}


        <Routes>
        
          <Route path="/" element = {<Landing/>} />
          <Route path="/Explore" element = {<Explore/>} />
         

          <Route path="/restaurant" element = {<Restaurant/>} />
          <Route path="/AddFoodMenu" element = {<AddFoodMenu/>} />
          <Route path="/Image_Upload" element = {<Image_Upload/>} />
          <Route path="/Nutrition_Summary" element = {<Nutrition_Summary/>} />
          

          <Route path="/Complaints" element = {<Complaints/>} />
          <Route path="/Intake" element = {<IntakeChart/>} />

          <Route path="/login" element = {<Login/>} />
          <Route path="/userprofile" element = {<UserProfile/>} />
          <Route path="/myprofile" element = {<MyProfile/>} />

          



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
    </Box>
  )
}

export default App;