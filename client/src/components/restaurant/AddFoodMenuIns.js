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

function AddFoodMenuIns() {

    // --------to add category section--------
    const [components, addComponents] = useState(["Category1"]); //use to render when new component added to page

    function addSection() {
        addComponents([...components, <AddFoodMenuCat />])
    }
    // ---------------------------------------

    return (

        <Box scroll='paper' sx={{
            margin:"auto",
            height:"57vh",
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
                        color: Colours.primary,
                        textAlign: "center",
                    }}>
                        Add Menu Categories and Description
                </Typography>

                    {/* button */}
                <IconButton onClick={addSection} sx={{width:"2.2rem"}}>
                    <AddIcon sx={{ color: Colours.green, textAlign:"right" }} />
                </IconButton>

                {components.map((item, i) => (
                        <AddFoodMenuCat
                            category={category}
                            item={item}
                            name={item.value}
                            foods = {foods}
                        />
                ))}

                
                <Grid item container  ml="87%" mt="1%">

                    <Button variant="contained" sx={{color:'#000',backgroundColor:"#EFEAEA", '&:hover': {
                        backgroundColor: Colours.formWhite,
                    }}}>
                    Next
                    </Button>

                </Grid>


          </Box>
    
              
    
        </Box>
    
                
        </Box>
      )
}

export default AddFoodMenuIns