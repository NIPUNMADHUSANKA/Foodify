import React from 'react'
import { Typography } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import { useState, useEffect } from "react";

const ToggleB = styled('div')(({ theme }) => ({
    display: 'flex', 
    flexDirection: 'row', 
    alignItems: 'center',
    borderRadius: '15px',
    padding:'0',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
}));



function Nearme(){
    const [Color, setColor] = React.useState('#fff');
    
    
        
    
    
    function handleLocation(){
        // console.log(Color)
        if (Color == "#fff"){
        setColor('#95CD41')
        }else{
        setColor('#fff')
        }

        const success = (position) => {
            console.log(position)
            // const latitude = position.coords.latitude;
            // const longitude = position.coords.longitude;
            const latitude = 6.902274;
            const longitude = 79.861185;
            console.log(latitude + ' ' + longitude)

            const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`

            fetch(geoApiUrl)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })

            

            
        }

       
        navigator.geolocation.getCurrentPosition(success);
      


    }
    return(
        <ToggleB>
            <ToggleButton
                value="#95CD41"
                Color={Color}
                onChange={() => {
                    handleLocation()
                }}
                sx={{padding: '7px 10px 7px 14px' }}>
                
                <Typography color="#EFEAEA" fontWeight="300" fontSize="18px" fontFamily='Poppins' textTransform= 'none'>
                    Near Me 
                </Typography>
                
                <Brightness1Icon style={{ color:Color, paddingLeft:'6px'}}/> 
            
            </ToggleButton>
        </ToggleB>  
    );
}

export default Nearme;
