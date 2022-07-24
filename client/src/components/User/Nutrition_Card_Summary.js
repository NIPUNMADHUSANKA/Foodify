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
import Button from '@mui/material/Button';

import theme, { Colours } from '../../assets/theme/theme';//to use theme provider,need to import this

//Import image
import Image from "../../assets/images/closeup-roasted-meat-with-sauce-vegetables-fries-plate-table.jpg";

import Typography from '@mui/material/Typography';


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
            
            <ListItemText primary={
                <Typography variant="h6" style={{ color: "white" }}>
                250g
                </Typography>
                }
            secondary={
                <Typography style={{ color: "#EFEAEA", fontWeight:"lighter" }}>Total Cholesterol</Typography>
            }
            color="#fff"/>

        </ListItemButton>
       
      </ListItem>      
    );
  }


function Nutrition_Card() {
  return (
    //Main box slding card 100vw
    <Box color="#fff" bgcolor="none" width="100vw" mt="5%">
        
       
        <Box display="flex" flexDirection="row"  
        sx = {{[theme.breakpoints.down('md')]: {
          flexDirection:"column" }}
    }>
            
            <Box  width="53%" 
              sx = {{
                [theme.breakpoints.down('md')]:{
                  width:"100%"
                }
              }}
            >
                <img src={Image} width="70%" style={{borderRadius : "50px"}}/>
                <Box display="flex" flexDirection="row" mt="3%" ml="10%">
                
                <Typography color="#95CD41" fontSize="200%" textAlign="right" sx={{mr:"8%"}} fontWeight="bold">
                    Helathy Zoon
                </Typography>

                <Typography color="#FAC213" fontSize="180%" textAlign="right" sx={{mr:"5%"}} fontWeight="bold">
                    <Button variant="outlined" sx = {{ color: "#95CD41", borderColor:"#95CD41" }}>Confirm</Button>
                </Typography>

                </Box>
            </Box>

            <Box
      sx={{ width: '100%', height: 300, maxWidth: 360}}
    >
            <FixedSizeList
        height={420}
        width="160%"
        itemSize={95}
        itemCount={6}   
        
        style={{borderRadius : "60px"}}
      >
                 
                 {renderRow}
                   
                   
            </FixedSizeList>
               
            </Box>


        </Box>
    </Box>      
  )
}

export default Nutrition_Card