import { Box } from '@mui/system';
import React from 'react';
import theme, { Colours } from '../../assets/theme/theme';

import Background from '../../assets/images/pv4WkDi.webp';

// when calling data, nned to take from there
import FoodImage from '../../assets/images/food items/1.png'
import { Avatar, Typography } from '@mui/material';
import OrderDescription from '../../components/restaurant/OrderDescription';
import FoodNutrition from '../../components/restaurant/FoodNutrition';
import FoodComment from '../../components/restaurant/FoodCooment';
import OrderFoodForm from '../../components/restaurant/OrderFoodForm';
import StarIcon from '@mui/icons-material/Star';

// for scroll reveals
import Fade from 'react-reveal/Fade';
import Navbar from './../../components/Navbar';


// ----------------this is tem until data call--------
const details = {
    "detail": "Daing na Bangus refers to milkfish that is marinated in a mixture composed of vinegar, crushed peppercorn, garlic, and salt. Hot pepper such as cayenne pepper powder can be added to make it spicy. It is usually marinated overnight for best results, and then fried until crispy.",
}

function createData(type, amount, percentage) {
    return { type, amount, percentage };
}
// ---------------nutrition details--------------------
const rows = [
    createData('Calories', 59, 6.0),
    createData('Cholesterol', 2, 1.0),
    createData('Sodium', 7, 2.0),
    createData('Fat', 37, 4.0),
    createData('Carbs', 62, 7.0),
    createData('Protein', 5, 0.4),
    createData('Vitamin', 6, 0.5),
];

//   for the comments
const comments = {
    "name": "username",
    "detail1": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quosblanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eumquasi quidem quibusdam.",
}

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
    return (

        <div>

            <Fade top>
                <Navbar />
            </Fade>
            
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
                        <OrderDescription details={details} />
                    </Fade>

                    <Fade top>
                        <FoodNutrition data={rows} sx={{ maring: "1rem" }} />
                    </Fade>

                    <Fade bottom>
                        <OrderFoodForm />
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
                            src={FoodImage}
                            sx={{
                                width: "98%",
                                height: "auto",
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
                            }}>Boneless Diang na Bangus</Typography>
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
