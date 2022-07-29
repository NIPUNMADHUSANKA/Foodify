import React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Colours } from '../../assets/theme/theme';
import styled from '@emotion/styled';
import { Checkbox, FormControl, FormControlLabel, FormGroup } from '@mui/material';

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

    // ---------------for the check list-----------------------
    const [state, setState] = React.useState({
        gilad: true,
        jason: false,
        antoine: false,
      });
    
      const checklist = (event) => {
        setState({
          ...state,
          [event.target.name]: event.target.checked,
        });
      };
    
      const { gilad, jason, antoine } = state;

    //   ---------------------------------

    const [currency, setCurrency] = React.useState('category');

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

            {/* ------------------to select food items------------------ */}
            <FormGroup>
                <FormControlLabel
                    control={
                        <Checkbox checked={gilad} onChange={checklist} name="gilad" />
                    }
                    label="Gilad Gray"
                />
                <FormControlLabel
                    control={
                        <Checkbox checked={jason} onChange={checklist} name="jason" />
                    }
                    label="Jason Killian"
                />
                <FormControlLabel
                    control={
                        <Checkbox checked={antoine} onChange={checklist} name="antoine" />
                    }
                    label="Antoine Llorca"
                />
            </FormGroup>
            {/* ------------------end of selecting food items------------------ */}
        </FormControl>
    )
}

export default CategorySelection
