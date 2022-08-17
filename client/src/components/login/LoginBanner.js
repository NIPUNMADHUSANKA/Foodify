import React from 'react';
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
import axois from "axios";


//import {useForm} from 'react-hook-form';


const theme1 = createTheme();

export default function SignIn() {

  // -------------initial states for fields---------------------------
  const initialValues = { userName: "", password: "" };

  // ----------create state name form values--------
  const [formValues, setFormValues] = React.useState(initialValues);
  
  // ----------create state name form errors--------
  const [formErrors, setFormErrors] = React.useState({});

  // -------------usestate for submit form-----------
  const [isSubmit, setIsSubmit] = React.useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    // creating restaurant object
    const registeredCustomer = {
      userName: data.get('userName'),
      password: data.get('password')
    }

    setFormErrors(validate(formValues));
    setIsSubmit(true);

    //if ((formErrors).length === 0 && isSubmit) {
      console.log({
        username: data.get('userName'),
        password: data.get('password'),
      });
    //}

   // setFormValues(initialValues);
    
  };

  // -------function to handle changes in the input fields and set it to formvalues----------
  const handleChange = (e) => {

    // destructuring inputfield
    const { name, value } = e.target;
    // get the relavant name as key and assign value to it
    setFormValues({ ...formValues, [name]: value });

  }

   // --------------function for form validation------------------------
  const validate = (values) => {

    // const data = new FormData(event.currentTarget);
    const errors = {};

    if (!values.userName) {
      errors.userName = "UserName is required!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } 
    return errors;

   }
   // ------------------------end of validations------------------------

   React.useEffect((event) => {

    if (Object.keys(formErrors).length === 0 && isSubmit) {

      
      const userName =  formValues.userName;
      const password =  formValues.password;
      

      console.log(userName);
    // here we put the url and the restaurant object that in @requestbody in backend
    axois.get("http://localhost:8072/Foodify/Login/" + userName + "/" + password)
    .then(
      response => {
      console.log(response.status);
      setFormValues(initialValues)}
    )
    .catch(err => {
      console.warn(err);
      setFormValues(initialValues);
    });
    }
   }, [formErrors])

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
            Sign In
          </Typography>
          
          <form onSubmit={handleSubmit} sx={{ mt: 1 }}>

            <TextField
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
              name='userName' 
              autoComplete='name'

              id="userName"
              value={formValues.userName}
              onChange={handleChange}
              {...(formErrors.userName && { error: true, helperText: formErrors.userName })}

            />

            <TextField
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
              autoComplete='password'
              type='password'

              id="password"
              value={formValues.password}
              onChange={handleChange}
              {...(formErrors.password && { error: true, helperText: formErrors.password })}

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