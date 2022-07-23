// horizantal scrollbar

import React, { useContext } from 'react'
import { Box, IconButton, Typography } from '@mui/material';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

import CarouselCard from './CarouselCard';
import theme, { Colours } from '../../assets/theme/theme';

// ---for arrow icons---
import LeftArrow1 from '@mui/icons-material/NavigateBefore';
import RightArrow1 from '@mui/icons-material/NavigateNext';

// const carousel = ({ data })
// eslint-disable-next-line no-lone-blocks
{/* <div>
      {data.map((item) => (

        <Box
          key = {item.id || item}
        >
          
        </Box>
      )
      )}
    </div> */}

// -----------------arrows for the carousel------------

// ----------left arrow--------
const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <IconButton aria-label="left" sx={{ color:Colours.green}}
      onClick={() => scrollPrev()}
    >
      <LeftArrow1 />
    </IconButton>
  );
}

// ----------Right arrow--------
const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <IconButton aria-label="right"
      onClick={() => scrollNext()} sx={{ color:Colours.green,}}
    >
      <RightArrow1 />
    </IconButton>
  );
}


const carousel = (props) => {
  return (
    <div sx={{padding:0,}}>
      {/*------------------------- carousel area--------------------- */}
      <Box sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        marginTop:'2%',
        padding:0,
        background:Colours.secondary,
        backgroundImage: `url(${props.bimage})`,
      }}>
        {/* ---------title area------------ */}
        <Box sx={{
          width: '100%',
        }}>
          <Typography variant="h4" gutterBottom component="div" sx={{
            width: '100%',
            textAlign: 'center',
            color: Colours.green,
            [theme.breakpoints.down('sm')]: {
              fontSize: '20px',
              padding: '2px',
            },
          }}>
            {props.title}
          </Typography>
        </Box>
        {/* ---------end of title area------------ */}


        {/* ---------------carousel area-------------------------- */}
        <ScrollMenu wheel={true} alignCenter={true} transition={0.4} LeftArrow = {LeftArrow} RightArrow = {RightArrow} sx={{
          margin:1,
          padding:'1rem',
        }}>
          {/* <Box> */}
          <CarouselCard item={props.item} />
          <CarouselCard item={props.item} />
          <CarouselCard item={props.item} />
          <CarouselCard item={props.item} />
          <CarouselCard item={props.item} />
          <CarouselCard item={props.item} />
          
          {/* </Box> */}
        </ScrollMenu>
        {/* ---------------end of carousel area-------------------------- */}

      </Box>
    </div>
  )
}

export default carousel
