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

import AddOffers from './pages/restuarant/AddOffers';

import Complaints from './pages/Complaints';
import Explore from './pages/Explore';
import Dashboard from './pages/Dashboard-admin';

import IntakeChart from './pages/IntakeChart';

// import Home from './pages/Explore';
import AddFoodMenu from './pages/AddFoodMenu';
import Image_Upload from './pages/Image_Upload';
import Nutrition_Summary from './pages/Nutrition_Summary';

import Login from './pages/Login';
import UserProfile from './pages/UserProfile';
import MyProfile from './pages/MyProfile';
import RestaurantOrder from './pages/RestaurantOrder';
import UserOrder from './pages/UserOrder';
import UserNotification from './components/user_notification/user_notification';





import UserPackage from './pages/register/UserPackage';
import Signup from './pages/register/Signup';

import Signupuser from './pages/register/Signupuser';
import Signuprestaurant from './pages/register/Signuprestaurant';
import Terms from './pages/register/Terms';
import ForgetPassword from './pages/ForgetPassword';
import ResetPassword from './pages/ResetPassword';

function App() {
  return (


  
      
    <Box sx={{margin:"0"}}>
       

        {/* <Navbar /> */}


        <Routes>
        
          <Route path="/" element = {<Landing/>} />
          <Route path="/Explore" element = {<Explore/>} />
         

          <Route path="/restaurant" element = {<Restaurant/>} />
          <Route path="/AddFoodMenu" element = {<AddFoodMenu/>} />
          <Route path="/Image_Upload" element = {<Image_Upload/>} />
          <Route path="/Nutrition_Summary" element = {<Nutrition_Summary/>} />
          

          
          
          <Route path="/Complaints" element={<Complaints />} />
          <Route path="/Intake" element={<IntakeChart />} />


          <Route path="/login" element = {<Login/>} />
          <Route path="/userprofile" element = {<UserProfile/>} />
          <Route path="/restaurantorder" element = {<RestaurantOrder/>} />
          <Route path="/myprofile" element = {<MyProfile/>} />
          <Route path="/userorder" element = {<UserOrder/>} />
          <Route path="/usernotification" element ={<UserNotification/>} />



        
          





          <Route path="/Restaurant/Category" element={<FoodCategory />} />
          <Route path="/FoodRating" element={<FoodRating />} />
          <Route path="/Restaurant/RestaurantRating" element={<RestaurantRating />} />
          <Route path="/Restaurant/Offers" element={<RestaurantOffer />} />
          <Route path="/Restaurant/Category/Orderfood" element={<OrderFood />} />
          <Route path="/Restaurant/AddOffers" element={<AddOffers />} />



          <Route path="/register/Signup" element={<Signup />} />
          <Route path="/register/Signupuser" element={<Signupuser />} />
          <Route path="/register/UserPackage" element={<UserPackage />} />
          <Route path="/register/Signuprestaurant" element={<Signuprestaurant />} />
          <Route path="/register/Terms" element={<Terms />} />
          <Route path="/ForgetPassword" element={<ForgetPassword />} />
          <Route path="/ResetPassword" element={<ResetPassword />} />

          <Route path="/restaurant/category" element={<FoodCategory />} />

          <Route path="/dashboard" element={<Dashboard />} />

        </Routes>
        {/* <Footer/> */}

      </Box>
  )
}

export default App;