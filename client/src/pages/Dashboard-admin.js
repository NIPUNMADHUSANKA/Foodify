import React, { useEffect } from 'react'
import { Box } from '@mui/material';

import Menubar from '../components/Menubar';

import Overview from '../components/overview/Overview.js';
import Tabs from '../components/overview/Tabs.js'

import '../assets/css/Dashboard-admin.css';



const Dashboard = () => {

    useEffect(() => {
        document.title = "Dashboard";
    })

    return (
        
        <Box>
            <Menubar />
            <Overview />
            <Tabs />
        </Box>
        
    )
}

export default Dashboard
