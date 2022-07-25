import React, { useEffect } from 'react'
import { Box, Grid, Container } from '@mui/material';

import Menubar from '../components/Menubar';

import Overview from '../components/overview/Overview.js';
import Tabs from '../components/overview/Tabs.js'
import Budget from '../components/overview/System/Budget.js'
import Count from '../components/overview/System/Count.js'

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
                <Container maxWidth={false}>
                    <Grid
                    container
                    spacing={3}
                    >
                        <Grid
                            item
                            lg={2.5}
                            sm={6}
                            xl={2.5}
                            xs={12}
                            
                        >
                            <Budget />
                        </Grid>
                        <Grid
                            item
                            lg={2.5}
                            sm={6}
                            xl={2.5}
                            xs={12}
                        >
                            <Count />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            
        </Box>
        
    )
}

export default Dashboard
