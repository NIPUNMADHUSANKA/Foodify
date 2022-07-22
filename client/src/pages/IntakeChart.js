import React, { useState } from 'react';
import { useEffect } from 'react';

import { Box, Container, Paper, ThemeProvider, Typography } from '@mui/material';
import theme, { Colours } from '../assets/theme/theme'; //to use theme provider,need to import this

import PageTitle from '../components/User/PageTitle';
import CardBar from '../components/User/CardBar';
import SummaryChart from '../components/User/SummaryChart';

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
        { year: '1950', population: 2.525 },
        { year: '1960', population: 3.018 },
        { year: '1970', population: 3.682 },
        { year: '1980', population: 4.440 },
        { year: '1990', population: 5.310 },
        { year: '2000', population: 6.127 },
        { year: '2010', population: 6.930 },
      ];
      
    
    useEffect(() => {
        document.title = "Intake Chart";
    })

  return (
    <Box>

         <PageTitle MainHeader = {MainHeader}/>
         
         <Box sx={{mt:"3%", mb:"2%"}}>
          <CardBar details = {data} />
         </Box>

         <Box>
            <SummaryChart chartData = {ChartData} />
         </Box>


    </Box>
  )
}

export default IntakeChart