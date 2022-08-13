import React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Colours } from '../../assets/theme/theme';
import styled from '@emotion/styled';
import { Checkbox, FormControl, FormControlLabel, FormGroup, Grid, Typography } from '@mui/material';

// ---------------------------------text fied css style-----------------------
const InputArea = styled(TextField)({
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

const foods1 = [
    {
        id: "0",
        name: "Food1",
    },
    {
        id: "1",
        name: "Food2",
    },
    {
        id: "2",
        name: "Food3",
    },
    {
        id: "3",
        name: "Food4",
    },
    {
        id: "4",
        name: "Food5",
    },
    {
        id: "5",
        name: "Food6",
    }
];

const name = { Food1: "false", Food2: "false", Food3: "false", Food4: "false", Food5: "false", Food6: "false", }

const CategorySelection = (props) => {

    // ------------------------food array-------------------------------

    // ---------------for the check list-----------------------
    const [checked, setChecked] = React.useState([]);

    // Add/Remove checked item from list
    const checklisthandle = (event) => {
        var updatedList = [...checked];
        if (event.target.checked) {
            updatedList = [...checked, event.target.value];
        } else {
            updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
    };

    //   ---------------------------------

    const [category, setCurrency] = React.useState('category');

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    return (

        <FormControl>
            <InputArea
                id="outlined-select-currency"
                select
                name='category'
                label="Category"
                value={category}
                onChange={handleChange}
                helperText="Add the food Category"
            >
                {props.category.map((option) => (
                    <MenuItem key={option.value} value={option.value} name={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </InputArea>

            {/* ------------------to select food items------------------ */}
            <FormGroup>

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {foods1.map((item) => (
                        <Grid item xs={2} sm={4} md={4} key={item.id} sx={{
                            display:"flex",
                            flexDirection:"row",
                        }}>

                            <Checkbox 
                            id="begin date" 
                            type="checkbox" 
                            value={item.name}
                            name={item.name} 
                            variant="standard" 
                            onChange={checklisthandle}
                            />
                            <Typography variant='body' sx={{color:Colours.grayWhite,marginTop:"2%"}}>{item.name}</Typography>

                        </Grid>
                    ))}
                </Grid>

            </FormGroup>
            {/* ------------------end of selecting food items------------------ */}
        </FormControl>
    )
}

export default CategorySelection
