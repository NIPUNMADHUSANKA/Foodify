import React from 'react'
import { Link } from 'react-router-dom';
import { Box, Container, Rating, Stack, ThemeProvider, Typography } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import '../../assets/css/App.css';
import ArrowIcon from '@mui/icons-material/ArrowForward';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';

import Logo from '../../assets/images/restaurant-logo.jpg';
import Cover from '../../assets/images/indian-food-served-on-table.jpg';
import theme, { Colours } from '../../assets/theme/theme';//to use theme provider,need to import this
import { BannerContainer, BannerContainer2, BannerContent, BannerContent2, BannerImage, BannerLogo, BannerTitle, BannerTitle2 } from '../../assets/theme/RBanner';
import { useTheme } from '@emotion/react';

const RestaurantBanner = () => {


  return (
    <ThemeProvider theme={theme}>

      {/* banner container */}
      <BannerContainer>

        {/* upper part of the banner */}
        <BannerContent src={Cover}>

          <Box sx={{ marginTop: '20%' }}>
            
            <Button href='#' endIcon={<ArrowIcon fontSize="medium" sx={{
              [theme.breakpoints.down('sm')]: {
                fontSize: '8px',
              },
            }} />} variant="contained" sx={{
              margin: '6px',
              background: Colours.yellow, '&:hover': {
                backgroundColor: Colours.green,
              },
              color: Colours.dark,
              fontSize: '20px',
              hover: Colours.green,
              [theme.breakpoints.down('sm')]: {
                fontSize: '8px',
                padding: '2px',
              },
            }}>
              Order
            </Button>
            <Button href='#' endIcon={<RestaurantMenuIcon fontSize="medium" sx={{
              [theme.breakpoints.down('sm')]: {
                fontSize: '8px',
              },
            }} />} variant="contained" sx={{
              margin: '6px',
              background: Colours.darkgray, '&:hover': {
                backgroundColor: Colours.grayWhite, color: Colours.dark,
              },
              color: Colours.grayWhite,
              fontSize: '20px',
              [theme.breakpoints.down('sm')]: {
                fontSize: '8px',
                padding: '2px',
              },
            }}>
              Menu
            </Button>
          </Box>

        </BannerContent>
        {/* end of upper part of the banner */}

        {/* lower part of the banner */}
        <BannerContainer2>
          <BannerLogo src={Logo} />
          <BannerContent2>
            <BannerTitle>
              Reastaurant Name
            </BannerTitle>

            <BannerTitle2>
              Rating

            </BannerTitle2>
            <Rating name="rating" value='4.5' precision={0.5} size="small" readOnly sx={{
              [theme.breakpoints.down('sm')]: {
                fontSize: '8px',
              },
            }} />

          </BannerContent2>

        </BannerContainer2>
        {/* end of the lower part of the banner */}

      </BannerContainer>
      {/* end of the banner container */}

    </ThemeProvider >
  )
}

export default RestaurantBanner
