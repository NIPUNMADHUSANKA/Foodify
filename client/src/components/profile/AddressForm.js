import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import theme, { Colours } from '../../assets/theme/theme';
//to use theme provider,need to import this
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import FolderIcon from '@mui/icons-material/Folder';
import  '../../assets/css/Profile.css';
import { fontFamily } from '@mui/system';


const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

////////////////////////////////////////////input deseases
const top100Films = [
  { title: 'Pizza', year: 1994 },
  { title: 'Veg soup', year: 1972 },
  { title: 'Soup', year: 1974 },
  { title: 'Salad', year: 2008 },
  { title: 'Pizza', year: 1957 },
  { title: "Pizza", year: 1993 },
  { title: 'Pizza', year: 1994 },
  {
    title: 'Pizza',
    year: 2003,
  },
  { title: 'Pizza', year: 1966 },
  { title: 'Pizza', year: 1999 },
  {
    title: 'Pizza',
    year: 2001,
  },
  {
    title: 'Pizza',
    year: 1980,
  },
  { title: 'Pizza', year: 1994 },
  { title: 'Pizza', year: 2010 },
  {
    title: 'Pizza',
    year: 2002,
  },
  { title: "Pizza", year: 1975 },
  { title: 'Pizza', year: 1990 },
  { title: 'Pizza', year: 1999 },
  { title: 'Pizza', year: 1954 },
  {
    title: 'Pizza',
    year: 1977,
  },
  { title: 'Soup', year: 2002 },
  { title: 'Pizza', year: 1995 },
  { title: 'Pizza', year: 1991 },
  { title: "Soup", year: 1946 },
  { title: 'Pizza', year: 1997 },
  { title: 'Pizza', year: 1995 },
  { title: 'Pizza', year: 1994 },
  { title: 'Soup', year: 2001 },
  { title: 'Soup', year: 1998 },
  { title: 'Pizza', year: 1968 },
  { title: 'Soup', year: 1998 },
  { title: 'Soup', year: 2014 },
];

////////////////////////////////////////////////////////////

