import React from 'react';
import { Box, Typography, Button, ThemeProvider, Stack } from '@mui/material';

import LoginBanner from '../components/login/LoginBanner';
import HorizontalBar from '../components/HorizontalBar';
import LoginNavbar from '../components/login/LoginNavbar';
import '../assets/css/Login.css';
import theme, { Colours } from '../assets/theme/theme';
import Skeleton from '@mui/material/Skeleton';
import Reveal from 'react-reveal/Reveal';
import Zoom from '@mui/material/Zoom'; //Zoom text
import Flip from 'react-reveal/Flip';
import Slide from 'react-reveal/Slide';
import { Paper} from '@mui/material';






function Login() {
  return (
    <Box className='Login-body-Style' >
       <LoginNavbar/>



       <Box maxWidth='100%' sx={{
        padding: '0',
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
      }}>
        {/* ------------------Login Part------------------------------- */}

        {/* Box 1 for Login */}
       <LoginBanner/>
        {/* Box 1 */}




        {/* Box 2 */}
        <Box sx={{
         
          height: 'auto',
          width:'100%',
          justifyContent: 'left',

          [theme.breakpoints.down('sm')]: {
            fontSize: '8px',
            padding: '2px',
            width: '100%',
          }
        }}>
         
           
              <Zoom in={true}>
                  
                  <Typography color="#95CD41" fontWeight="400" variant="h2" fontSize="500%" fontFamily={'Poppins'}
                    sx= {{
                      marginTop: '20%',
                      marginLeft:'14%',
                     
                      [theme.breakpoints.down('md')]: {
                      fontSize: '350%',
                      
                    },
                    [theme.breakpoints.down('sm')]: {
                      fontSize: '230%'
                    }
                  }}
                  >
                    <Slide right>
                    Eat Healthily With
                    </Slide>
                    
                    <Slide left>
                   
                    Your  Prefer
                  
                    </Slide>
                   </Typography>
                  
            </Zoom>
            <Typography>
                   <Skeleton 
                      sx={{ backgroundColor:Colours.transparenceGrey, marginLeft:'55%'}}
                      variant="circular" width={140} height={140}/>
                  </Typography>
          
        
        </Box>
        {/* Box 2 */}

      </Box>    
        
      
    </Box>
  )
}

export default Login