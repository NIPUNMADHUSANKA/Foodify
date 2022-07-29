import React, { useState } from 'react';
import { useEffect } from 'react';

import { Box, Container, Paper, ThemeProvider, Typography } from '@mui/material';
import theme, { Colours } from '../assets/theme/theme'; //to use theme provider,need to import this

import PageTitle from '../components/User/PageTitle';
import CardBar from '../components/User/CardBar';
import SummaryChart from '../components/User/SummaryChart';
import Navbar from '../components/Navbar';
import RangeChart from '../components/User/RangeChart';

// for scroll reveals
import Fade from 'react-reveal/Fade';

const MainHeader = "Intake Chart";

function IntakeChart() {

    const data = [

        [ "Total Calories",  "250g" ],
      
        [  "Total Sodium",  "300g" ],
      
        [ "Total Carbh",  "100g" ],
      
        [ "Total Suger",  "80g" ],

        [ "Total Fat",  "120g" ],
      
        [ "Total Cholestrol",  "10g" ]
      
      ];

      const ChartData = [
        { Day: 'Mon', val: 2.525 },
        { Day: 'Tue', val: 3.018 },
        { Day: 'Wed', val: 3.682 },
        { Day: 'Thu', val: 4.440 },
        { Day: 'Fri', val: 5.310 },
        { Day: 'Sat', val: 6.127 },
        { Day: 'Sun', val: 6.930 },
      ];

      const Head = "Chart of Nutritions Summary";
      
    
    useEffect(() => {
        document.title = "Intake Chart";
    })

  return (
    <Box>

      <Fade top>
         <Navbar />
         <PageTitle MainHeader = {MainHeader}/>
      </Fade>
         
         
      <Fade left>
         <Box sx={{mt:"3%", mb:"2%"}}>
          <CardBar details = {data} />
         </Box>
      </Fade>

         <Box  display="flex" flexDirection="row" sx={{ml:"5%",
         [theme.breakpoints.down('md')]: {
          flexDirection:"column"
         }
        }}
        >


           <Box width= "62vw" sx={{
            [theme.breakpoints.down('md')]: {
              width: "80vw"
            }
            }}>
              <SummaryChart chartData = {ChartData} Head={Head} />
           </Box>


           <Box width= "20vw" sx={{ml:"5%",
            [theme.breakpoints.down('md')]: {
              width: "30vw",
              mt: "5%"
            },
            
            [theme.breakpoints.down('sm')]: {
              width: "60vw",
              mt: "5%"
              
            },
            
            
            }}>

              <Fade right>
                <RangeChart />
              </Fade>
                
              

           </Box>
            
            
         </Box>


    </Box>
  )
}

export default IntakeChart