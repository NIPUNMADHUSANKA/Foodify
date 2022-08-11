import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import theme, { Colours } from '../../assets/theme/theme';
import Facebook from '../../assets/images/facebook.png';
import Google from '../../assets/images/google.png';
import Skeleton from '@mui/material/Skeleton';
// import BiggerImage from '../../assets/images/register_big_image.png';



const theme1 = createTheme();

const RegisterBannerUser = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
        <Box 
      sx={{mt:{lg:'90px', xs:'10px'},ml:{sm:'40px'}}}
                    position="absolute" p="20px" >
                    <Skeleton 
                      sx={{ backgroundColor:Colours.transparenceGrey }}
                      variant="circular" width={140} height={140}/>
       </Box>
      <Container component="main" maxWidth="xs" 
      sx={{
        marginLeft:'6%',
        [theme.breakpoints.down('sm')]: {
          marginLeft: '3.6%',
        },
        }}>
        {/* <CssBaseline /> */}
        <Box
          sx={{
            padding: "5%",
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background:'',
            backgroundColor:Colours.transparenceGrey,
            backdropFilter: "blur(30px)",
            borderRadius:"33px" 
           
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main',background:Colours.avatarWhite }}>
            </Avatar> */}
          <Typography component="h1" variant="h5" style={{color:Colours.grayWhite}}>
            Sign Up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
                    sx={{ input: 
                    { color: "#fff" }, marginTop: 2,
                    "label": {color: "#fff"},
                    "& label.Mui-focused": {
                    color:"#fff"
                    }
                
                }}    
                  autoComplete="given-name"
                  name="username"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  autoFocus
                />
                <TextField
                    sx={{ input: 
                        { color: "#fff" }, marginTop: 2,
                        "label": {color: "#fff"},
                        "& label.Mui-focused": {
                        color:"#fff"
                        }
                    
                    }} 
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
                <TextField
                    sx={{ input: 
                        { color: "#fff" }, marginTop: 2,
                        "label": {color: "#fff"},
                        "& label.Mui-focused": {
                        color:"#fff"
                        }
                    
                    }} 
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
                <TextField
                    sx={{ input: 
                        { color: "#fff" }, marginTop: 2, marginBottom: 2,
                        "label": {color: "#fff"},
                        "& label.Mui-focused": {
                        color:"#fff"
                        }
                    
                    }} 
                  required
                  fullWidth
                  name="password"
                  label="Confirm Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
                <FormControlLabel
                  style={{color:Colours.grayWhite}}
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label={<label>I accept the <Link href='/'>Terms of Conditions.</Link></label>}
                />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 ,
                background: Colours.green,
                 '&:hover': {
               backgroundColor: Colours.yellow,
                },
               color: Colours.dark,
               fontSize: '20px',
               marginTop:'5%',
               hover: Colours.green }}
               >
              Sign Up
            </Button>
            <Typography  
            sx={{
              color:'white', 
              fontSize:{lg:'15px', xs:'10px'},
              textAlign:"center",
              marginTop:'5%',
              marginBottom:'5%'
              }}>
            ---Or Signup with---
            </Typography>
            
            <Grid container xs >
              <Grid item xs  marginLeft="35%">
                <Link href="#" variant="body2">
                <img src={Facebook} alt="Logo" className='social-icons-fb' />
                </Link>
              </Grid>
              <Grid item xs marginRight="35%">
                <Link href="#" variant="body2">
                <img src={Google} alt="Logo" className='social-icons-gg' />
                </Link>
              </Grid>
            </Grid>
            <Typography
            sx={{
              color:'white', 
              fontSize:{lg:'15px', xs:'10px'},
              textAlign:"center",
              marginTop:'5%',
              marginBottom:'5%'
              }}>
                Already have an account? &nbsp;
                                    <Link href="#" >
                                        Sign In 
                                </Link>
                                </Typography>
          </Box>
          {/* <Box 
          sx={{mt:{lg:'90px', xs:'10px'},ml:{sm:'40px'}}}
                    position="absolute" p="20px" >
                    <Skeleton 
                      sx={{ backgroundColor:Colours.transparenceGrey,marginLeft:'100%', marginTop:'80%'}}
                      variant="circular" width={140} height={140}/>
       </Box> */}
        </Box>
        {/* <Grid container item xs={6} direction="column" padding="40" margin="20 auto" >
                    <Skeleton variant="circular" width={140} height={140} style={{margin:"0%"}} />
                    <Skeleton variant="circular" width={140} height={140} style={{margin:"20%"}} />
                    <img  src={BiggerImage} alt="big-image" className="bigger-image" />

    </Grid> */}
      </Container>
    </ThemeProvider>
  );
}

export default RegisterBannerUser