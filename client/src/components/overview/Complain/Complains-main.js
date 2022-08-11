import React from 'react'
import {  Grid, Container, Typography } from '@mui/material';

import ComplainsNew from './Complain-new';
import oldComplains from './Complain-old';

const topicSx = {
  fontFamily: 'Poppins',
  color: '#FFFFFF',
  textAlign: 'right',
  
}

function SystemMain(props){
    return(
        <Container maxWidth="false">
          <Typography variant="h5" sx={topicSx}>New Complains</Typography>
          <ComplainsNew />
          <ComplainsNew />
        </Container>
    );
}

export default SystemMain