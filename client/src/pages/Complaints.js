import React, { useState } from 'react';
import { useEffect } from 'react';
import { Box, Container, Paper, ThemeProvider, Typography } from '@mui/material';
import theme, { Colours } from '../assets/theme/theme'; //to use theme provider,need to import this


import PageTitle from '../components/User/PageTitle';
import CardBar from '../components/User/CardBar';
import ComplainAdd from '../components/User/ComplainAdd';
import ComplaintHistory from '../components/User/ComplaintHistory';

import Total from '../assets/icons/Total.png';//exporting the image for about section
import Pending from '../assets/icons/Pending.png';
import Accept from '../assets/icons/Accept.png';
import Reject from '../assets/icons/Reject.png';

const MainHeader = "Complaints";

function Complaints() {

  const data = [

    [ "Total Complaints",  12, Total ],
  
    [  "Pending Complaints",  8, Pending ],
  
    [ "Accepted Complaints",  10, Accept ],
  
    [ "Rejected Complaints",  3, Reject ]
  
  ];

    useEffect(() => {
        document.title = "Complaints";
    })

  return (

    <Box>
         <PageTitle MainHeader = {MainHeader}/>
         
         <Box sx={{mt:"3%", mb:"2%"}}>
         <CardBar details = {data} />
         </Box>

         <Box sx={{display:"flex",flexDirection:"row"}}>
            <ComplainAdd />
            <ComplaintHistory />
         </Box>

         
         

    </Box>
   
    
    
  )
}

export default Complaints