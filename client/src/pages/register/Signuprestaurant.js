import React from 'react'
import { Box, Typography } from '@mui/material';
import RegisterBannerRestaurant from '../../components/Register/RegisterBannerRestaurant';
import RegisterNavbar from '../../components/Register/RegisterNavbar';
import '../../assets/css/Registerrestaurant.css';
import theme, { Colours } from '../../assets/theme/theme';
import Skeleton from '@mui/material/Skeleton';
import Zoom from '@mui/material/Zoom'; //Zoom text
import Slide from 'react-reveal/Slide';
import { ThemeProvider } from '@mui/material/styles';

const Signuprestaurant = () => {
  return (
    <ThemeProvider theme={theme}>
    <Box className='Registerres-body-Style' >
        <RegisterNavbar />


        <Box maxWidth='100%' sx={{
        padding: '0',
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
      }}>
        {/* ------------------Register Part------------------------------- */}

        {/* Box 1 for Register */}
        <RegisterBannerRestaurant />
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
                 
                 <Typography color="#95CD41" fontWeight="400" variant="h2" fontSize="500%"
                   sx= {{
                     marginTop: '20%',
                     marginLeft:'14%',
                    
                     [theme.breakpoints.down('md')]: {
                     fontSize: '200%',
                     
                   },
                   [theme.breakpoints.down('sm')]: {
                     fontSize: '230%'
                   }
                 }}
                 >
                   <Slide right>
                   Restaurant
                   </Slide>
                   
                   <Slide left>
                  
                   Registration
                 
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
   </ThemeProvider>
 )
}

export default Signuprestaurant