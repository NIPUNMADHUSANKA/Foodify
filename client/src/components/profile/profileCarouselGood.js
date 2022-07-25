import React, { useState } from 'react';
import { useEffect } from 'react';

import { Box, Container, Paper, ThemeProvider, Typography } from '@mui/material';
import theme, { Colours } from '../../assets/theme/theme'; //to use theme provider,need to import this
import Skeleton from '@mui/material/Skeleton';
import PageTitle from '../../components/User/PageTitle';
import CardBar from './profile_card_bar';


const MainHeader = "Good Foods";
const MainHeader2 = "Bad Foods";
// const MainHeader3 = "My Details";



function Goodc() {



    const data1 = [

        [  "Pizza",  "good" , '../assets/images/profile_dash.png' ],
        [  "Pizza",  "good" , '../assets/images/profile_dash.png' ],

        [  "Pizza",  "good" , '../assets/images/profile_dash.png' ],

        [  "Pizza",  "good" , '../assets/images/profile_dash.png' ],

        [  "Pizza",  "good" , '../assets/images/profile_dash.png' ],

        [  "Pizza",  "good" , '../assets/images/profile_dash.png' ],


      
       
      
      ];


      const data2 = [
        [  "Pizza",  "bad" , '../assets/images/profile_dash.png' ],

        [  "Pizza",  "bad" , '../assets/images/profile_dash.png' ],

        [  "Pizza",  "bad" , '../assets/images/profile_dash.png' ],

        [  "Pizza",  "bad" , '../assets/images/profile_dash.png' ],

        [  "Pizza",  "bad" , '../assets/images/profile_dash.png' ],

        [  "Pizza",  "bad" , '../assets/images/profile_dash.png' ],

       

      
      ];

      
    
    useEffect(() => {
        document.title = "";
    })

  return (
    <Box>

         <PageTitle MainHeader = {MainHeader}/>
         
         <Box sx={{mt:"3%", mb:"2%"}}>
          <CardBar details = {data1} />
         </Box>

         <PageTitle MainHeader = {MainHeader2}/>
          <Box  marginTop="3%" >
          <CardBar details = {data2} />
         </Box> 

         {/* <PageTitle MainHeader = {MainHeader3}/>
         <Box  marginTop="3%" >
          <p>nfsdfsdfjdbdfkv fdkvbf</p>
         </Box>  */}

        

    </Box>
  )
}

export default Goodc