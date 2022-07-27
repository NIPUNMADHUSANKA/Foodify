import React, { useState } from 'react';
import { useEffect } from 'react';
import { Box,TextareaAutosize,Button, Stack } from '@mui/material';
import {Container, Paper, ThemeProvider, Typography } from '@mui/material';

import EditIcon from '@mui/icons-material/Edit';


function RangeChart() {
  return (
    <Box sx={{backgroundColor: "#171717", borderRadius:"10px", height:"100%", p:"6%"}}>
        
        <Box>
            <Typography variant="h6" component="h2" textAlign="center" color="#fff" p="5%">
                    Nutritions Range
                    <EditIcon sx={{ml:"5%", mt:"2%"}} />
            </Typography>
        </Box>

        <Box>

            <Box display="flex" flexdirection="row">
                <Typography  textAlign="left" color="#fff" ml="5%" mt="5%">
                Calories
                </Typography>
                <Typography  textAlign="right" color="#fff" ml="5%" mt="5%">
                        20g - 200g
                </Typography>
            </Box>

            <Box display="flex" flexdirection="row">
                <Typography  textAlign="left" color="#fff" ml="5%" mt="5%">
                Sodium
                </Typography>
                <Typography  textAlign="right" color="#fff" ml="5%" mt="5%">
                        20g - 200g
                </Typography>
            </Box>

            <Box display="flex" flexdirection="row">
                <Typography  textAlign="left" color="#fff" ml="5%" mt="5%">
                Carbh
                </Typography>
                <Typography  textAlign="right" color="#fff" ml="5%" mt="5%">
                        20g - 200g
                </Typography>
            </Box>

            <Box display="flex" flexdirection="row">
                <Typography  textAlign="left" color="#fff" ml="5%" mt="5%">
                Suger
                </Typography>
                <Typography  textAlign="right" color="#fff" ml="5%" mt="5%">
                        20g - 200g
                </Typography>
            </Box>
            
            <Box display="flex" flexdirection="row">
                <Typography  textAlign="left" color="#fff" ml="5%" mt="5%">
                Fat
                </Typography>
                <Typography  textAlign="right" color="#fff" ml="5%" mt="5%">
                        20g - 200g
                </Typography>
            </Box>
            

            <Box display="flex" flexdirection="row">
                <Typography  textAlign="left" color="#fff" ml="5%" mt="5%">
                Cholestrol
                </Typography>
                <Typography  textAlign="right" color="#fff" ml="5%" mt="5%">
                        20g - 200g
                </Typography>
            </Box>
            


        </Box>

        <Box mt="8%" marginLeft="5%"  display="flex" flexDirextion="row" >

              <Button variant="outlined" style={{marginRight:"5%", color:'#95CD41',borderColor: "#95CD41"
              ,"&:hover": {
              backgroundColor: "#15e577",
              borderColor:"#564345"
              } }}>
              Confirm
              </Button>

              <Button variant="outlined" style={{color:'#FAC213', borderColor: "#FAC213",
              "&:hover": {
              backgroundColor: "#15e577",
              borderColor:"#564345"
              } }}>
              Reset
             </Button>

        </Box>

    </Box>
  )
}

export default RangeChart