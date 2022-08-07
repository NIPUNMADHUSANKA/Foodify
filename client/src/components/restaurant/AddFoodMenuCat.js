import React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Colours } from '../../assets/theme/theme';
import Grid from '@mui/material/Grid';
import styled from '@emotion/styled';
import { Checkbox, FormControl, FormControlLabel, FormGroup } from '@mui/material';
import { Box,TextareaAutosize,Button, Stack } from '@mui/material';

// ---------------------------------text fied css style-----------------------
const InputArea = styled(TextField)({
    color: Colours.grayWhite,
    '&:fielset': {
        backgroundColor: Colours.primary,
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



function AddFoodMenuCat() {
    
    const [currency, setCurrency] = React.useState('category');

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };
  return (
    <Grid container spacing={3} sx={{ input: { color: "#fff" }, "label": {color: "#fff"}, p:"1%" }} >

            <Grid item xs={12}>
                <TextField
                    required
                    id="Menu_Category"
                    name="Menu_Category"
                    label="Menu Category"
                    fullWidth
                    autoComplete="given-name"
                    variant="standard"
                    sx={{"& label.Mui-focused": {
                        color:"#fff"
                    }}}
                />
            </Grid>

            <Grid item xs={12} > 
                <TextareaAutosize
                    placeholder="Description about Menu Category"
                    style={{ width: "97%", paddingTop: '5px'}}
                    
                />
            </Grid>

            <Grid item xs={12}>
                    <Button variant="contained" sx={{color:'#FFFFFF',backgroundColor:"#3E3E3E", '&:hover': {
                        backgroundColor: Colours.darkgray,
                    }}}>
                    Browse
                    </Button>
            </Grid>
    </Grid>
  )
}

export default AddFoodMenuCat