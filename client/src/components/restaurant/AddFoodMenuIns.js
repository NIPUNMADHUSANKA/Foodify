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

import {Link} from 'react-router-dom';


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

function AddFoodMenuIns() {

    // --------to add category section--------
    const [components, addComponents] = useState(["Vegie"]); //use to render when new component added to page

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
                Foods Menu Name
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
                    }}} component={Link} to = "/AddFoodMenuItem">
                    Confirm
                    </Button>

                </Grid>


          </Box>
    
              
    
        </Box>
    
                
        </Box>
      )
}

export default AddFoodMenuIns