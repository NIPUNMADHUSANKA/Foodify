import React from 'react';
import { useEffect } from 'react';

import { Box } from '@mui/material';
import theme from '../assets/theme/theme'; //to use theme provider,need to import this

import PageTitle from '../components/User/PageTitle';
import CardBar from '../components/User/CardBar';
import SummaryChart from '../components/User/SummaryChart';
import RangeChart from '../components/User/RangeChart';

// for scroll reveals
import Fade from 'react-reveal/Fade';
import Navbar from '../components/Navbar';

const MainHeader = "Intake Chart";

function IntakeChart() {

  const data = [

    ["Total Daily Calories", "250g"],

    ["Total Daily Fat", "300g"],

    ["Total Daily Protein", "100g"],

    ["Total Daily Carbo", "80g"]


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
        <PageTitle MainHeader={MainHeader} />
      </Fade>


      <Fade left>
        <Box sx={{ mt: "3%", mb: "2%" }}>
          <CardBar details={data} />
        </Box>
      </Fade>

      <Fade left>

        <Box display="flex" flexDirection="row" sx={{
          ml: "5%",
          [theme.breakpoints.down('md')]: {
            flexDirection: "column"
          }
        }}
        >

          <Box width="88vw" sx={{
            [theme.breakpoints.down('md')]: {
              width: "80vw"
            }
          }}>
            <SummaryChart chartData={ChartData} Head={Head} />
          </Box>

        </Box>

      </Fade>


      <Fade left >

      <Box display="flex" flexDirection="row" sx={{ borderRadius:"20%",
          ml: "5%",
          [theme.breakpoints.down('md')]: {
            flexDirection: "column"
          }
        }}
        >

          <Box width="88vw" sx={{ borderRadius:"20%",
            [theme.breakpoints.down('md')]: {
              width: "80vw"
            }
          }}>

          <RangeChart />
          
          </Box>

          </Box>
      </Fade>


    </Box>
  )
}

export default IntakeChart