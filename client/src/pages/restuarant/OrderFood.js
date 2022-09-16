import { Box } from '@mui/system';
import React, { useState, useEffect } from 'react';
import theme, { Colours } from '../../assets/theme/theme';
import axios from 'axios';
import authHeader from "../../services/auth-header";

import Background from '../../assets/images/pv4WkDi.webp';

// when calling data, nned to take from there'
import { Avatar, Typography } from '@mui/material';
import OrderDescription from '../../components/restaurant/OrderDescription';
import FoodNutrition from '../../components/restaurant/FoodNutrition';
import FoodComment from '../../components/restaurant/FoodCooment';
import OrderFoodForm from '../../components/restaurant/OrderFoodForm';
import StarIcon from '@mui/icons-material/Star';

// for scroll reveals
import Fade from 'react-reveal/Fade';
import Navbar from './../../components/Navbar';
import { useLocation } from 'react-router-dom';

// ------------------for the side drawer----------
import Drawer from '@mui/material/Drawer';
import OrderSideDrawer from '../../components/restaurant/OrderSideDrawer';
import styled from '@emotion/styled';


// ----------------this is tem until data call--------
const details = {
    "detail": "Daing na Bangus refers to milkfish that is marinated in a mixture composed of vinegar, crushed peppercorn, garlic, and salt. Hot pepper such as cayenne pepper powder can be added to make it spicy. It is usually marinated overnight for best results, and then fried until crispy.",
}

function createData(type, amount, percentage) {
    return { type, amount, percentage };
}

//   for the comments

const comments1 = [
    {
        "name": "Navod",
        "detail1": "This is a good restaurant",
    },
    {
        "name": "Sankalpa98",
        "detail1": "This place has good hospitality",
    },
    {
        "name": "Nisheda",
        "detail1": "This place provides good service",
    },
    {
        "name": "Shehan21",
        "detail1": "This offers food with exelent quality",
    },
    {
        "name": "Jane",
        "detail1": "This is a good restaurant",
    }
]



