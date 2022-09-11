import * as React from 'react';

import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';

  
    
function ComplaintHistory() {

  
    function renderRow(props) {
      const { index, style } = props;
    
      return (
        <ListItem style={style} key={index} component="div" disablePadding sx={{bgcolor:"#373737"}}>
          <ListItemButton>
            <ListItemText  sx = {{height:"5%"}} primary={`Not Good Customer Service`} secondary={
              <Typography fontWeight="lighter" color="#95CD41">
                Accepted
              </Typography>
            } />
          </ListItemButton>
        </ListItem>
      );
    }

  return (

    <Box color="#fff" bgcolor="#171717" opacity="50" sx= {{mt:"2%", mb:"2%", ml:"5%",borderRadius: '20px',p:"2%", width:{lg:"45vw",xs:"55vw"} }} >
      
      <Typography variant="h4" mt="2%"  gutterBottom sx= {{fontSize:{lg:"230%",xs:"180%"} }} >
         History of Complaints
      </Typography>

      <Grid container spacing={3} sx={{ input: { color: "#fff" }, "label": {color: "#fff"}, p:"1%" }} >
        
        <Grid item xs={12}>

        <FixedSizeList
            height={400}
            
            itemSize={80}
            itemCount={10}
            overscanCount={5}
            >

            {renderRow}

          </FixedSizeList>


        </Grid>

      </Grid>


    </Box>
    
/*
    <Box color="#fff" bgcolor="#171717" sx= {{mt:"2%", borderRadius: '20px', p:"2.5%", width:{lg:"40vw",xs:"50vw"} }} >
    
        

        <Box sx={{ width: '100%', height: 400, maxWidth: 360, bgcolor: 'background.paper'}}>
          
          
        <FixedSizeList
            height={400}
            width={560}
            itemSize={46}
            itemCount={10}
            overscanCount={5}
            >

            {renderRow}

          </FixedSizeList>

        </Box>

    </Box>

*/
  )
}

export default ComplaintHistory