import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import theme, { Colours } from '../../assets/theme/theme';
import Button from '@mui/material/Button';
import Skeleton from '@mui/material/Skeleton';
import DoneAllRoundedIcon from '@mui/icons-material/DoneAllRounded';

export default function OrderwithS() {

return (
<Box sx={{backgroundColor:Colours.transparenceGrey,padding:'3%'}} >
            <Box display="flex" justifyContent="space-between">
            <p>Order Time :</p>
            <p>8.00 AM</p>
            </Box>
            <Box display="flex" justifyContent="space-between">
            <p>Promo Code :</p>
            <p>34Qjsdnd567</p>
            </Box>
            <Box display="flex" justifyContent="space-between">
            <p>Payment :</p>
            </Box>
            <Box display="flex">
            <Skeleton  sx={{ backgroundColor:Colours.white,marginLeft:'40%' }} variant="circular" width={100} height={100}/>
            <DoneAllRoundedIcon sx={{backgroundColor:'none',marginTop:'2.5%',position:'absolute',marginLeft:'16.5%',
            
                [theme.breakpoints.down('sm')]: {
                  marginLeft: '43%',
                  marginTop:'8%',
                  
                },

              }}/>
            </Box>

            <Grid item xs={12} sm={6}>
            <Button xs={12} sm={6} href='#' variant="contained" sx={{
              marginLeft:'80%',marginTop:'10%',
              background: Colours.darkgray, '&:hover': {
                backgroundColor: Colours.grayWhite, color: Colours.dark,
              },
              color: Colours.grayWhite,
              fontSize: '20px',
              fontFamily:'Poppins',

              [theme.breakpoints.down('sm')]: {
                fontSize: '18px',
                width:'100%',
                marginBottom:'7%',
                marginLeft:'0%',
                
              },
            }}>
              START
            </Button>
          
        </Grid>


        </Box>
    )
}