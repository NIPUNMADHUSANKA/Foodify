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

import axios from "axios";
import authHeader from "../services/auth-header";

const MainHeader = "Intake Chart";

const IntakeValues = [

  ["Total Daily Calories(g)", "10"],

  ["Total Daily Fat(g)", "60"],

  ["Total Daily Protein(g)", "60"],

  ["Total Daily Carbo(g)", "90"]

];


function IntakeChart() {

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


  // ----------store restaurant values--------
  const [details, setDetails] = React.useState({});


  useEffect(() => {
    document.title = "Intake Chart";
  })

  useEffect(() => {

    axios.get("http://localhost:8072/FoodiFy/Premium/getIntakeChart", { headers: authHeader() })
      .then(data => {
        // this part if sucess

        const details = data.data;
        //   console.log(data);
        setDetails({ ...details });

      })
      .catch(error => {
        console.log(error);

      });
    }, []);



  return (
    <Box>

      <Fade top>
        <Navbar />
        <PageTitle MainHeader={MainHeader} />
      </Fade>


      <Fade left>
        <Box sx={{ mt: "3%", mb: "2%" }}>
          <CardBar details={details} />
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

        <Box display="flex" flexDirection="row" sx={{
          borderRadius: "20%",
          ml: "5%",
          [theme.breakpoints.down('md')]: {
            flexDirection: "column"
          }
        }}
        >

          <Box width="88vw" sx={{
            borderRadius: "20%",
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