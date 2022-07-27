import React, { useState } from 'react';
import { useEffect } from 'react';
import { Box } from '@mui/material';
import theme, { Colours } from '../../assets/theme/theme'; //to use theme provider,need to import this
import '../../assets/css/Profile.css';
import Pickup from '../../assets/images/pickup.png';
import Pickupmap from '../../assets/images/pickupmap.png';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Button from '@mui/material/Button';




const Userorderform = () => {


  return (

<Grid container spacing={2} columns={16}>
  <Grid item xs={12} sm={6}>
    <Box>
        <Typography sx={{
            color:Colours.white,
            fontSize:28,
            marginTop:'3%',
            marginLeft:'3%',
            }}>
        Salad hut</Typography>


        <Typography sx={{
            color:Colours.white,
            marginTop:'0%',
            marginLeft:'3%',
            fontSize:14,
            }}>185 Havelock Road , Colombo 00500, Sri Lanaka</Typography>
    </Box>

    <Box sx={{
        width:'100%',
        height:'1%',
        backgroundColor:Colours.white,
        marginTop:'3%',
        marginBottom:'2%',

    }}>

    </Box>

{/* pick up estimate */}
    <Box>
        <Typography sx={{
            color:Colours.white,
            fontSize:28,
            marginTop:'3%',
            marginLeft:'3%',
            }}>
        Pick Up Estimate</Typography>


        <Typography>
        <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="auto"
        name="radio-buttons-group"
        sx={{
            color:Colours.white,
            marginLeft:'8%',
            marginTop:'3%',
        }}
      >
        <Radio value="auto" label="within 30 minutes" />
        <Radio value="select" label="schedule a time" />

      </RadioGroup>
           </Typography>
    </Box>

    <Box sx={{
        width:'100%',
        height:'1%',
        backgroundColor:Colours.white,
        marginTop:'3%'
    }}></Box>

{/* payment code */}

<Box>
        <Typography sx={{
            color:Colours.white,
            fontSize:28,
            marginTop:'3%',
            marginLeft:'3%',
            }}>
        Payment</Typography>


       
        <Typography sx={{
            color:Colours.white,
            marginTop:'3%',
            marginLeft:'8%',
            fontSize:14,
            }}>Apply the promo code
        
           </Typography>
    </Box>

    <Box sx={{
        width:'100%',
        height:'1%',
        backgroundColor:Colours.white,
        marginTop:'3%'
    }}></Box>


    {/* food items */}
    <Box>
        <Typography sx={{
            color:Colours.white,
            fontSize:28,
            marginTop:'3%',
            marginLeft:'3%',
            }}>
        Food Items</Typography>


       
        <Typography sx={{
            color:Colours.white,
            marginTop:'3%',
            marginLeft:'8%',
            fontSize:14,
            }}>Apply the promo code
        
           </Typography>
    </Box>

    <Box sx={{
        width:'100%',
        height:'1%',
        backgroundColor:Colours.white,
        marginTop:'3%'
    }}></Box>


  </Grid>

  {/* Right side  */}
  <Grid item xs={12} sm={6}>
    <Box sx={{
        width:'50%',
        height:'70%',
        backgroundColor:Colours.transparenceGrey,
        padding:'5%',
        marginLeft:'60%',
        marginTop:'20%',
        color:Colours.white,

    }}>
            <Box display="flex" justifyContent="space-between">
            <p>Sub Total :</p>
            <p>800.00</p>
            </Box>
            <Box display="flex" justifyContent="space-between">
            <p>Discount :</p>
            <p>2.5%</p>
            </Box>
            <Box display="flex" justifyContent="space-between">
            <p>Total Amount :</p>
            <p>700.00</p>
            </Box>
            <Box display="flex">
            <Button xs={12} sm={6} href='#' variant="contained" sx={{
             marginLeft:'10%',
             marginTop:'10%',
              background: Colours.green, '&:hover': {
                backgroundColor: Colours.yellow,
              },
              color: Colours.dark,
              fontSize: '20px',

              hover: Colours.yellow,
              [theme.breakpoints.down('sm')]: {
                fontSize: '18px',
                marginLeft:'0%',
                width:'100%',

               
              },
            }}>
              PLACE THE ORDER
            </Button>
            </Box>
    </Box>
 


  </Grid>
</Grid>
  )
}

export default Userorderform
