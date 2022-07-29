import * as React from 'react';

import { Box,TextareaAutosize,Button, Stack } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { color } from '@mui/system';
import theme, { Colours } from '../../assets/theme/theme';//to use theme provider,need to import this



function ComplainAdd() {

   
  return (


     <Box color="#fff" bgcolor="#171717" opacity="50" sx= {{ml:"5%",borderRadius: '20px',p:"3%", width:{lg:"45vw",xs:"55vw"} }} >
    
      <Typography variant="h4" gutterBottom sx= {{fontSize:{lg:"230%",xs:"180%"} }} >
          Add Complaint
      </Typography>

      <Grid container spacing={3} sx={{ input: { color: "#fff" }, "label": {color: "#fff"}, p:"1%" }} >
        
        <Grid item xs={12}>
          <TextField
            required
            id="Resturant_Name"
            name="Resturant_Name"
            label="Resturant Name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            sx={{"& label.Mui-focused": {
                color:"#fff"
              }}}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            id="Complaint_Title"
            name="Complaint_Title"
            label="Complaint Title"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            sx={{"& label.Mui-focused": {
                color:"#fff"
              }}}    
          />
        </Grid>
        
        <Grid item xs={12} > 
        <TextareaAutosize
            placeholder="Complaint"
            style={{ width: "100%", paddingTop: '5px'}}
            
        />
        </Grid>
        
        <Grid item xs={12} md={4}>
            <Button variant="contained" sx={{color:'#FFFFFF',backgroundColor:"#3E3E3E", '&:hover': {
                backgroundColor: Colours.darkgray,
              }}}>
              Browse
            </Button>
        </Grid>


        <Box mt="8%" marginLeft="35%"  display="flex" flexDirextion="row" >

              <Button variant="outlined" style={{marginRight:"5%", color:'#95CD41',borderColor: "#95CD41"
              ,"&:hover": {
              backgroundColor: "#15e577",
              borderColor:"#564345"
              } }}>
              Send
              </Button>

              <Button variant="outlined" style={{color:'#FAC213', borderColor: "#FAC213",
              "&:hover": {
              backgroundColor: "#15e577",
              borderColor:"#564345"
              } }}>
              Clear
              </Button>

        </Box>

  
      </Grid>


     </Box>

     

  )
}

export default ComplainAdd