export default function AddressForm() {
  return (
    <Container 
    sx={{
      backgroundColor:Colours.dark ,
      width:'60%',
      marginTop:'4%',
      marginBottom:'4%',
      borderRadius:"33px" 
      }}>
    
      <Box sx={{paddingTop:'2%'}} >
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ 
          width: 126, 
          height: 126 ,
         margin:'auto',
         }}   
      />
      <Box sx={{position:'absolute',marginLeft:'30%',marginTop:'-2%'}}>
      <Stack>
      <Avatar>
        <FolderIcon />
      </Avatar>
      </Stack>
      </Box>
      </Box>
          
      <Typography sx={{fontFamily:"Poppins",marginLeft:"1%",marginBottom:"5%", marginTop:"2%",color:Colours.formWhite,fontWeight:''}} variant="h6" gutterBottom >
        Profile Details
      </Typography>
      <Grid container spacing={3} sx={{color:Colours.formWhite}} >
        <Grid item xs={12} >
          <TextField
          sx={{ input: 
            { color: Colours.formWhite }, 
            "label": {color: Colours.formWhite,  fontFamily:'Poppins'},
            "& label.Mui-focused": {
            color:Colours.formWhite
            },backgroundColor:Colours.transparenceGrey,
          
            }}
            required
            id="userName"
            name="userName"
            label="Username"
            fullWidth
            autoComplete="given-name"
            defaultValue="Riyansa"
            variant="filled"
           
          />
        </Grid>
        {/* <Grid item xs={12} sm={6}>
          <TextField
            sx={{ input: 
            { color: Colours.formWhite }, 
            "label": {color: Colours.formWhite},
            "& label.Mui-focused": {
            color:Colours.formWhite
            },backgroundColor:Colours.transparenceGrey
        
            }}
            id="lastName"
            name="lastName"
            label="Last Name"
            fullWidth
            autoComplete="family-name"
            defaultValue="Abesinghe"
            variant="filled"
          />
          
        </Grid> */}
        <Grid item xs={12}>
         
           <TextField
           sx={{ input: 
            { color: Colours.formWhite }, 
            "label": {color: Colours.formWhite,fontFamily:'Poppins'},
            "& label.Mui-focused": {
            color:Colours.formWhite
            },backgroundColor:Colours.transparenceGrey
        
            }}
            id="Email"
            name="Email"
            label="Email"
            fullWidth
            autoComplete="email"
            defaultValue="RiyansaAbeweera@gmail.com"
            variant="filled"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            sx={{ input: 
              { color: Colours.formWhite }, 
              "label": {color: Colours.formWhite,fontFamily:'Poppins'},
              "& label.Mui-focused": {
              color:Colours.formWhite
              },backgroundColor:Colours.transparenceGrey
          
              }}
            id="Telephone no"
            name="Telephone no"
            label="Telephone no"
            fullWidth
            autoComplete="Telephone no"
            defaultValue="0701234567"
            variant="filled"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            sx={{ input: 
              { color: Colours.formWhite }, 
              "label": {color: Colours.formWhite,fontFamily:'Poppins'},
              "& label.Mui-focused": {
              color:Colours.formWhite
              },backgroundColor:Colours.transparenceGrey
          
              }}
            id="City"
            name="City"
            label="City"
            fullWidth
            autoComplete="City"
            defaultValue="Kurunegala"
            variant="filled"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
            sx={{ input: 
              { color: Colours.formWhite }, 
              "label": {color: Colours.formWhite,fontFamily:'Poppins'},
              "& label.Mui-focused": {
              color:Colours.formWhite
              },backgroundColor:Colours.transparenceGrey
          
              }}
            id="hometown"
            name="hometown"
            label="Home Town"
            fullWidth
            autoComplete="Close city"
            defaultValue="Kurunegala"
            variant="filled"
          />
        </Grid>

        {/* health conditions */}
        {/* <Grid item xs={12}>
        <Typography sx={{marginLeft:"1%",fontFamily:'Poppins'}} variant="h6" gutterBottom >
        Health Status
        </Typography>
        </Grid>

        <Grid item xs={12} sm={6} >
        <Typography sx={{marginLeft:"1%"}} variant="h6" gutterBottom >
        Diseases
        </Typography>
         <Typography sx={{marginLeft:"2%",backgroundColor:Colours.transparenceGrey,paddingLeft:'2%'}} >
          <p>Diabetic</p>
          <p>Diabetic</p>
          <p>Diabetic</p>
          <p>Diabetic</p>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Typography sx={{marginLeft:"1%"}} variant="h6" gutterBottom >
        Add Disease
        </Typography  >
          <Autocomplete
            multiple
            id="checkboxes-tags-demo"
            options={top100Films}
            disableCloseOnSelect
            getOptionLabel={(option) => option.title}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                  
                />
                {option.title}
              </li>
            )}
            style={{ width: '100%',backgroundColor:Colours.transparenceGrey }}
            renderInput={(params) => (
              <TextField {...params} sx={{  input: 
                { color: Colours.formWhite }, 
                "label": {color: Colours.formWhite},
                "& label.Mui-focused": {
                color:Colours.formWhite
                }, 
                
                }} label="Checkboxes" placeholder="deseases" />
            )}
          />
        </Grid> */}

        {/*food preferences */}
        <Grid item xs={12}>
        <Typography sx={{fontFamily:'Poppins',marginLeft:"1%"}} variant="h6" gutterBottom >
        Food Preferences
        </Typography>
        </Grid>

        <Grid item xs={12} sm={6} >
        <Typography sx={{fontFamily:'Poppins',marginLeft:"1%"}} variant="h6" gutterBottom >
        Like Foods
        </Typography>
         <Typography sx={{fontFamily:'Poppins',marginLeft:"2%",backgroundColor:Colours.transparenceGrey,paddingLeft:"2%"}} >
          <p>Pizza</p>
          <p>Veg soup</p>
          <p>Pizza</p>
          <p>Veg soup</p>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Typography sx={{fontFamily:'Poppins',marginLeft:"1%"}} variant="h6" gutterBottom >
        Add Foods
        </Typography>
          <Autocomplete
            multiple
            id="checkboxes-tags-demo"
            options={top100Films}
            disableCloseOnSelect
            getOptionLabel={(option) => option.title}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8,color: "#00e676" }}
                  checked={selected}
                />
                {option.title}
              </li>
            )}
            style={{ width: '100%', backgroundColor:Colours.transparenceGrey }}
            renderInput={(params) => (
              <TextField sx={{  input: 
                { color: Colours.formWhite }, 
                "label": {color: Colours.formWhite},
                "& label.Mui-focused": {
                color:Colours.formWhite
                }, 
                
                }}
              {...params} label="Checkboxes" placeholder="Favorites" />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6} marginBottom={'2%'}>
        <Button xs={12} sm={6} href='#' variant="contained" sx={{
             marginLeft:'75%',
              background: Colours.green, '&:hover': {
                backgroundColor: Colours.yellow,
               
              },
              color: Colours.dark,
              fontSize: '20px',
              fontFamily:'Poppins',
              hover: Colours.yellow,
              [theme.breakpoints.down('sm')]: {
                fontSize: '18px',
                marginLeft:'0%',
                width:'100%',
               

               
              },
            }}>
              SAVE
            </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Button xs={12} sm={6} href='#' variant="contained" sx={{
              
              background: Colours.darkgray, '&:hover': {
                backgroundColor: Colours.grayWhite, color: Colours.dark,
               
              },
              color: Colours.grayWhite,
              fontSize: '20px',
              fontFamily:'Poppins',
              [theme.breakpoints.down('sm')]: {
                fontSize: '18px',
                width:'100%',
                marginBottom:'7%',
                
              },
            }}>
              CANCEL
            </Button>
          
        </Grid>
       
      </Grid>
    </Container>
  );
}