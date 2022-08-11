import React,{useState} from 'react';
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

//import {useForm} from 'react-hook-form';


const theme1 = createTheme();

const initialState = {username:"555",password:"98665"}

export default function SignIn() {

  const [formData, setFormData] = useState(initialState);


  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log({
      username: data.get('username'),
      password: data.get('password'),
    });
    setFormData(initialState);

  };

  const handleChange = (e)=>{
    setFormData({...formData, [e.target.name]: e.target.value });
  }

  return (
    <ThemeProvider theme={theme1}>
      

      <Container component="main" maxWidth="xs"
        sx={{
          marginLeft: '6%',
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
            background: '',
            backgroundColor: Colours.transparenceGrey,
            backdropFilter: "blur(30px)",
            borderRadius: "33px"

          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main', background: Colours.avatarWhite }}>
          </Avatar>
          <Typography component="h1" variant="h5" style={{ color: Colours.grayWhite }}>
            Sign in
          </Typography>
          
          <form onSubmit={handleSubmit} sx={{ mt: 1 }}>

            <TextField
               handleChange = {handleChange}
              sx={{
                input:
                  { color: Colours.formWhite },
                "label": { color: Colours.formWhite },
                "& label.Mui-focused": {
                  color: Colours.formWhite
                }

              }}

              margin="normal"
              required
              fullWidth
              label="Username"
              autoComplete='name'
            />

            <TextField
              handleChange = {handleChange}
              sx={{
                input:
                  { color: Colours.formWhite },
                "label": { color: Colours.formWhite },
                "& label.Mui-focused": {
                  color: Colours.formWhite
                },
                borderColor: Colours.formWhite,
              }}
              margin="normal"
              required
              fullWidth
              label="Password"
              name='password' 
              autoComplete='amer'
             
            />


            <FormControlLabel
              style={{ color: Colours.formWhite }}
              control={<Checkbox value="remember" sx={{ color: Colours.formWhite }} />}
              label="Remember me"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3, mb: 2,
                background: Colours.green,
                '&:hover': {
                  background: Colours.yellow,
                },
                color: Colours.dark,
                fontSize: '20px',
                marginTop: '7%',
              }}
            >
              Sign In
            </Button>

            <Link href="#" variant="body2" marginLeft="60%" marginBottom="10%">
              Forgot password?
            </Link>

            <Typography
              sx={{
                color: Colours.formWhite,
                fontSize: { lg: '15px', xs: '10px' },
                paddingLeft: '34%',
                marginTop: '5%',
                marginBottom: '5%'
              }}>
              ---Or Login with---
            </Typography>

            <Grid container xs >
              <Grid item xs marginLeft="37%">
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

          </form>


        </Box>

         
    
        

        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>

    </ThemeProvider >
  );
}