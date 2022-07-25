import React, { useEffect } from 'react'
import { Box, Grid, Container } from '@mui/material';

import Menubar from '../components/Menubar';

import Overview from '../components/overview/Overview.js';
import Tabs from '../components/overview/Tabs.js'
import SumCard from '../components/overview/System/SumCard.js'

import '../assets/css/Dashboard-admin.css';



const Dashboard = () => {

    useEffect(() => {
        document.title = "Dashboard";
    })

    return (
        
        <Box>
            <Menubar />
            <Overview />
            <Tabs maxWidth="30%"/>
            <Container maxWidth={false}>
                <Grid
                container
                spacing={3}
                >
                    <Grid
                        item
                        lg={3}
                        sm={6}
                        xl={3}
                        xs={12}
                        // sx={{width:'10%'}}
                    >
                        <SumCard />
                    </Grid>
                </Grid>
            </Container>
        </Box>
        
    )
}

export default Dashboard
