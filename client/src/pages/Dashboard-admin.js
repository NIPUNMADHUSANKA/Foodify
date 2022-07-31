import React, { useEffect } from 'react'
import { Box, Grid, Container } from '@mui/material';

import Menubar from '../components/Menubar';

import Overview from '../components/overview/Overview.js';
import Tabs from '../components/overview/Tabs.js'
import DashboardCard from '../components/overview/System/DashboardCard'
import Chart from '../components/overview/System/charts.js'
import Orders from '../components/overview/System/FrequenltyOrderedFoods'
import RecentTransactions from '../components/overview/System/RecentTransactions'
// import DoughnutCharts from '../components/overview/System/DoughnutCharts'

import AttachMoneyRounded from '@mui/icons-material/AttachMoneyRounded';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import ReceiptIcon from '@mui/icons-material/Receipt';


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
                            <DashboardCard title="Total Income Today" value="Rs.24129" icon={AttachMoneyRounded} type="up" percentage="12%" since="yesterday"/>
                        </Grid>
                        <Grid item
                            lg={3}
                            sm={6}
                            xl={3}
                            xs={12}
                        >
                            <DashboardCard title="Income by Orders" value="Rs.14129" icon={ReceiptIcon} type="down" percentage="12%" since="yesterday"/>
                        </Grid>
                        <Grid item
                            lg={3}
                            sm={6}
                            xl={3}
                            xs={12}
                        >
                            <DashboardCard title="Order Count" value="102" icon={FastfoodIcon} type="down" percentage="12%" since="yesterday"/>
                        </Grid>
                        <Grid item
                            lg={3}
                            sm={6}
                            xl={3}
                            xs={12}
                        >
                            <DashboardCard title="Income by Premiums" value="Rs.10000" icon={GroupAddIcon} type="up" percentage="12%" since="yesterday"/>
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
                            lg={4}
                            md={7}
                            xl={3}
                            xs={12}
                        >
                            <Orders />
                        </Grid> 
                        <Grid item
                            lg={12}
                            md={12}
                            xl={12}
                            xs={12}
                        >
                            <RecentTransactions />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            
        </Box>
        
    )
}

export default Dashboard
