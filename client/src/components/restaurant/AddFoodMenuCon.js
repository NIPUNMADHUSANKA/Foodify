import React, { useState } from 'react';
import { Box,TextareaAutosize,Button, Stack } from '@mui/material';
import Grid from '@mui/material/Grid';
import {IconButton, TextField, Typography } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { color } from '@mui/system';
import theme, { Colours } from '../../assets/theme/theme';//to use theme provider,need to import this

import AddIcon from '@mui/icons-material/Add';

import Avatar from '@mui/material/Avatar';

import AddFoodMenuCat from './AddFoodMenuCat';

import PAGE1 from '../../assets/icons/page01.png'
import PAGE2 from '../../assets/icons/page02.png'

import AddFoodMenuItem from './AddFoodMenuItem';

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

function AddFoodMenuCon() {

    // --------to add category section--------
    const [components, addComponents] = useState(["Category1"]); //use to render when new component added to page

    function addSection() {
        addComponents([...components, <AddFoodMenuCat />])
    }
    // ---------------------------------------

    return (

        <Box scroll='paper' sx={{
            margin:"auto",
            height:"60vh",
            width:"53%",
            padding:"auto",
            overflow: "scroll"
           }}>
             
        <Box component="form" color="#fff" bgcolor="#171717" opacity="50" sx= {{display: "flex",flexDirection: "column",borderRadius: '20px',p:"3%", '& .MuiTextField-root': { m: 1, width: '96%' }, width:{lg:"45vw",xs:"55vw"} }} >
        
          <Typography variant="h4" gutterBottom sx= {{fontSize:{lg:"230%",xs:"180%"} }} >
               Add Foods Menu
          </Typography>
    
          <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "95%",
                    margin: "auto",
                    justifyContent:"center",
                }}>

                <Typography variant='body' sx={{
                        color: Colours.formWhite,
                        textAlign: "center",
                    }}>
                       BreakFast
                </Typography>

                    {/* button */}
                <IconButton onClick={addSection} sx={{width:"2.2rem"}}>
                    <AddIcon sx={{ color: Colours.green, textAlign:"right" }} />
                </IconButton>

                {components.map((item, i) => (
                        <AddFoodMenuItem
                            category={category}
                            item={item}
                            name={item.value}
                            foods = {foods}
                        />
                ))}

                
                <Grid item container  ml="87%" mt="1%">

                    <Button variant="contained" sx={{color:'#000',backgroundColor:"#95CD41", '&:hover': {
                        backgroundColor: "#95CD41"
                    }}}>
                    Confirm
                    </Button>

                </Grid>


          </Box>
    
              
    
        </Box>
    
                
        </Box>
      )
}

export default AddFoodMenuCon