import image from '../../assets/images/foodimages/indian-food-served-on-table.jpg'

import React from 'react'
import {ThemeProvider,Stack, Typography, Button, Badge, styled} from '@mui/material';
import theme, { Colours } from '../../assets/theme/theme';
import { Box } from '@mui/system';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// import LatestIcon from '../assets/images/latest_food.png';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 25,
    top: 140,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

function FoodCard() {
  return (
    <ThemeProvider theme={theme}>
    <Stack
        type="button"
        alignItems="center"
        justifyContent="center"
        className="food-card"
        sx={{ 
          backgroundColor:Colours.transparenceGrey,
          backdropFilter: "blur(30px)",
          borderRadius:"33px" ,
          color:Colours.white, 
          borderRadius: '10px', 
          maxWidth: '260px', 
          height: '320px', 
          cursor: 'pointer', 
          display:"Flex",
          justifyContent: "space-between",
          paddingBottom: '5%',
           }}
    >
        <StyledBadge color="secondary" badgeContent={4.9}>
          <img src={image} alt="food" style={{width:'252px', height:'150px',border: "5px solid #fff"}}/>
        </StyledBadge>
        <Typography fontSize="24px" fontWeight="400" mt="-45px">Mini Veg Salad</Typography>
        <Typography textAlign="center" mt="-45px" mb="-30px" fontWeight="200" fontSize="15px">
                 Rs.1000.00
        </Typography>

        <Typography textAlign="center" mt="-25px" mb="-30px" fontWeight="200">
                 Restaurant Name
        </Typography>

        <Box
          sx={{
            display: 'flex',
            columnGap:"10px"
        }}>
          <Button variant='contained' 
          style={{
            borderRadius: 10,
            backgroundColor: "#95CD41",
            fontSize: "15px",
            color:"#272727",
            width:"120",
          }}
          >
          Order Now
          </Button>
          <Button variant='contained' 
          style={{
              borderRadius: 10,
              backgroundColor: "#95CD41",
              fontSize: "15px",
              color:"#272727",
              width:"120",
              padding:"0px 15px"
          }}
          >
          View 
          <ArrowForwardIosIcon fontSize='8px' sx={{marginLeft:"2px"}}/>
          </Button>
        </Box>

    </Stack>
    </ThemeProvider>
  )
}

export default FoodCard