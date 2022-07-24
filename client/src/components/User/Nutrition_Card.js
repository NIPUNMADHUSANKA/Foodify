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
              <Typography style={{ color: "#EFEAEA", fontWeight:"lighter" }}>Cholesterol</Typography>
          }
          color="#fff"/>

      </ListItemButton>
     
    </ListItem>      
  );
}


function Nutrition_Card() {
  return (
    //Main box slding card 100vw
    <Box color="#fff" bgcolor="none" width="100vw">
        
        <Typography color="#F02828" fontSize="120%" textAlign="right" sx={{mr:"5%", mb:"2%"}}>
        Remove Food
        </Typography>

    
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
                
                <Typography color="#FAC213" fontSize="200%" textAlign="right" sx={{mr:"8%"}} fontWeight="bold">
                    Oysters
                </Typography>

                <Typography color="#FAC213" fontSize="180%" textAlign="right" sx={{mr:"5%"}} fontWeight="bold">
                    02
                </Typography>

                </Box>
            </Box>

            <Box>
            <FixedSizeList
              height={420}
              width="250%"
              itemSize={95}
              itemCount={6}  
              style={{borderRadius : "40px"}}  
             >
                 
                 {renderRow}
                   
                   
            </FixedSizeList>
               
            </Box>


        </Box>
    </Box>      
  )
}

export default Nutrition_Card