import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import theme, { Colours } from '../../assets/theme/theme';
import Discountpng from '../../assets/images/discount_group.png';
import Button from '@mui/material/Button';
import Skeleton from '@mui/material/Skeleton';
import DoneAllRoundedIcon from '@mui/icons-material/DoneAllRounded';

import axios from 'axios';
import authHeader from "../../services/auth-header";

export default function OrderwithS(props) {

  // ---order item------
  const order = props.order
  const itemId = order.foodId;
  console.log(order);

  // ---order id ---------------
  const oID = props.oId

  // function callData() {

    

  // };

  let callData = () => {
    // -----------------------------------to getting food item details------------------------------------------
    const getOfferDetails = async () => {

      const ItemData = new FormData();
      ItemData.append('itemId', itemId);
      ItemData.append('orderId', oID);

      try {
        const resp = await axios.put(`http://localhost:8072/FoodiFy/Restaurant/updateOrderItem`,ItemData, { headers: authHeader() });

        // const details = resp.data;

        // setDetails1({ ...details });

        // console.log(details);

        // setItems([...items1]);
      } catch (err) {
        // Handle Error Here
        console.error(err);
      }
    };

    getOfferDetails();

    // --------calling items for cart---------------
};

return (
<Box sx={{backgroundColor:Colours.transparenceGrey,padding:'3%'}} >
            
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
            <Button xs={12} sm={6} variant="contained" onClick={callData} sx={{
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