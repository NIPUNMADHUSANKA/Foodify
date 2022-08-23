import React from 'react'
import {  Grid, Container } from '@mui/material';

import RecentTransactions from './RecentTransactions' 

function SystemMain(props){
    return(
        <Container padding="0" sx={{boxSizing: 'content-box'}}>
        <Grid container spacing={2}>
            <Grid item
                lg={12}
                sm={12}
                xl={12}
                xs={12}  
            >
                <RecentTransactions />
            </Grid>
        </Grid>
        </Container>
    );
}

export default SystemMain