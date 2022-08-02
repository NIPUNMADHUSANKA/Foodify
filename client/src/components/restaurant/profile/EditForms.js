import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Box, Button, IconButton, TextField, Typography } from '@mui/material';
import theme, { Colours } from '../../../assets/theme/theme';
import EditIcon from '@mui/icons-material/Edit';
import styled from '@emotion/styled';

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
    margin:"auto",
    marginTop:"0.6rem",
    width:"95%",
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


// -----------------form1----------------------------------
export const BannerForm1 = () => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (

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
                onClose={handleClose}
                keepMounted
                TransitionComponent={Transition}

            >
                <DialogTitle>{"Update Cover Image"}</DialogTitle>
                <DialogContent>
                    <Box component="form"
                        noValidate
                        autoComplete="off">

                        <TextField type="file" name='image' />

                        <Box>
                            <UpdateButton type='submit'>Update</UpdateButton>
                            <CancelButton onClick={handleClose}> Cancel </CancelButton>
                        </Box>

                    </Box>
                </DialogContent>
            </Dialog>

        </Box>

    )
};
// ------------------end of form 1----------------------------------

// ----------------banner form 2----------------------------------
export const BannerForm2 = () => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (

        <Box sx={{
            width: "10%",
            marginTop: 4,
            [theme.breakpoints.down('sm')]: {
                marginTop: 0.4,
            },
        }} >
            <IconButton sx={{
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
                onClose={handleClose}
                keepMounted
                TransitionComponent={Transition}

            >
                <DialogTitle>{"Update Cover Image"}</DialogTitle>
                <DialogContent>
                    <Box component="form"
                        noValidate
                        autoComplete="off">

                        <CustomTextField id="restaurant_name" label="Restaurant Name" name="restaurant_name" variant="outlined" />
                        <CustomTextField type="file" name='image' />

                        <Box>
                            <UpdateButton type='submit'>Update</UpdateButton>
                            <CancelButton onClick={handleClose}> Cancel </CancelButton>
                        </Box>

                    </Box>
                </DialogContent>
            </Dialog>

        </Box>

    )
};



