import React, { useState, useEffect } from 'react';
import { Box, IconButton, Rating, TextField, ThemeProvider, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import '../../../assets/css/App.css';
import ArrowIcon from '@mui/icons-material/ArrowForward';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';

import Logo from '../../../assets/images/restaurant-logo.jpg';
import Cover from '../../../assets/images/indian-food-served-on-table.jpg';
import theme, { Colours } from '../../../assets/theme/theme';//to use theme provider,need to import this
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import EditIcon from '@mui/icons-material/Edit';
import styled from '@emotion/styled';
import axios from 'axios';
import authHeader from "../../../services/auth-header";
import { BannerContainer, BannerContainer2, BannerContent, BannerContent2, BannerLogo, BannerTitle, BannerTitle2 } from '../../../assets/theme/RBanner';

// -------to import forms------------
import { BannerForm1, BannerForm2 } from './EditForms';

// ----------for the transition of the form------------
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

// -----------update button-------------------------------
export const UpdateButton = styled(Button)(({ theme }) => ({
    margin: '0.5rem',
    background: Colours.green, '&:hover': {
        backgroundColor: Colours.yellow,
    },
    color: Colours.dark,
    fontSize: '1rem',
    hover: Colours.green,
    borderRadius: "1rem",
    Width: "20%",
    [theme.breakpoints.down('sm')]: {
        fontSize: '8px',
        padding: '2px',
    },
}));

// -----------cancel button-------------------------------
export const CancelButton = styled(Button)(({ theme }) => ({
    margin: '0.5rem',
    background: Colours.grayWhite, '&:hover': {
        backgroundColor: Colours.secondary,
    },
    color: Colours.dark,
    fontSize: '1rem',
    hover: Colours.green,
    borderRadius: "1rem",
    [theme.breakpoints.down('sm')]: {
        fontSize: '8px',
        padding: '2px',
    },
}));

// -----------Single Line Textfield------------------------------
export const CustomTextField = styled(TextField)(({ theme }) => ({
    margin: "auto",
    marginTop: "0.6rem",
    width: "95%",
    '& 	.MuiInputLabel-root': {
        color: Colours.primary,
    },
    '& label.Mui-focused': {
        color: '#95CD41',
        fontcolor: Colours.green,
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#95CD41',
    },
    '& .MuiLabel': {
        color: Colours.grayWhite,
    },

    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: Colours.primary, //white for borders when not focused
            color: Colours.grayWhite,
        },
        '&:hover fieldset': {
            borderColor: '#FAC213', //yellow border when hovering
            color: Colours.yellow,
        },
        '&.Mui-focused fieldset': {
            borderColor: '#95CD41', //green border when foucs
        },
    },
}));

