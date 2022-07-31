import React from 'react';
import {ThemeProvider, Box, Typography, Tab, Tabs, TextField} from '@mui/material';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker'; 

// import ExpandLess from '@mui/icons-material/ExpandLess';
// import ExpandMore from '@mui/icons-material/ExpandMore';

import theme from '../../../assets/theme/theme'; //to use theme provider,need to import this

// import { width } from '@mui/system';
// import { useParams } from 'react-router-dom';

import IncomeChart from './IncomeChart';
import SignupChart from './SignupChart';
import AccountUpgradeChart from './AccountUpgrade';

import TabPanel from '../../TabPanel';

//------------------------------options for calendar
const options1 = [
    'Day',
    'Month',
    'Year',
];

//------------------------------styles for calendar
const popperSx = {
    "& .MuiPaper-root": {
        backgroundColor: "rgba(120, 120, 120, 0.2)",
        color:"#fff",
        marginTop: "10px",
    },
    "& .css-j1tbx-MuiButtonBase-root-MuiPickersDay-root:hover" :{
        backgroundColor:"#95CD41"
    },
    "& .css-1d8508y-MuiTypography-root": {
        color:"#fff",
    },
    "& .MuiSvgIcon-root":{
        color: "white",
    },
};

//------------------------------styles for menu
const menuSx = {
    "& .MuiPaper-root": {
        backgroundColor: "rgba(120, 120, 120, 0.2)",
        color:"#fff",
        fontSize:"14px",
    },
}


function Charts() {
    
    //------------------------------------------------------------handeling tabs    
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    //------------------------------------------------------------handeling calender changing dates
    const [date, setDate] = React.useState(new Date());
    const handleChangeDate = (newValue) => {
        setDate(newValue);
    };
    
    //------------------------------------------------------------handeling day, month, year menu 
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const open = Boolean(anchorEl);
    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    
    //------------------------------------------------------------change calender button according to selected menu
    const [range, setRange] = React.useState('day');
    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setAnchorEl(null);
        switch(index){
            case 0:
                setRange('day')
                case 1: 
                setRange('month')
                case 3:
                    setRange('year')
                    default:
                        setRange('day')
                    }
                    // }
    };
                
    

  return (
    <ThemeProvider theme={theme}>
        {/* ------------------------------------------------------------tabs box */}
        <Box sx={{
            backgroundColor: "rgba(23, 23, 23, 0.8)",
            color: "primary",
            padding: "1%",
            paddingTop: "3%"}}>

            {/* ------------------------------------------------------------time box */}
            <Box
            sx={{
                display:"flex",
                flexDirection:"row",
                columnGap: "2%",
                fontSize: "10px",
                justifyContent: "flex-end",
                paddingRight: "5%",
                alignItems: "center",
                
            }}>
                {/* ------------------------------------------------------------menu box */}
                {/* <Box>
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
                                padding: '5px 5px 5px 15px',
                                backgroundColor: 'rgba(45, 45, 45, 1)',
                                color: 'white',
                                border: '1px solid rgba(255, 255, 255,0.6)',
                                borderRadius: '5px',
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
                        // width: "100%"
                        }}
                        sx= {menuSx}
                    >
                        {options1.map((option, index) => (
                        <MenuItem
                            key={option}
                            selected={index === selectedIndex}
                            onClick={(event) => handleMenuItemClick(event, index)}
                            sx={{
                                fontSize: "14px",
                            }}
                        >
                            {option}
                        </MenuItem>
                        ))}
                    </Menu>
                </Box> */}
                {/* ------------------------------------------------------------calendar box */}
                <Box
                sx={{
                    width:"20%",
                    backgroundColor: "rgba(45, 45, 45, 1)",
                    border: '1px solid rgba(255, 255, 255,0.6)',
                    borderRadius: '5px',
                }}>
                        <LocalizationProvider dateAdapter={AdapterDateFns} sx={{color:"#fff"}}>
                            <DatePicker 
                                // views={[range]}
                                value={date}
                                onChange={handleChangeDate}
                                renderInput = {(params) => <TextField {...params} />}
                                PopperProps={{
                                    sx: popperSx
                                }}
                            />
                        </LocalizationProvider>
                </Box>
                <Typography color="primary">To</Typography>
                <Box
                sx={{
                    width:"20%",
                    backgroundColor: "rgba(45, 45, 45, 1)",
                    border: '1px solid rgba(255, 255, 255,0.6)',
                    borderRadius: '5px',
                }}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker 
                                // views={[range]}
                                value={date}
                                onChange={handleChangeDate}
                                renderInput = {(params) => <TextField {...params} />}
                                PopperProps={{
                                    sx: popperSx
                                }}
                            />
                        </LocalizationProvider>
                </Box>
            </Box>
            
            {/* ------------------------------------------------------------tabs */}
            <Tabs
                value={value}
                onChange={handleChange}
                textColor= "primary"
                TabIndicatorProps={{style: {background:'#95CD41'}}}
                sx = {{
                    color: "primary",
                    mb: "1%",
                    ml: "1%",
                }}
            >
                <Tab value={0} label={
                    <Typography varient="h4" color="#fff" fontSize="15px">Income Chart</Typography>}> 
                </Tab>
                <Tab value={1} label={
                    <Typography varient="h4" color="#fff" fontSize="15px">Signup Chart</Typography>}> 
                </Tab>
                <Tab value={2} label={
                    <Typography varient="h4" color="#fff" fontSize="15px">Account Upgrading</Typography>}> 
                </Tab>
            </Tabs>

            {/* ------------------------------------------------------------graphs changes with tabs */}
            <TabPanel value={value} index={0}>
                <IncomeChart />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <SignupChart />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <AccountUpgradeChart />
            </TabPanel>
        </Box>
    </ThemeProvider>
  )
}

export default Charts