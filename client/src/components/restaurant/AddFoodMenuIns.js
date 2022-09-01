import React, { useState } from 'react';
import { Box, TextareaAutosize, Button, Stack } from '@mui/material';
import Grid from '@mui/material/Grid';
import { IconButton, TextField, Typography } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { color } from '@mui/system';
import theme, { Colours } from '../../assets/theme/theme';//to use theme provider,need to import this

import AddIcon from '@mui/icons-material/Add';

import Avatar from '@mui/material/Avatar';

import AddFoodMenuCat from './AddFoodMenuCat';

import PAGE1 from '../../assets/icons/page01.png'
import PAGE2 from '../../assets/icons/page02.png'

import { Link } from 'react-router-dom';


// ----------array or object ot get category values--------------------
const category = [
    {
        value: 'Vegie',
        label: 'Vegie',
    },
    {
        value: 'Sea Food',
        label: 'Sea Food',
    },
    {
        value: 'Indian',
        label: 'Indian',
    },
    {
        value: 'Italian',
        label: 'Italian',
    },
];

// ------------------------food names-----------------
const foods = [
    {
        value: 'Vegie',
        label: 'Vegie Masala',
    },
    {
        value: 'Sea Food',
        label: 'Sea Food Fish curry',
    },
    {
        value: 'Indian',
        label: 'Indian Those',
    },
    {
        value: 'Italian',
        label: 'Italian burger',
    },
];

var food = 0;
var formDataCat = new FormData();

function AddFoodMenuIns(props) {



    // --------to add category section--------
    const [components, addComponents] = useState(["Vegie"]); //use to render when new component added to page


    

    function addSection() {
        food++;
        console.log(food);
        addComponents([...components, <AddFoodMenuCat />])
    }
    // ---------------------------------------




    // -------------initial states for fields---------------------------
    const initialValues = { foodMenuName: "", foodMenuDes: "" };

    // ----------create state name form values--------
    const [formValues, setFormValues] = React.useState(initialValues);

    // ----------create state name form errors--------
    const [formErrors, setFormErrors] = React.useState({});

    // -------------usestate for submit form-----------
    const [isSubmit, setIsSubmit] = React.useState(false);




    // -------function to handle changes in the input fields and set it to formvalues----------
    const handleChange = (e) => {

        // destructuring inputfield
        const { name, value } = e.target;
        // get the relavant name as key and assign value to it
        setFormValues({ ...formValues, [name]: value });


    }

    return (

        <Box scroll='paper' sx={{
            margin: "auto",
            height: "57vh",
            width: "53%",
            padding: "auto",
            overflow: "scroll"
        }}>

            <Box component="form" color="#fff" bgcolor="#171717" opacity="50" sx={{ display: "flex", flexDirection: "column", borderRadius: '20px', p: "3%", '& .MuiTextField-root': { m: 1, width: '96%' }, width: { lg: "45vw", xs: "55vw" } }} >

                <Typography variant="h4" gutterBottom sx={{ fontSize: { lg: "230%", xs: "180%" } }} >
                    {props.Path.state.name}
                </Typography>

                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "95%",
                    margin: "auto",
                    justifyContent: "center",
                }}>

                    <Typography variant='body' sx={{
                        color: Colours.primary,
                        textAlign: "center",
                    }}>
                        Add Menu Categories and Description
                    </Typography>

                    {/* button */}
                    <IconButton onClick={addSection} sx={{ width: "2.2rem" }}>
                        <AddIcon sx={{ color: Colours.green, textAlign: "right" }} />
                    </IconButton>


                    {components.map((item, i) => (



                        <Grid container spacing={3} sx={{ input: { color: "#fff" }, "label": { color: "#fff" }, p: "1%" }} >
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="Menu_Category"
                                    name="Menu_Category"
                                    label="Menu Category"
                                    fullWidth
                                    autoComplete="given-name"
                                    variant="standard"
                                    sx={{
                                        "& label.Mui-focused": {
                                            color: "#fff"
                                        }
                                    }}

                                    value={formValues.Menu_Category}
                                    onChange={handleChange}
                                    {...(formErrors.exists && { error: true, helperText: formErrors.exists })}


                                />
                            </Grid>

                            <Grid item xs={12} >
                                <TextareaAutosize
                                    id="Menu_Category_des"
                                    name="Menu_Category_des"
                                    placeholder="Description about Menu Category"
                                    style={{ width: "97%", paddingTop: '5px' }}

                                    value={formValues.Menu_Category_des}
                                    onChange={handleChange}
                                    {...(formErrors.exists && { error: true, helperText: formErrors.exists })}

                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Button variant="contained" sx={{
                                    color: '#FFFFFF', backgroundColor: "#3E3E3E", '&:hover': {
                                        backgroundColor: Colours.darkgray,
                                    }
                                }}>
                                    Browse
                                </Button>
                            </Grid>
                        </Grid>

                    ))}


                    <Grid item container ml="87%" mt="1%">

                        <Button variant="contained" sx={{
                            color: '#000', backgroundColor: "#EFEAEA", '&:hover': {
                                backgroundColor: Colours.formWhite,
                            }
                        }} component={Link} to="/AddFoodMenuItem">
                            Confirm
                        </Button>

                    </Grid>


                </Box>



            </Box>


        </Box>
    )
}

export default AddFoodMenuIns