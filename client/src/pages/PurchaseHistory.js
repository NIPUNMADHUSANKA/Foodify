import React, { useState } from 'react';
import { useEffect } from 'react';

import { Box, Grid, Container, Paper, ThemeProvider, Typography } from '@mui/material';
import theme, { Colours } from '../assets/theme/theme'; //to use theme provider,need to import this

import PageTitle from '../components/User/PageTitle';
import CardBar from '../components/User/CardBar';
import SummaryChart from '../components/User/SummaryChart';
import RangeChart from '../components/User/RangeChart';

// for scroll reveals
import Fade from 'react-reveal/Fade';
import Navbar from '../components/Navbar';
import Table from '../components/PurchaseHistory-user/table';

const MainHeader = "Purchase History";

function IntakeChart() {

  return (
    <Box>

      {/* <Fade top> */}
        <Navbar />
        <PageTitle MainHeader = {MainHeader}/>
        <Typography variant='normal' ml='4%' color='white' fontWeight='200'>Details about your previous orders. Complaining can be done only under 24h.</Typography>
        
        {/* <Grid container spacing={3}>
          <Grid item
              lg={8}
              md={12}
              xl={9}
              xs={12}
          > */}
            <Table/>
          {/* </Grid>
        </Grid> */}


      {/* </Fade> */}

    </Box>
  )
}

export default IntakeChart