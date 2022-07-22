import React from 'react'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Facebook from '../../assets/images/facebook.png';
import Google from '../../assets/images/google.png';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/icons-material/CheckBoxOutlineBlank';
import Skeleton from '@mui/material/Skeleton';
import { Box, Paper, Typography } from '@mui/material';
import theme, { Colours } from '../../assets/theme/theme';
import '../../assets/css/Login.css';


const LoginMain=()=>{
        return(

        
                <Grid container item xs={6} direction="column"  >
                    <Box sx={{mt:{lg:'90px', xs:'10px'},ml:{sm:'40px'}}}
                    position="absolute" p="20px" >
                    <Skeleton variant="circular" width={140} height={140} />
                    </Box>

                   {/* Form */}
                                <Paper sx={{
                                   padding: "5%",height:'70vh',width:380 ,
                                   margin:"6% auto" ,
                                   backgroundColor:Colours.transparenceGrey,
                                   backdropFilter: "blur(30px)",
                                   borderRadius:"33px" ,
                                   color:Colours.grayWhite, 
                                   [theme.breakpoints.down('sm')]: {
                                    
                                    marginLeft: '50px',
                                    },
                                        }}>
                                <Grid align='center'>
                                    <Avatar sx={{background:Colours.avatarWhite}}></Avatar>
                                    <h2 style={{color:Colours.formWhite,fontSize:24}}>Sign In</h2>   
                                </Grid>

                                <TextField
                                sx={{ input: 
                                    { color: "#fff" }, 
                                    "label": {color: "#fff"},
                                     "& label.Mui-focused": {
                                    color:"#fff"
                                    }
                                 
                                }}
                              
                                label='Username' placeholder='Enter username' fullWidth required/>

                                <TextField
                                 sx={{ input: { color: "#fff" },
                                  "label": {color: "#fff"},
                                  "& label.Mui-focused": {
                                    color:"#fff"
                                  }}}
                                
                                style={{ marginTop: 16 }}label='Password' placeholder='Enter password' type='password' fullWidth required/>

                                <Typography style={{ marginTop: 16,marginLeft:240,color:Colours.formWhite}} >
                                    <Link href="#"  >
                                        Forgot password ?
                                </Link>
                                </Typography>

                                <FormControlLabel style={{ marginTop: 16,marginLeft:0 }}
                                    control={
                                    <Checkbox
                                        name="checkedB"
                                        color="Colours.formWhite"
                                    />
                                    }
                                   
                                    label="Remember me"
                                />

                                <Typography>
                                <Button href='#'  variant="contained" sx={{
                                background: Colours.green, '&:hover': {
                                    backgroundColor: Colours.yellow,
                                },
                                color: Colours.dark,
                                fontSize: '20px',
                                marginLeft: '32%',
                                marginTop:'7%',
                                hover: Colours.green,
                                }}>
                                Sign In
                                </Button>

                                </Typography>
                            

                                <Typography style={{ marginTop: 16,color:'Colours.formWhite' }}> Do you have an account ?
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

       
     
        
       
    )
}

export default LoginMain