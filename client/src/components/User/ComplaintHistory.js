import * as React from 'react';

import { Box,TextareaAutosize,Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { color } from '@mui/system';
import theme, { Colours } from '../../assets/theme/theme';//to use theme provider,need to import this


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }
  
    
  

function ComplaintHistory() {

    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

  return (
    <Box item xs={12} sm={6} color="#fff" bgcolor="#171717" sx= {{ml:"5%",borderRadius: '20px',p:"3%", width:{lg:"50vw",xs:"70vw"} }} >
    
    <Typography variant="h5" gutterBottom sx= {{fontSize:{lg:"200%",xs:"150%"} }} >
     History of Complaints
    </Typography>



    <Box
      sx={{ flexGrow: 1, bgcolor: '#373737', display: 'flex', height: 224}}
    >
        
      <Tabs
       orientation="vertical"
       variant="scrollable"
       value={value}
       onChange={handleChange}
       aria-label="Vertical tabs example"
       
       TabIndicatorProps={{style: {background:'#FAC213'}}}
       sx={{ borderRight: 1, borderColor: 'divider' }}
        >
        <Tab label="Complaint One" {...a11yProps(0)} />
        <Tab label="Complaint Two" {...a11yProps(1)} />
        <Tab label="Complaint Three" {...a11yProps(2)} />
        <Tab label="Complaint Four" {...a11yProps(3)} />
        <Tab label="Complaint Five" {...a11yProps(4)} />
        <Tab label="Complaint Six" {...a11yProps(5)} />
        <Tab label="Complaint Seven" {...a11yProps(6)} />
      </Tabs>

      <TabPanel value={value} index={0}>
      Complaint One
      </TabPanel>
      <TabPanel value={value} index={1}>
      Complaint Two
      </TabPanel>
      <TabPanel value={value} index={2}>
      Complaint Three
      </TabPanel>
      <TabPanel value={value} index={3}>
      Complaint Four
      </TabPanel>
      <TabPanel value={value} index={4}>
      Complaint Five
      </TabPanel>
      <TabPanel value={value} index={5}>
      Complaint Six
      </TabPanel>
      <TabPanel value={value} index={6}>
      Complaint Seven
      </TabPanel>
        
     
    </Box>



    
   


     </Box>
  )
}

export default ComplaintHistory