
import React, { useState } from 'react';
import { Box } from '@mui/system';
import theme, { Colours } from '../../assets/theme/theme';
import { Button, IconButton, TextField, Typography } from '@mui/material';
import styled from '@emotion/styled';
import CategorySelection from './CategorySelection';
import AddIcon from '@mui/icons-material/Add';

// ---------------------------------text fied css style-----------------------
const InputArea = styled(TextField)({
    width: "90%",
    color: Colours.grayWhite,
    '&:fielset': {
        backgroundColor: Colours.primary,
    },

    '& 	.MuiInputLabel-root': {
        color: Colours.grayWhite,
    },
    '& 	.MuiFormHelperText-root': {
        color: Colours.grayWhite,
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
            borderColor: Colours.grayWhite, //white for borders when not focused
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
});
// ---------------------------------------------------------------------

// ----------array or object ot get category values--------------------
const category = [
    {
        value: 'Category 1',
        label: 'Category 1',
    },
    {
        value: 'Category 2',
        label: 'Category 2',
    },
    {
        value: 'Category 3',
        label: 'Category 3',
    },
    {
        value: 'Category 4',
        label: 'Category 4',
    },
];

// ------------------------food names-----------------
const foods = [
    {
        value: 'Category 1',
        label: 'Food1',
    },
    {
        value: 'Category 2',
        label: 'Food2',
    },
    {
        value: 'Category 3',
        label: 'Food3',
    },
    {
        value: 'Category 4',
        label: 'Food4',
    },
];

const AddOfferForm = () => {

    // --------to add category section--------
    const [components, addComponents] = useState(["Category1"]); //use to render when new component added to page

    function addSection() {
        addComponents([...components, <CategorySelection />])
    }
    // ---------------------------------------

    return (
        <Box>
            {/* -----------------------form area------------------------- */}
            <Box
                component="form"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    padding: "1rem",
                    opacity: 0.9,
                    background: Colours.secondary,

                    '& .MuiTextField-root': {
                        m: 1,
                        width: '96%',
                        
                    },
                    [theme.breakpoints.down('sm')]: {
                        fontSize: '15px',
                        padding: 0,
                    },
                }}
                noValidate
                autoComplete="off"
            >
                {/* -------text fields----------- */}
                <InputArea id="name" label="Name" name="name" variant="outlined" />
                <InputArea id="description" label="Description" name="description" multiline rows={6} variant="outlined" />

                {/* --------date selection area--------- */}
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    [theme.breakpoints.down('sm')]: {
                        flexDirection: "column",
                    },
                }}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        padding: "0.5rem",
                        
                    }}>
                        <Typography variant='body' sx={{ color: Colours.grayWhite, }}>Begin Date</Typography>
                        <InputArea id="begin date" type="date" name="Bdate" variant="outlined" />
                    </Box>

                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        padding: "0.5rem",
                    }}>
                        <Typography variant='body' sx={{ color: Colours.grayWhite, }}>End Date</Typography>
                        <InputArea id="begin date" type="date" name="Edate" variant="outlined" />
                    </Box>
                </Box>
                {/* ------------end of date selection area------------------ */}

                {/* -------------category and food items area------- */}
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "95%",
                    margin: "auto",
                    justifyContent: "center",
                }}>
                    <Typography variant='body' sx={{
                        color: Colours.grayWhite,
                        textAlign: "center",
                    }}>
                        Add Categories and food items
                    </Typography>

                    {/* button */}
                    <Button onClick={addSection} sx={{
                        margin: '0.5rem',
                        background: Colours.green, '&:hover': {
                            backgroundColor: Colours.yellow,
                        },
                        color: Colours.dark,
                        fontSize: '1rem',
                        hover: Colours.green,
                        borderRadius: "1rem",
                        width: "20%",
                        [theme.breakpoints.down('sm')]: {
                            fontSize: '8px',
                            padding: '2px',
                        },
                    }}
                        endIcon={<AddIcon sx={{ color: Colours.grayWhite }} />}>
                        Add
                    </Button>

                    {components.map((item, i) => (
                        <CategorySelection
                            category={category}
                            item={item}
                            name={item.value}
                            foods={foods}
                        />
                    ))}
                </Box>
                {/* ------------end of category and food items area----- */}

                {/* ------------------for discount area---------------- */}
                <InputArea id="standard-basic" label="Discount Rate" name='discount' variant="outlined" />

                {/* -----------------------------submit and cancel area--------------------------- */}
                <Box sx={{
                    marginTop: "1rem"
                }}>
                    <Button type='submit' variant="contained" sx={{
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
                    }}> Add </Button>

                    <Button variant="contained" sx={{
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
                {/* ---------------------------------end of submit and cancel arae---------------------- */}
            </Box>
            {/* ----------------end of form area-------------------------- */}
        </Box>
    )
}

export default AddOfferForm
