import React from 'react';
import theme, { Colours } from '../../assets/theme/theme'; //to use theme provider,need to import this
import { Box, ThemeProvider, Typography } from '@mui/material';

import '../../assets/css/App.css';

// -----------------importing comment box-----------
import CommentBox from './CommentBox';
import List from '@mui/material/List';


// -------using props to put random images using props------------------------
const RestaurantCemments = (props) => {
  return (

    // About us main box-----------------------------------------------


    <ThemeProvider theme={theme}>

      <Box maxWidth='100%' sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        background: Colours.gray2,
        marginTop: '1rem',
        padding: '0rem',
        hieght: '5vh',
        [theme.breakpoints.down('sm')]: {
          fontSize: '10px',
          padding: '2px',
          flexDirection: 'column',
          justifyContent: 'center',
          justifyItems: 'center',
        }
      }}>
        {/* -------------------topic-------------------------------------------- */}
        <Typography variant="h4" gutterBottom component="div" sx={{
          color: Colours.green,
          justifyContent: 'center',
          textAlign: 'center',
          fontSize: '2rem',
          [theme.breakpoints.down('sm')]: {
            fontSize: '16px',
          }
        }}>
          Comments
        </Typography>
        {/* -------------------topic-------------------------------------------- */}

        {/* -----------------beginin of the comments----------------- */}
        <List
          sx={{
            width: '100%',
            maxWidth: '95%',
            margin: 'auto',
            marginBottom:'1rem',
            marginTop:'1rem',
            bgcolor: Colours.gray1,
            position: 'relative',
            overflow: 'auto',
            maxHeight: '40vh',
            borderRadius:'1rem',
            color:Colours.grayWhite,
            '& ul': { padding: 0 },
          }}>
            <li>
              <ul>
              <CommentBox comments={props.comments} sx={{ margin: 'auto', padding: 0 }} />
              <CommentBox comments={props.comments} sx={{ margin: 'auto', padding: 0 }} />
              <CommentBox comments={props.comments} sx={{ margin: 'auto', padding: 0 }} />
              <CommentBox comments={props.comments} sx={{ margin: 'auto', padding: 0 }} />
              <CommentBox comments={props.comments} sx={{ margin: 'auto', padding: 0 }} />
              <CommentBox comments={props.comments} sx={{ margin: 'auto', padding: 0 }} />
              <CommentBox comments={props.comments} sx={{ margin: 'auto', padding: 0 }} />
              </ul>
            </li>
        </List>
        {/* -----------------beginin of the comments----------------- */}

      </Box>

    </ThemeProvider >

  )
}

export default RestaurantCemments
