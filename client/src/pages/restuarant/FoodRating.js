import { Box } from '@mui/system';
import React from 'react';
import theme, { Colours } from '../../assets/theme/theme';

import Background from '../../assets/images/pv4WkDi.webp';
import FoodRatingForm from '../../components/restaurant/FoodRatingForm';

// when calling data, nned to take from there
import FoodImage from '../../assets/images/foodimage.jpg'
import { Avatar } from '@mui/material';

const FoodRating = () => {
    return (
        <Box sx={{
            margin: 0,
            padding: 0,
            background: Colours.primary,
            width: "100%",
            display: "flex",
            flexDirection: "row",
            height: "110vh",
            [theme.breakpoints.down('sm')]: {
                flexDirection: "column",
            },
        }}>
            {/* --------------------form area-------------------- */}
            <Box sx={{
                width: "70%",
                display:"flex",
                flexDirection:"column",
                [theme.breakpoints.down('sm')]: {
                    width:"100%",
                },
            }}>
                
                {/* --------------beginin of the form area---------------- */}
                <FoodRatingForm />
            </Box>
            {/* ----------------------------------------------------------- */}

            {/* -----------------------image area------------------- */}
            <Box sx={{
                width: "30%",
                background: `url(${Background})`,
                borderRadius: "360px 0px 0px 360px",
                border: "2px solid #EFEAEA",
                [theme.breakpoints.down('sm')]: {
                    width:"100%",
                },
            }}>
                {/* ------------------for the food image--------------- */}
                <Box >

                    <Avatar
                        alt="Remy Sharp"
                        src={FoodImage}
                        sx={{
                            width: "20rem",
                            height: "20rem",
                            border: "2px solid #EFEAEA",
                            position: "absolute",
                            top: "30%",
                            right: "15%"
                        }} />
                </Box>

            </Box>

        </Box>
    )
}

export default FoodRating
