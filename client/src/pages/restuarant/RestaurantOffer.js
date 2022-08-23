import { Box } from '@mui/system';
import React from 'react';
import theme, { Colours } from '../../assets/theme/theme';

import Background from '../../assets/images/pv4WkDi.webp';

// when calling data, nned to take from there
import Offer from '../../assets/images/offer5.jpg';
import bgImage from '../../assets/images/offersbg.png';
import Rlogo from '../../assets/images/restaurant-logo.jpg';
import { Avatar, IconButton, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {Link} from 'react-router-dom';

// for scroll reveals
import Fade from 'react-reveal/Fade';

// ----------------this is tem until data call--------
const details = {
    "detail": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quosblanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eumquasi quidem quibusdam.",
}

const RestaurantOffer = () => {
    return (

        // ------main box----------------

        <Box sx={{
            margin: 0,
            padding: 0,
            width: "100%",
            height: "100vh",
            display: "flex",
            flexDirection: "row",
            background: `url(${bgImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            [theme.breakpoints.down('sm')]: {
                flexDirection: "column-reverse",
            },
        }}>
            {/* --------------------description area-------------------- */}
            <Box sx={{
                width: "70%",
                display: "flex",
                flexDirection: "column",
                margin: "auto",
                // marginBottom: "2rem",
                [theme.breakpoints.down('sm')]: {
                    width: "100%",
                },
            }}>

                {/* --------------beginin of the description area---------------- */}
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                }}>
                    {/* ------------topic area--------------------- */}
                    <Fade top cascade>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "row",
                            padding: "1rem",
                        }}>
                            <IconButton component={Link} to={"/Restaurant"}>
                                <ArrowBackIosIcon sx={{
                                    color: Colours.green, '&:hover': {
                                        color: Colours.yellow,
                                        [theme.breakpoints.down('sm')]: {
                                            height: "80%",
                                            marginTop: "30px",
                                        },
                                    },
                                    fontSize: "2rem",
                                }} />
                            </IconButton>

                            <Avatar
                                alt="food image"
                                src={Rlogo}
                                sx={{
                                    width: "10%",
                                    height: "100%",
                                    margin: "1rem",
                                    border: "2px solid #EFEAEA",
                                    [theme.breakpoints.down('sm')]: {
                                        height: "80%",
                                    },
                                }} />

                            <Typography variant='h4' sx={{
                                color: Colours.green,
                                marginTop: "4%",
                                [theme.breakpoints.down('sm')]: {
                                    fontSize: '20px',
                                    marginRight: "10%",
                                    marginTop: "30px",
                                }
                            }}>
                                Seasonal Offers
                            </Typography>
                        </Box>
                    </Fade>
                    {/* ------------end of topic area--------------- */}

                    {/* -------------description area--------------- */}
                    <Fade left cascade>
                        <Typography sx={{
                            color: Colours.green,
                            marginLeft: "2rem",
                        }}>
                            Description
                        </Typography>

                        <Typography variant="body1" gutterBottom sx={{
                            color: Colours.grayWhite,
                            justifyContent: 'center',
                            textAlign: 'center',
                            fontSize: '1rem',
                            padding: '1%',
                            width: "80%",
                            margin: "auto",
                            marginRight: "15%",
                            transition: 'transform .2s', '&:hover': {
                                transform: 'scale(1.04)',
                                opacity: 4,
                            },
                            [theme.breakpoints.down('sm')]: {
                                fontSize: '14px',
                                marginRight: "10%",
                            }
                        }}>
                            {details.detail}
                            <br />
                            {details.detail}

                        </Typography>
                    </Fade>

                </Box>
                {/* --------------end of the description area---------------- */}

            </Box>
            {/* -----------------------end of description area----------------------- */}

            {/* -----------------------image area------------------- */}
            <Box sx={{
                width: "30%",
                background: `url(${Background})`,
                borderRadius: "360px 0px 0px 360px",
                border: "2px solid #EFEAEA",
                opacity: 0.8,
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
                    background: `url(${Offer})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    opacity: 4,
                    transition: 'transform .2s', '&:hover': {
                        transform: 'scale(1.04)',
                        opacity: 4,
                    },
                    [theme.breakpoints.down('sm')]: {
                        width: "40%",
                        height: "18%",
                        top: "15%",
                        right: "30%",
                    },
                }}>

                </Box>

            </Box>
            {/* ---------------end of image area----------------------- */}

        </Box >
    )
}

export default RestaurantOffer
