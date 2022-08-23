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

// for scroll reveals
import Fade from 'react-reveal/Fade';
import Navbar from '../components/Navbar';

const MainHeader = "Complaints";

function Complaints() {

  const data = [

    [ "Total Complaints",  12, Total ],
  
    [ "Pending Complaints",  8, Pending ],
  
    [ "Accepted Complaints",  10, Accept ],
  
    [ "Rejected Complaints",  3, Reject ]
  
  ];

    useEffect(() => {
        document.title = "Complaints";
    })

  return (

    
    <Box className='complainbg'>

        <Fade top>
            <Navbar />
            <PageTitle MainHeader = {MainHeader}/>
        </Fade>
        
        <Fade left>
          <Box sx={{mt:"3%", mb:"2%"}}>
            <CardBar details = {data} />
          </Box>
        </Fade>
         

        <Fade right>
            <Box display="flex"
                 justifyContent="center"
                alignItems="center">
                <ComplainAdd />
            </Box>
        </Fade>

        <Fade left>
            <Box display="flex"
                 justifyContent="center"
                alignItems="center">
                <ComplaintHistory />    
            </Box>
        </Fade>
      
    </Box> 
  )
}

export default Complaints