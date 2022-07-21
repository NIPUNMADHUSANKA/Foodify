import React, { useState } from 'react';
import { useEffect } from 'react';
import { Box, Container, Paper, ThemeProvider, Typography } from '@mui/material';
import theme, { Colours } from '../assets/theme/theme'; //to use theme provider,need to import this


import PageTitle from '../components/User/PageTitle';
import ComplainBar from '../components/User/ComplainBar';
import ComplainAdd from '../components/User/ComplainAdd';
import ComplaintHistory from '../components/User/ComplaintHistory';

const MainHeader = "Complaints";

function Complaints() {

    useEffect(() => {
        document.title = "Complaints";
    })

  return (

    <Box>
         <PageTitle MainHeader = {MainHeader}/>
         <ComplainBar />
         <Box sx={{display:"flex",flexDirection:"row"}}>
            <ComplainAdd />
            <ComplaintHistory />
         </Box>
         

    </Box>
   
    
    
  )
}

export default Complaints