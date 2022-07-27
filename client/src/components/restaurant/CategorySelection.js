import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Colours } from '../../assets/theme/theme';
import styled from '@emotion/styled';

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


const CategorySelection = (props) => {

    const [currency, setCurrency] = React.useState('category');

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    return (
        <Box>
            <InputArea
                id="outlined-select-currency"
                select
                label="Category"
                value={currency}
                onChange={handleChange}
                helperText="Add the food Category"
            >
                {props.category.map((option) => (
                    <MenuItem key={option.value} value={option.value} name={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </InputArea>
        </Box>
    )
}

export default CategorySelection