const OrderFood = () => {

    // --------------to get the id------------------
    const location = useLocation();

    // ----------------------for store response data----------------------
    const [details1, setDetails1] = React.useState({});
    // --------------to store total nutrition amount----------------
    const [total, setTotal] = React.useState(null);

    // -----------setting up nutritions-----------------
    const rows = [
        createData('Calories', details1.calaries, ((details1.calaries / total) * 100).toFixed(1)),
        createData('Fat', details1.fat, ((details1.fat / total) * 100).toFixed(1)),
        createData('Carbs', details1.carbo, ((details1.carbo / total) * 100).toFixed(1)),
        createData('Protein', details1.protein, ((details1.protein / total) * 100).toFixed(1)),
    ];

    // ----------------setting up image--------------------
    var image = null;
    var name = null;
    var price = null;
    var Fid = null;
    var discount = null;
    var Rid = location.state.id.Rid;

    console.log(location.state);

    if (details1.image) {
        image = details1.image.data;
    }
    if (details1.name) {
        name = details1.name;
    }
    if (details1.price) {
        price = details1.price;
    }
    if (details1.id) {
        Fid = details1.id;
    }
    if (details1.id) {
        Fid = details1.id;  //foodId
    }
    if (details1.discount) {
        discount = details1.discount;
    }

    const orderdata = {
        "Fid": Fid,
        "price": price,
        "Rid": location.state.id,
        "discount": discount,
    }


    // ------------------------calling category values---------------------------------------------------
    useEffect(() => {

        // -----------------------------------to getting food item details------------------------------------------
        const getOfferDetails = async () => {
            try {
                const respOffer = await axios.get(`http://localhost:8072/FoodiFy/Service/getOrderFood/${location.state.id.id}`);

                const details = respOffer.data;
                setDetails1({ ...details });

                // ----------------------setting up nutrition count----------------------------
                const totalG = details.carbo + details.fat + details.protein + details.calaries;
                // console.log(totalG);
                setTotal(totalG);

                console.log(details);
                // setItems([...items1]);
            } catch (err) {
                // Handle Error Here
                console.error(err);
            }
        };

        getOfferDetails();

        // --------calling items for cart---------------
        

    }, []);

    // -----------------cutomise drawer-------------------------------------
    const SideDrawer = styled(Drawer)({
        '.MuiDrawer-paper': {
            background: Colours.gray3,
            borderRadius: "360px 0px 0px 360px",

        }
    });
    // -------------------------------------------------------------------------

    // --------------------for the side drawe----------------------------------------------
    const [state, setState] = React.useState({ right: false });

    const toggleDrawer = (anchor, open) => (event) => {

        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    //   ------------------------------------------------------------------------------------

    // console.log(total);

    return (

        <div>

            <Fade top>
                <Navbar />
                <button onClick={toggleDrawer('right', true)}>cart</button>
            </Fade>

            {/* ---------------side drawer------------ */}
            <SideDrawer
                anchor={'right'}
                open={state['right']}
                onClose={toggleDrawer('right', false)}
            >
                <OrderSideDrawer />
            </SideDrawer>
            {/* ------------end of side drawer-------- */}

            <Box sx={{
                margin: 0,
                padding: 0,
                background: Colours.primary,
                width: "100%",
                display: "flex",
                flexDirection: "row",
                [theme.breakpoints.down('sm')]: {
                    flexDirection: "column-reverse",
                },
            }}>

                {/* --------------------details area-------------------- */}
                <Box sx={{
                    width: "70%",
                    display: "flex",
                    flexDirection: "column",
                    margin: "auto",
                    marginBottom: "2rem",
                    [theme.breakpoints.down('sm')]: {
                        width: "100%",
                        marginTop: "20%",
                    },
                }}>

                    {/* ----description--- */}
                    <Fade left>
                        <OrderDescription details={details1} />
                    </Fade>

                    <Fade top>
                        <FoodNutrition data={rows} sx={{ maring: "1rem" }} />
                    </Fade>

                    <Fade bottom>
                        <OrderFoodForm orderdata={orderdata} Rid={Rid} />
                    </Fade>

                    <Fade big>
                        <FoodComment comments={comments1} />
                    </Fade>

                </Box>
                {/* -----------------------end of details area----------------------- */}

                {/* -----------------------image area------------------- */}

                <Box sx={{
                    width: "30%",
                    background: `url(${Background})`,
                    borderRadius: "360px 0px 0px 360px",
                    border: "2px solid #EFEAEA",
                    [theme.breakpoints.down('sm')]: {
                        width: "98%",
                        margin: 0,
                        padding: 0,
                        height: "25vh",
                        borderRadius: "0px 0px 360px 360px",
                    },
                }}>
                    {/* ------------------for the food image--------------- */}
                    <Box sx={{
                        width: "25%",
                        height: "70%",

                        position: "absolute",
                        top: "25%",
                        right: "15%",
                        display: "flex",
                        flexDirection: "column",
                        background: Colours.green,
                        borderRadius: "360px 360px 40px 40px",
                        padding: 0,
                        [theme.breakpoints.down('sm')]: {
                            width: "40%",
                            height: "auto",
                            top: "15%",
                            right: "30%",
                        },
                    }}>

                        <Avatar
                            alt="food image"
                            src={`data:image/jpeg;base64,${image}`}
                            sx={{
                                width: "98%",
                                height: "50vh",
                                border: "2px solid #EFEAEA",

                                [theme.breakpoints.down('sm')]: {

                                },
                            }} />

                        {/* ---rating area--- */}
                        <Box sx={{
                            background: Colours.green,
                            height: "auto",
                            borderRadius: "1rem",
                            display: "flex",
                            flexDirection: "column",

                        }}>
                            <Typography variant='h4' sx={{
                                color: Colours.grayWhite,
                                textAlign: "center",
                                [theme.breakpoints.down('sm')]: {
                                    fontSize: "15px",
                                },
                            }}>
                                {/* -------------food name-------------------- */}
                                {name}
                            </Typography>
                            <Box sx={{
                                width: "80%",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                margin: "auto",
                            }}>
                                <StarIcon fontSize='medium' sx={{
                                    color: Colours.yellow,
                                    [theme.breakpoints.down('sm')]: {
                                        fontSize: "12px",
                                    },
                                }} />
                                <Typography variant='h5' sx={{
                                    color: Colours.grayWhite,
                                    [theme.breakpoints.down('sm')]: {
                                        fontSize: "12px",
                                    },
                                }}>4.2</Typography>
                            </Box>
                        </Box>
                    </Box>

                </Box>
                {/* ---------------end of image area----------------------- */}

            </Box >

        </div>

    )
}

export default OrderFood
