import React from 'react';
import {ThemeProvider, Box, Typography, Tab, Tabs} from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

import { CalendarPicker } from '@mui/x-date-pickers';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker'; 


import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import theme, { Colours } from '../../../assets/theme/theme'; //to use theme provider,need to import this

import LineGraph from './LineGraph';
import { width } from '@mui/system';

const options1 = [
    'Day',
    'Month',
    'Year',
];

function Charts(details) {
    
    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const open = Boolean(anchorEl);
    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    

  return (
    <ThemeProvider theme={theme}>
        <Box sx={{
            backgroundColor: "rgba(23, 23, 23, 0.8)",
            color: "primary",
            padding: "1%"
        }}>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor= "primary"
                TabIndicatorProps={{style: {background:'#95CD41'}}}
                sx = {{
                    color: "primary",
                    mb: "1%",
                    ml: "3%",
                }}
            >
                <Tab value="one" label={
                    <Typography varient="h4" color="#fff" fontSize="15px">Income Chart</Typography>}> 
                </Tab>
                <Tab value="two" label={
                    <Typography varient="h4" color="#fff" fontSize="15px">Signup Chart</Typography>}> 
                </Tab>
                <Tab value="three" label={
                    <Typography varient="h4" color="#fff" fontSize="15px">Account Upgrading</Typography>}> 
                </Tab>
            </Tabs>
            <Box
            sx={{
                display:"flex",
                flexDirection:"row",
                columnGap: "5%",
                fontSize: "10px",
                justifyContent: "flex-end",
                paddingRight: "5%",
            }}>
                <Box>
                    <List
                        component="nav"
                        aria-label="Device settings"
                        sx={{ 
                            // backgroundColor: "rgba(224, 224, 224, 1)",
                            // width: "12%",
                            padding: "0"
                    }}
                    >
                        <ListItem button
                            id="lock-button"
                            aria-haspopup="listbox"
                            aria-controls="lock-menu"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClickListItem}
                            sx={{
                                padding: '2px 5px 2px 15px',
                                backgroundColor: 'rgba(45, 45, 45, 1)',
                                color: 'white',
                                border: '1px solid rgba(255, 255, 255,0.6)',
                                borderRadius: '5px',
                                fontSize: '0px !important'
                            }}
                            >
                            <ListItemText/>
                            <Typography fontSize= '14px'>
                                {options1[selectedIndex] }
                            </Typography>
                            {open ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                    </List>
                    <Menu
                        id="lock-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'lock-button',
                        role: 'listbox',
                        width: "100%"
                        }}
                    >
                        {options1.map((option, index) => (
                        <MenuItem
                            key={option}
                            selected={index === selectedIndex}
                            onClick={(event) => handleMenuItemClick(event, index)}
                        >
                            {option}
                        </MenuItem>
                        ))}
                    </Menu>
                </Box>
                <Box>
                
                </Box>
            </Box>
            <LineGraph />

        </Box>
    </ThemeProvider>
  )
}

export default Charts