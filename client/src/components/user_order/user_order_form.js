import React from 'react';
import { Box } from '@mui/material';
import theme, { Colours } from '../../assets/theme/theme'; //to use theme provider,need to import this
import '../../assets/css/Profile.css';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Button from '@mui/material/Button';
import pickupfoodImage from '../../assets/images/order_food.png';
import '../../assets/css/Profile.css';

const Userorderform = () => {


  return (

<Grid container spacing={2} columns={16} sx={{
  marginLeft:'3%',
}}>
  <Grid item xs={12} sm={6}>
    <Box>
        <Typography sx={{
            color:Colours.white,
            fontSize:28,
            marginTop:'3%',
            marginLeft:'3%',
            fontFamily:'Poppins',
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
        height:'0.2%',
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
            marginTop:'8%',
            marginLeft:'3%',
            fontFamily:'Poppins',
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
        height:'0.2%',
        backgroundColor:Colours.white,
        marginTop:'8%',
        fontFamily:'Poppins',
    }}></Box>

{/* payment code */}

<Box>
        <Typography sx={{
            color:Colours.white,
            fontSize:28,
            marginTop:'8%',
            marginLeft:'3%',
            fontFamily:'Poppins',
            }}>
        Payment</Typography>


       
        <Typography sx={{
            color:Colours.white,
            marginTop:'3%',
            marginLeft:'8%',
            fontSize:14,
            }}>Apply the promo code
        
           </Typography>

           <Button xs={12} sm={6} href='#' variant="contained" sx={{
             marginLeft:'10%',
             marginTop:'6%',
             marginBottom:'6%',
              background: Colours.green, '&:hover': {
                backgroundColor: Colours.yellow,
              },
              color: Colours.dark,
              fontSize: '20px',
              fontFamily:'Poppins',
              hover: Colours.yellow,
              [theme.breakpoints.down('sm')]: {
                fontSize: '18px',
                marginLeft:'20%',
                width:'50%',

               
              },
            }}>
              APPLY
            </Button>
    </Box>

    <Box sx={{
        width:'100%',
        height:'0.2%',
        backgroundColor:Colours.white,
        marginTop:'3%'
    }}></Box>


    {/* food items */}
    <Box>
        <Typography sx={{
            color:Colours.white,
            fontSize:28,
            marginTop:'6%',
            marginLeft:'3%',
            marginBottom:'6%',
            fontFamily:'Poppins',
            }}>
        Food Items</Typography>


       
        <Typography>
            
            <Box 
            sx={{
                width:'80%',
                marginLeft:'5%',
                height:'auto',
                backgroundColor:Colours.transparenceGrey,
                color:Colours.white,
                padding:'5%',
            }}
            display="flex" justifyContent="space-between">
            <img className='pickupfoodstyle' src={pickupfoodImage} />
            <p>mini veg salad</p>
            <p>400.00</p>
            </Box>
            <Box
            sx={{
                width:'80%',
                marginLeft:'5%',
                marginTop:'2%',
                height:'auto',
                backgroundColor:Colours.transparenceGrey,
                color:Colours.white,
                padding:'5%',
            }}
            display="flex" justifyContent="space-between">
            <img className='pickupfoodstyle' src={pickupfoodImage} />
            <p>Mini veg salad</p>
            <p>400.00</p>
            </Box>
            
           </Typography>


    </Box>

    <Box sx={{
        width:'100%',
        height:'0.2%',
        backgroundColor:Colours.white,
        marginTop:'8%',
        marginBottom:'8%',
    }}></Box>


  </Grid>

  {/* Right side  */}
  <Grid item xs={12} sm={6}>
    <Box className="Pickup-body-Style" sx={{
        width:'80%',
        height:'70%',
        backgroundColor:Colours.transparenceGrey,
        padding:'5%',
        paddingTop:'50%',
        marginLeft:'60%',
        marginTop:'20%',
        marginBottom:'10%',
        color:Colours.white,
        borderRadius:'33px',
        [theme.breakpoints.down('sm')]: {
          
            marginLeft:'4%',
            width:'80%'
          
           
          },

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
             marginLeft:'30%',
             marginTop:'10%',
              background: Colours.green, '&:hover': {
                backgroundColor: Colours.yellow,
              },
              color: Colours.dark,
              fontSize: '20px',
              fontFamily:'Poppins',
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
