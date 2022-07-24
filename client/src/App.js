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
import Landing from './pages/Landing';
import Complaints from './pages/Complaints';
import Explore from './pages/Explore';

import IntakeChart from './pages/IntakeChart';
import Home from './pages/Explore';


import Signup from './pages/Signup';

import Signupuser from './pages/Signupuser';

function App() {
  return (
    <Box sx={{margin:"0"}}>
      
        <Routes>
        
          <Route path="/" element = {<Landing/>} />
          <Route path="/Explore" element = {<Explore/>} />
          <Route path="/Restaurant" element = {<Restaurant/>} />
          <Route path="/Complaints" element = {<Complaints/>} />
          <Route path="/Intake" element = {<IntakeChart/>} />
          <Route path="/login" element = {<Login/>} />

          <Route path="/Restaurant/category" element = {<FoodCategory/>} />
          <Route path="/FoodRating" element = {<FoodRating/>} />
          <Route path="/Restaurant/RestaurantRating" element = {<RestaurantRating/>} />
          <Route path="/Restaurant/Offers" element = {<RestaurantOffer/>} />

          <Route path="/Signup" element = {<Signup/>} />
          <Route path="/Signupuser" element = {<Signupuser/>} />
          <Route path="/restaurant/category" element = {<FoodCategory/>} />

        </Routes>
        <Footer/>
      
    </Box>
  )
}

export default App;