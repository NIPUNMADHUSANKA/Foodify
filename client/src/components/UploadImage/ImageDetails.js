import * as React from 'react';
import Box from '@mui/material/Box';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import ListItemButton from '@mui/material/ListItemButton';
import { FixedSizeList } from 'react-window';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import theme, { Colours } from '../../assets/theme/theme';//to use theme provider,need to import this

import Button from '@mui/material/Button';

//Import image
import Image from "../../assets/images/closeup-roasted-meat-with-sauce-vegetables-fries-plate-table.jpg";

import Typography from '@mui/material/Typography';
import { textAlign } from '@mui/system';

// for scroll reveals
import Fade from 'react-reveal/Fade';
import ImageUpload from './ImageUpload';

const styles = {
    floatingLabelFocusStyle: {
        color: "#fff"
    }
}

function renderRow(props) {
  const { index, style } = props;

  return (
      
    <ListItem component="div"  sx={{backgroundColor:"#111", opacity:"10"}} >
      <ListItemButton sx={{borderBottom:"1px solid #222"}}>
          <ListItemAvatar>
              <Avatar>
                  <FastfoodIcon />
              </Avatar>
          </ListItemAvatar>
          

          <Typography variant="h6" style={{ color: "#999999" }}>
                Apple Cake
          </Typography>

          <Checkbox  defaultChecked  sx={{
                    color: "#95CD41",
                    '&.Mui-checked': {
                      color: "#95CD41",
                    },
                  }}/>

            <TextField
                id="outlined-number"
                label="Quantity"
                type="number"
                InputLabelProps={{
                    shrink: true,
                    className: styles.floatingLabelFocusStyle,

                }}
                style={{  backgroundColor:"none", width:"40%", color:"#fff", ml:"5%"}}
                sx={{ input: { color: "#fff" }, "label": {color: "#fff"},

              }}               
            />    
      
      </ListItemButton>
     
    </ListItem>      
  );
}


function ImageDetails() {
  return (
    //Main box slding card 100vw
    <Box color="#fff" bgcolor="none" mt="3%" pb="10%">

        
        <Fade left>
            
        <Box display="flex" flexDirection="row"  ml="5%"
        sx={{[theme.breakpoints.down('lg')]:{
          flexDirection:"column",
          textAlign:"center",
          justifyContent:"center",
          alignItems:"center",
          mt:"2%",
          
          },
          [theme.breakpoints.down('md')]:{
            mt:"2%"                
          },
          [theme.breakpoints.down('sm')]:{
          mt:"2%"                
            }
          }} >

            
                <Box>
                    <ImageUpload />
                  
                    
                </Box>
            

                <Box ml="20%" sx={{[theme.breakpoints.down('lg')]:{
                flexDirection:"column",
                textAlign:"center",
                justifyContent:"center",
                alignItems:"center",
                mt:"2%",
                
                },
                [theme.breakpoints.down('md')]:{
                  mt:"2%"                
                },
                [theme.breakpoints.down('sm')]:{
                mt:"2%"                
                  }
                }} >
                    <FixedSizeList
                      height={420}
                      width="350px"
                      itemSize={90}
                      itemCount={6}
                      style={{borderRadius : "40px",
                      overflow: "auto"
                    }}  
                    >
                
                        {renderRow}
                          
                    </FixedSizeList>


                    <Fade right>
                        <Box  style={{color:'#ccc', fontSize:"100%", marginBottom:"1%", marginTop:"5%", display:"flex", flexDirection:"row"}}>

                            <Box>
                              <select id="select" style={{backgroundColor:"#2E2E2E", borderRadius:"5px", marginRight:"20px"  ,border:"none", color:"#E0E0E0", padding:"8px"}}>
                                <option>Breakfast</option>
                                <option>Lunch</option>
                                <option>Dinner</option>
                                <option>Other</option>
                              </select>
                            </Box>
                            
                            <Box>
                              <Typography color='#95CD41' mt="3%">
                                  Add New Food
                              </Typography>
                            </Box>

                            <Box>
                                <Button variant="outlined" style={{mt:"3%", color:'#95CD41', marginLeft:"50%", borderColor: "#95CD41",
                                "&:hover": {
                                backgroundColor: "#15e577",
                                borderColor:"#564345"
                              } }}>
                                Check
                              </Button>
                          </Box>

                        </Box>
                  </Fade>
                  
                </Box>

        </Box>

        </Fade>


    </Box>      
  )
}

export default ImageDetails