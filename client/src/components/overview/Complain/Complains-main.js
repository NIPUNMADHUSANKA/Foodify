import React from 'react'
import { Container, Typography } from '@mui/material';

import ComplainsNew from './Complain-new';
import ComplainsOld from './Complain-old';

const topicSx = {
  fontFamily: 'Poppins',
  color: '#FFFFFF',
  textAlign: 'right',
  mb: '10px'  
}

function ComplaintMain(props){
  // console.log(props)
  const complaints = props.complaints

  const pending = [];
  const resolved = [];

  Object.keys(complaints).map(key=> {
      if (complaints[key].complainStatus=="pending"){
          pending.push(complaints[key]);
      }
      else{
          resolved.push(complaints[key]);
      }
  })

  // console.log(pending)
  // const complaints = props.complaints;
  // console.log(complaints)
    return(
        <Container maxWidth="false">
          <Typography variant="h5" sx={topicSx}>Pending</Typography>
          <ComplainsNew data={pending}/>
          <Typography variant="h5" sx={topicSx}>Resolved</Typography>
          <ComplainsOld data={resolved}/>
        </Container>
    );
}

export default ComplaintMain