import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Box } from '@mui/material';
import Footer from './components/Footer';
import Login from './pages/Login';

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
import Home from './pages/Explore';

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
      
        <Routes>
        
          <Route path="/" element = {<Landing/>} />
          <Route path="/Explore" element = {<Explore/>} />
          <Route path="/Dashboard" element = {<DashboardA/>} />

          <Route path="/restaurant" element = {<Restaurant/>} />
          <Route path="/Complaints" element = {<Complaints/>} />
          <Route path="/Intake" element = {<IntakeChart/>} />
          <Route path="/login" element = {<Login/>} />

          <Route path="/Restaurant/Category" element = {<FoodCategory/>} />
          <Route path="/FoodRating" element = {<FoodRating/>} />
          <Route path="/Restaurant/RestaurantRating" element = {<RestaurantRating/>} />
          <Route path="/Restaurant/Offers" element = {<RestaurantOffer/>} />
          <Route path="/Restaurant/Category/Orderfood" element = {<OrderFood/>} />

          <Route path="/register/Signup" element = {<Signup/>} />
          <Route path="/register/Signupuser" element = {<Signupuser/>} />
          <Route path="/register/UserPackage" element = {<UserPackage/>} />
          <Route path="/register/Signuprestaurant" element = {<Signuprestaurant/>} />
          <Route path="/register/Terms" element = {<Terms/>} />
          <Route path="/ForgetPassword" element = {<ForgetPassword/>} />
          <Route path="/ResetPassword" element = {<ResetPassword/>} />

          <Route path="/restaurant/category" element = {<FoodCategory/>} />

        </Routes>
        <Footer/>
      
    </Box>
  )
}

export default App;