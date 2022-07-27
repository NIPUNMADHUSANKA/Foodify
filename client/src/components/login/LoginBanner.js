import * as React from 'react';
import Avatar from '@mui/material/Avatar';
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


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme1 = createTheme();

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme1}>
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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main',background:Colours.avatarWhite }}>
            </Avatar>
          <Typography component="h1" variant="h5" style={{color:Colours.grayWhite}}>
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
                sx={{ input: 
                  { color: Colours.formWhite }, 
                  "label": {color: Colours.formWhite},
                  "& label.Mui-focused": {
                  color:Colours.formWhite
                  }
              
              }}
        
              margin="normal"
              required
              fullWidth
              id="name"
              label="Username"
              name="name"
              autoComplete="name"
              autoFocus
            />
            <TextField
               sx={{ input: 
                { color: Colours.formWhite }, 
                "label": {color: Colours.formWhite},
                "& label.Mui-focused": {
                color:Colours.formWhite
                }
            
            }}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              style={{color:Colours.grayWhite}}
              control={<Checkbox  value="remember" color="primary" />}
              label="Remember me"
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
                marginTop:'7%',
                hover: Colours.green }}
                >
              Sign In
            </Button>
        
            <Link href="#" variant="body2" marginLeft="60%" marginBottom="10%">
                  Forgot password?
            </Link>

            <Typography  
            sx={{
              color:'Colours.transparenceGrey', 
              fontSize:{lg:'15px', xs:'10px'},
              paddingLeft:'34%',
              marginTop:'5%',
              marginBottom:'5%'
              }}>
            ---Or Login with---
            </Typography>
              
            <Grid container xs >
              <Grid item xs  marginLeft="40%">
                <Link href="#" variant="body2">
                <img src={Facebook} alt="Logo" className='social-icons-fb' />
                </Link>
              </Grid>
              <Grid item xs marginRight="37%">
                <Link href="#" variant="body2">
                <img src={Google} alt="Logo" className='social-icons-gg' />
                </Link>
              </Grid>
            </Grid>

            

          </Box>
          <Box 
          sx={{mt:{lg:'90px', xs:'10px'},ml:{sm:'40px'}}}
                    position="absolute" p="20px" >
                    <Skeleton 
                      sx={{ backgroundColor:Colours.transparenceGrey,marginLeft:'100%', marginTop:'80%'}}
                      variant="circular" width={140} height={140}/>
       </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
     
    </ThemeProvider>
  );
}