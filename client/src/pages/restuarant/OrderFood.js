import { Box } from '@mui/system';
import React from 'react';
import theme, { Colours } from '../../assets/theme/theme';

import Background from '../../assets/images/pv4WkDi.webp';

// when calling data, nned to take from there
import FoodImage from '../../assets/images/foodimage.jpg'
import { Avatar } from '@mui/material';
import OrderDescription from '../../components/restaurant/OrderDescription';
import FoodNutrition from '../../components/restaurant/FoodNutrition';
import FoodComment from '../../components/restaurant/FoodCooment';
import OrderFoodForm from '../../components/restaurant/OrderFoodForm';

// for scroll reveals
import Fade from 'react-reveal/Fade';

// ----------------this is tem until data call--------
const details = {
    "detail": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quosblanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eumquasi quidem quibusdam.",
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

const OrderFood = () => {
    return (
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
                    <FoodComment comments={comments} />
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
                    height: "50%",
                    margin: "auto",
                    position: "absolute",
                    top: "25%",
                    right: "15%",
                    [theme.breakpoints.down('sm')]: {
                        width: "40%",
                        height: "18%",
                        top: "15%",
                        right: "30%",
                    },
                }}>

                    <Avatar
                        alt="food image"
                        src={FoodImage}
                        sx={{
                            width: "100%",
                            height: "100%",
                            border: "2px solid #EFEAEA",
                            [theme.breakpoints.down('sm')]: {

                            },
                        }} />
                </Box>

            </Box>
            {/* ---------------end of image area----------------------- */}

        </Box >
    )
}

export default OrderFood