const RestaurantEditableBanner = () => {

    // ----------------for the form---------------------------------------
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    // ------------------------------------------------------------------

    //  --------------------for preview the image------------------
    const [imagePreview, setImagePreview] = useState(null);
    // ----------------sending image for the backend--------------
    const [imageData, setImageData] = useState(null);

    const [imageName, setImageName] = useState("");

    const [Cover1, setCover] = useState(null);

    // ---------------set response data ----------------------------------------------
    const [image, setImage] = useState(null);
    // console.log(data);

    const blob = null;

    useEffect(() => {

        axios.get("http://localhost:8072/FoodiFy/Restaurant/GetRestaurant", { headers: authHeader() })
            .then(data => {
                console.log(data)
                setCover(data.data)

                if(data.data==null){
                    setImagePreview(Cover);
                }
                // const blob = new Blob([Int8Array.from(data.data)]);
                // const image1 = window.URL.createObjectURL(blob);
                // console.log(image1)
                // setImage(URL.createObjectURL(blob));

                // const imageData = new FormData();
                // imageData.append('imageFile', blob);
                // setImageData(imageData);
                // setImagePreview(URL.createObjectURL(blob));
            }).catch(err => console.log(err));



        console.log("hello");

    }, []);

    // ---------------preview function-------------------
    const handleUploadClick = event => {
        let file = event.target.files[0];
        const imageData = new FormData();
        imageData.append('imageFile', file);
        setImageData(imageData);
        setImagePreview(URL.createObjectURL(file));
    }

    const uploadImageWithAdditionalData = () => {
        axios.post("http://localhost:8072/FoodiFy/Restaurant/uploadBannerImage", imageData, { headers: authHeader() })
            .then(data => {
                console.log("Entry access sucessfull")
                window.location.reload(false);
                setOpen(false);
                
            })
            .catch(error => {
                // console.log(restaurantAbout)
                // console.log("There is an error")

            })
    }

    const showCoverImage = () => {



        // if(imagePreview !== null){
        //     return imagePreview;
        // }
        // if(image !== null){
        //     return image;
        // }else{
        //     return Cover;
        // }
        // imagePreview !== null ? imagePreview : image;
    }

    return (
        <ThemeProvider theme={theme}>

            {/* banner container */}
            <BannerContainer>

                {/* upper part of the banner */}

                {console.log(imagePreview)}

                {console.log(Cover)}

                <BannerContent src={imagePreview !== null ? imagePreview : `data:image/jpeg;base64,${Cover1}`}>

                    {/* <BannerForm1 /> */}

                    {/* -----------------------------begin of the banner form------------------------------- */}
                    <Box sx={{
                        width: "100%",
                        marginTop: 0,
                        [theme.breakpoints.down('sm')]: {
                            width: "90%",
                        },
                    }} >
                        <IconButton sx={{
                            marginLeft: "98%",
                            background: Colours.yellow, '&:hover': {
                                backgroundColor: Colours.green,
                            },
                            color: Colours.green,
                            [theme.breakpoints.down('sm')]: {
                                '& svg': {
                                    fontSize: "15px",
                                }
                            },

                        }} onClick={handleClickOpen} >
                            <EditIcon sx={{
                                color: Colours.dark,
                            }} />
                        </IconButton>

                        {/* ---------------------------form------------------------- */}
                        <Dialog
                            open={open}

                            keepMounted
                            TransitionComponent={Transition}

                        >
                            <DialogTitle>{"Update Cover Image"}</DialogTitle>
                            <DialogContent>
                                <Box component="form"
                                    noValidate
                                    autoComplete="off">

                                    <TextField type="file" name='image' onChange={handleUploadClick} />

                                    <Box>
                                        <UpdateButton onClick={uploadImageWithAdditionalData}>Update</UpdateButton>
                                        <CancelButton onClick={handleClose}> Cancel </CancelButton>
                                    </Box>

                                </Box>
                            </DialogContent>
                        </Dialog>

                    </Box>
                    {/* -----------------------end of the begin form---------------------------------------- */}

                    <Box sx={{
                        marginTop: '10%',
                        alignItems: "center",
                    }}>

                        <Box sx={{
                            width: "20%",
                            margin: "auto",
                        }}>
                            <Button href='#' endIcon={<ArrowIcon fontSize="medium" sx={{
                                [theme.breakpoints.down('sm')]: {
                                    fontSize: '8px',
                                },
                            }} />} variant="contained" sx={{
                                margin: '6px',
                                background: Colours.yellow, '&:hover': {
                                    backgroundColor: Colours.green,
                                },
                                color: Colours.dark,
                                fontSize: '20px',
                                hover: Colours.green,
                                [theme.breakpoints.down('sm')]: {
                                    fontSize: '8px',
                                    padding: '2px',
                                },
                            }}>
                                Offers
                            </Button>
                            <Button href='#' endIcon={<RestaurantMenuIcon fontSize="medium" sx={{
                                [theme.breakpoints.down('sm')]: {
                                    fontSize: '8px',
                                },
                            }} />} variant="contained" sx={{
                                margin: '6px',
                                background: Colours.darkgray, '&:hover': {
                                    backgroundColor: Colours.grayWhite, color: Colours.dark,
                                },
                                color: Colours.grayWhite,
                                fontSize: '20px',
                                [theme.breakpoints.down('sm')]: {
                                    fontSize: '8px',
                                    padding: '2px',
                                },
                            }}>
                                Menu
                            </Button>


                        </Box>
                    </Box>

                </BannerContent>
                {/* end of upper part of the banner */}

                {/* lower part of the banner */}
                <BannerContainer2>
                    <BannerLogo src={Logo} />
                    <BannerContent2>
                        <BannerTitle>
                            Reastaurant Name
                        </BannerTitle>

                        <BannerTitle2>
                            Rating

                        </BannerTitle2>
                        <Rating name="rating" value={4.5} precision={0.5} size="small" readOnly sx={{
                            [theme.breakpoints.down('sm')]: {
                                fontSize: '8px',
                            },
                        }} />

                    </BannerContent2>
                    {/* ----------from2------------------ */}
                    <BannerForm2 />

                </BannerContainer2>
                {/* end of the lower part of the banner */}

            </BannerContainer>
            {/* end of the banner container */}

        </ThemeProvider >
    )
}

export default RestaurantEditableBanner
