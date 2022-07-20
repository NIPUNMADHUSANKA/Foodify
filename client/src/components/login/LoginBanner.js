import React from 'react'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Facebook from '../../assets/images/facebook.png';
import Google from '../../assets/images/google.png';
import FormControlLabel from '@mui/material/FormControlLabel';
import BigImage from '../../assets/images/login_big_image.png';
import FourImage from '../../assets/images/login_four_images.png';
import RoundImage from '../../assets/images/round.png';
import Checkbox from '@mui/icons-material/CheckBoxOutlineBlank';
import { Box } from '@mui/material';


const LoginMain=()=>{const paperStyle={padding :40,height:'70vh',width:380, margin:"-200px 50PX 100px 100px", backgroundColor:'rgba(107, 107, 107, 0.2)',backdropFilter: "blur(30px)",borderRadius:"33px" }
    const avatarStyle={background:' #6B6B6B33'}

    const btnstyle={margin:'8px 0'}
    return(

 
            <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}></Avatar>
                    <h2>Sign In</h2>
                   
                </Grid>
                <TextField label='Username' placeholder='Enter username' fullWidth required/>
                <TextField style={{ marginTop: 16 }}label='Password' placeholder='Enter password' type='password' fullWidth required/>
                <FormControlLabel style={{ marginTop: 16 }}
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                <Button  type='submit' color='primary' variant="contained" style={{btnstyle,marginTop: 16}} fullWidth>Sign in</Button>
                <Typography style={{ marginTop: 16 }} >
                     <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography style={{ marginTop: 16 }}> Do you have an account ?
                     <Link href="#" >
                        Sign Up 
                </Link>
                </Typography>
                <Typography style={{ marginTop: 16 }} >
                <img src={Facebook} alt="Logo" />
                <img src={Google} alt="Logo" />
                </Typography>
            </Paper>
            <img  src={RoundImage} alt="big-image" className="round-image" />
             <img  src={BigImage} alt="big-image" className="big-image" />
            <img src={FourImage} alt="four-image" className="four-image" />  
            </Box>
        
       
    )
}

export default LoginMain