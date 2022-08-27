import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, Button, IconButton, TextField, Typography } from '@mui/material';
import theme, { Colours } from '../../../assets/theme/theme';
import EditIcon from '@mui/icons-material/Edit';
import Slide from '@mui/material/Slide';
import styled from '@emotion/styled';



// ----------for the transition of the form------------
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


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


function MenuForm() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (

        <Box sx={{
            width: "90%",
            marginTop: 4,
            [theme.breakpoints.down('sm')]: {
                marginTop: 0.4,
            },
        }} >

            <Button onClick={handleClickOpen} sx={{
                margin: '0.5rem',
                marginBottom: 0,
                marginTop: 4,
                width: "15%",
                background: Colours.yellow, '&:hover': {
                    backgroundColor: Colours.green,
                },
                color: Colours.dark,
                fontSize: '1rem',
                hover: Colours.green,
                borderRadius: "1rem",
                Width: "20%",
                [theme.breakpoints.down('sm')]: {
                    fontSize: '8px',
                    padding: '2px',
                    width: "25%",
                },
            }}>Add Food Menu
            </Button>


            {/* ---------------------------form------------------------- */}
            <Dialog
                open={open}
                keepMounted
                TransitionComponent={Transition}

            >
                <DialogTitle>{"Add Food Menu"}</DialogTitle>
                <DialogContent>
                    <Box component="form"
                        noValidate
                        autoComplete="off">

                        <CustomTextField id="restaurant_name" label="Food Menu Name" name="restaurant_name" variant="outlined" />
                        <CustomTextField type="file" name='image' />

                        <CustomTextField
                            id="about_description"
                            label="About Food Menu"
                            name="about_description"
                            variant="outlined"
                            multiline rows={8} />

                        <Box>
                            <Button type='submit' sx={{
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
                            }}>Add</Button>

                            <Button onClick={handleClose} sx={{
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
                            }}>Cancel</Button>
                        </Box>

                    </Box>
                </DialogContent>
            </Dialog>

        </Box>

    )
}

export default MenuForm