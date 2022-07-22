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

    <Box color="#fff" bgcolor="#171717" width="321px" height="127px" sx={{ borderRadius: '15px'  }}>
    <CardContent >

      <Typography sx={{ fontSize:"120%"}} color="#fff" gutterBottom fontWeight="bold">
        {props.Title}
      </Typography>

      <Grid display="flex" flex-direction="row">
        <Typography sx={{ mb: 1.5, fontSize:"150%" }} color="#fff" >
        {props.Count}
        </Typography>
        <Typography sx={{ mb: 1.5, ml:25 }} color="#fff"  
        >
          <img src={props.icon} />
        </Typography>
      </Grid>
      
      
    </CardContent>
    </Box>


  )
}

export default Summary_Card