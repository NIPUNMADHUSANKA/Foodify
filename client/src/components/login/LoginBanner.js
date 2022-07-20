import React from 'react'
import Button from '@mui/material/Button';
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
import Skeleton from '@mui/material/Skeleton';
import { positions } from '@mui/system';
import { Box, Paper, Typography } from '@mui/material';


const LoginMain=()=>{
const paperStyle={padding :40,height:'70vh',width:380 ,margin:"6% auto" ,backgroundColor:'rgba(107, 107, 107, 0.2)',backdropFilter: "blur(30px)",borderRadius:"33px" }
const avatarStyle={background:' #6B6B6B33'}


    return(

        <Grid container spacing={0} >
                <Grid container item xs={6} direction="column" >
                    <Box sx={{mt:{lg:'90px', xs:'10px'},ml:{sm:'40px'}}}
                    position="absolute" p="20px">
                    <Skeleton variant="circular" width={140} height={140} />
                    </Box>

                   
                        <Paper elevation={10} style={paperStyle} >
                                <Grid align='center'>
                                    <Avatar style={avatarStyle}></Avatar>
                                    <h2 style={{color:"#FFFFFF",fontSize:24}}>Sign In</h2>   
                                </Grid>

                                <TextField style={{ color:'#FFFFFF' }} label='Username' placeholder='Enter username' fullWidth required/>

                                <TextField style={{ marginTop: 16 }}label='Password' placeholder='Enter password' type='password' fullWidth required/>

                                <Typography style={{ marginTop: 16,marginLeft:240}} >
                                    <Link href="#"  >
                                        Forgot password ?
                                </Link>
                                </Typography>

                                <FormControlLabel style={{ marginTop: 16,marginLeft:0 }}
                                    control={
                                    <Checkbox
                                        name="checkedB"
                                        color="primary"
                                    />
                                    }
                                   
                                    label="Remember me"
                                />

                                <Typography>
                                <Button  type='submit' variant="contained" style={{marginTop: 16,  borderRadius: 10,              backgroundColor: "#95CD41",fontSize: "18px",color:"#1B1B1E",width:120,marginLeft:120}}  sx={{ml:{lg:'15px', xs:'40px'}}} fullWidth>Sign In</Button>
                                </Typography>
                            

                                <Typography style={{ marginTop: 16,color:'#FFFFFF' }}> Do you have an account ?
                                    <Link href="#" >
                                        Sign Up 
                                </Link>
                                </Typography>

                                <Typography  margin="5% 0% 20% 37%" >
                                <img src={Facebook} alt="Logo" className='social-icons-fb' />
                                <img src={Google} alt="Logo" className='social-icons-gg' />
                                </Typography>

                        </Paper>
                
                        
        
        </Grid>


        <Grid container item xs={6} direction="column" padding="40" margin="20 auto" >
                        <Skeleton variant="circular" width={140} height={140} style={{margin:"0%"}} />
                        <Skeleton variant="circular" width={140} height={140} style={{margin:"20%"}} />
                        <img  src={RoundImage} alt="big-image" className="round-image" />
                        <img  src={BigImage} alt="big-image" className="big-image" />
                        <img src={FourImage} alt="four-image" className="four-image" /> 

        </Grid>
    </Grid>
     
        
       
    )
}

export default LoginMain