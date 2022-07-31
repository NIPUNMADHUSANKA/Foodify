
import React from 'react';
import { Avatar, Box, Button, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import theme, { Colours } from '../../assets/theme/theme';

import FoodItem1 from '../../assets/images/profile_dash.png';
import FoodItem2 from '../../assets/images/plate1.jpg';
import TakeoutDiningIcon from '@mui/icons-material/TakeoutDining';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';


// ---------this is temp-------
const items = [

    {
        id: "foodId",
        name: "Name of the food 1",
        quantity: 1,
        img1: {FoodItem1},
    },
    {
        id: "foodId",
        name: "Name of the food 2",
        quantity: 2,
        img1: {FoodItem2},
    },
]

const OrderSideDrawer = (anchor) => {

    // ------------drawer function------------------
    const [state, setState] = React.useState({ right: false });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    return (
        <Box
            sx={{
                width: "40rem",
                background: Colours.gray1,
                opacity: 0.6,
                borderRadius: "0px 0px 360px 360px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "1rem",
            }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            {/* ----------topic----------- */}
            <Typography variant='h4' sx={{
                margin: "auto",
                marginTop: "2rem",
                color: Colours.primary,
            }}>
                Restaurant name
            </Typography>

            <Divider sx={{width:"70%", color:Colours.primary, margin:"auto"}}/>

            {/* -------------add more---------------- */}
            <Button variant="contained" sx={{
                background: Colours.grayWhite, '&:hover': {
                    backgroundColor: Colours.secondary,
                },
                color: Colours.dark,
                fontSize: '1rem',
                hover: Colours.green,
                borderRadius: "1rem",
                width: "30%",
                margin: "auto",
                marginTop: "1rem",
                [theme.breakpoints.down('sm')]: {
                    fontSize: '8px',
                    padding: '2px',
                },
            }} startIcon={<AddShoppingCartIcon />} >Add more</Button>
            {/* -----------end of add more------------ */}

            {/* -------food list----------- */}
            {/* need to map when real data calling */}
            <List sx={{
                width: "70%",
                margin: "auto",
            }}>
                {items.map((item) => (
                    <ListItem key={item}>

                        <ListItemIcon>
                            <TakeoutDiningIcon />
                        </ListItemIcon>

                        <ListItemText>Quantity:{item.quantity}</ListItemText>
                        <ListItemText>{item.name}</ListItemText>

                        {/* {console.log(item.foodimage)} */}

                        <ListItemAvatar key={item}>
                            <Avatar
                                alt="food image"
                                src={FoodItem2}
                                sx={{
                                    border: "2px solid #EFEAEA",
                                    [theme.breakpoints.down('sm')]: {

                                    },
                                }} />
                        </ListItemAvatar>

                    </ListItem>
                ))}
            </List>
            {/* -------------------end of the list------------------- */}

            {/* ---------------checkout button-------------------- */}
            <Button variant="contained" sx={{
                margin: 'auto',
                marginTop: "1rem",
                width: "60%",
                background: Colours.green, '&:hover': {
                    backgroundColor: Colours.yellow,
                },
                color: Colours.dark,
                fontSize: '1rem',
                hover: Colours.green,
                borderRadius: "1rem",
                [theme.breakpoints.down('sm')]: {
                    fontSize: '8px',
                    padding: '2px',
                },
            }} endIcon={<ShoppingBagIcon />} >Proceed</Button>
        </Box>
    )
}

export default OrderSideDrawer
