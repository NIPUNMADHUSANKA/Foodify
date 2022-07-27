import React, { useEffect } from 'react'
import { Box, Grid, Container } from '@mui/material';

import Menubar from '../components/Menubar';

import Overview from '../components/overview/Overview.js';
import Tabs from '../components/overview/Tabs.js'
import Budget from '../components/overview/System/Budget.js'
import Count from '../components/overview/System/Count.js'
import Chart from '../components/overview/System/charts.js'

import '../assets/css/Dashboard-admin.css';



const Dashboard = () => {

    useEffect(() => {
        document.title = "Dashboard";
    })

    return (
        
        <Box backgroundColor= "#323131">
            <Menubar />
            <Overview />
            <Box sx={{
                display: 'flex',

            }}>
                <Tabs maxWidth="30%"/>
                <Container maxWidth= "60%">
                    <Grid
                    container
                    spacing={3}
                    >
                        <Grid item
                            lg={3}
                            sm={6}
                            xl={3}
                            xs={12}
                            
                        >
                            <Budget />
                        </Grid>
                        <Grid item
                            lg={3}
                            sm={6}
                            xl={3}
                            xs={12}
                        >
                            <Count />
                        </Grid>
                        <Grid item
                            lg={3}
                            sm={6}
                            xl={3}
                            xs={12}
                        >
                            <Count />
                        </Grid>
                        <Grid item
                            lg={3}
                            sm={6}
                            xl={3}
                            xs={12}
                        >
                            <Count />
                        </Grid>
                    </Grid>
                    <Grid
                    container
                    spacing={3}
                    >
                        <Grid item
                            lg={8}
                            md={12}
                            xl={9}
                            xs={12}
                        >
                            <Chart />
                        </Grid>
                        <Grid item
                            lg={8}
                            md={12}
                            xl={9}
                            xs={12}
                        >
                            
                        </Grid>

                    </Grid>
                </Container>
            </Box>
            
        </Box>
        
    )
}

export default Dashboard
