import React, { useState } from 'react';
import { useEffect } from 'react';

import { Box, Container, Paper, ThemeProvider, Typography } from '@mui/material';


function RangeChart() {
  return (
    <Box sx={{backgroundColor: "#171717", borderRadius:"5px", height:"100%"}}>
        
        <Box>
            <Typography variant="h6" component="h2" textAlign="center" color="#fff" p="5%">
                    Nutritions Range
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

    </Box>
  )
}

export default RangeChart