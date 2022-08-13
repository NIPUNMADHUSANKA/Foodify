import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import theme, { Colours } from '../../assets/theme/theme';
import order_food from '../../assets/images/order_food.png'; 
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Button from '@mui/material/Button';
import OrderwithD from './orderwithDiscount';
import OrderwithS from './start_order';
import PhoneIcon from '@mui/icons-material/Phone';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import MailIcon from '@mui/icons-material/Mail';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function restaurantOrder() {
  return (
    <Container 
    sx={{
      backgroundColor:Colours.dark ,
      width:'100%',
      marginTop:'4%',
      marginBottom:'4%',
      borderRadius:"33px" ,
  
      }}>     
      
      <Grid container spacing={3} sx={{color:Colours.formWhite,paddingBottom:"2%"}} >

        <Grid item xs={12} sm={6}>
        <Typography variant="h6" gutterBottom >
              Customer Details
        </Typography>
          <Box sx={{backgroundColor:Colours.transparenceGrey,padding:"2%"}}>
              
              <Grid container spacing={3} sx={{color:Colours.formWhite}} >
                  <Grid item xs={12} sm={6}  >
                      <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                      sx={{ 
                        width: 76, 
                        height: 76 ,
                      margin:'auto',
                      }}   
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                      <p>Riyansa Gunawardhana</p>
                  </Grid>
              </Grid>
          </Box>
          <Box sx={{backgroundColor:Colours.transparenceGrey,padding:"2%",marginTop:"6%"}}>
              
              <Grid container spacing={3} 
              sx={{
               
                marginLeft:"10%",
                [theme.breakpoints.down('sm')]: {
                  marginLeft: '40%',
                  
                },
                }} >
                  {/* <Grid item xs={12} sm={6} sx={{ hover: Colours.white}} >
                    <PhoneIcon />
                  </Grid> */}

                  <Grid item xs={12} sm={6}>
                  <ChatBubbleIcon sx={{ hover: Colours.white}}/>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                  <MailIcon sx={{ hover: Colours.white}}/>
                  </Grid>

              </Grid>
          </Box>
        </Grid>


        {/* ordering */}
        <Grid item xs={12} sm={6}>
        <Typography variant="h6" gutterBottom >
              Order Details
        </Typography>
        <Box sx={{backgroundColor:Colours.transparenceGrey,paddingLeft:"2%",paddingTop:"2%",paddingBottom:"2%"}}>
              
              <Grid container spacing={3} sx={{color:Colours.formWhite}} >
                  <Grid item xs={12} sm={6}  >
                      <img src={order_food}
                      style={{
                        justify:"center",
                      }} />
                  </Grid>

                  <Grid item xs={12} sm={6} >
                      <p>Mini veg saled</p>
                      <p>Rs 400.00</p>
                      <p>2 items</p>
                  </Grid>
              </Grid>
          </Box>
         
        </Grid>



        <Grid item xs={12} sm={6}>
              <OrderwithS/>        
        </Grid>

        <Grid item xs={12} sm={6}>
            <OrderwithD/>
        </Grid>
       
      </Grid>
    </Container>
  );
}