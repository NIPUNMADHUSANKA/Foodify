import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Summary_Card(props) {
  return (

    <Box color="#fff" bgcolor="#171717" width="321px" height="147px" sx={{ borderRadius: '15px'  }}>
    <CardContent >

      <Typography sx={{ fontSize:"150%", mt:"2%"}} color="#fff" gutterBottom fontWeight="bold">
        {props.Title}
      </Typography>

      <Grid display="flex" flex-direction="row">
        <Typography sx={{ mb: 1.5, fontSize:"100%" }} color="#fff" fontWeight="light">
        {props.Count}
        </Typography>
        <Typography sx={{ mb: 1.5, ml:25 }} color="#fff"  
        >
           <img style={{width:'100%',height:'100%'}} src={props.icon} /> 
         
        </Typography>
      </Grid>
      
      
    </CardContent>
    </Box>


  )
}

export default Summary_Card