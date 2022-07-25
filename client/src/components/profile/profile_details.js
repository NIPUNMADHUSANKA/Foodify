import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import theme, { Colours } from '../../assets/theme/theme';//to use theme provider,need to import this


function ProfileDetails(props) {
    
  return (

<Box color="#fff" bgcolor="#171717" width="321px" height="347px" 
sx={{ borderRadius: '15px',
      marginLeft:'5%',
      marginTop:'3%' ,
     [theme.breakpoints.down('sm')]: {
     marginLeft: '9%',
     width:'80%',
    },
      }}>
   
      <Typography sx={{ fontSize:"100%", mt:"2%"}} color="#fff" gutterBottom fontWeight="light">
        {props.Title}
      </Typography>

      <Grid display="flex" flex-direction="row">
        <Typography sx={{ mb: 1.5, fontSize:"150%" }} color="#fff" fontWeight="bold">
        {props.Count}
        </Typography>
        <Typography sx={{ mb: 1.5, ml:25 }} color="#fff"  
        >
           <img src={props.icon} /> 
         
        </Typography>
      </Grid>
   
    </Box>
    


 )
}

export default ProfileDetails
