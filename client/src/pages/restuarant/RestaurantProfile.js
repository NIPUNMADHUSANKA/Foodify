import React from 'react';
import { useEffect } from 'react';
import { Box, Tab, Tabs } from '@mui/material';

// to import necessacry components of the restuarant page
import Navbar from '../../components/Navbar';
import RestaurantHome from '../../components/restaurant/profile/RestaurantHome';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import RTabPanel from '../../components/restaurant/profile/RTabPannel';

// for scroll reveals
import Fade from 'react-reveal/Fade';
import { Colours } from '../../assets/theme/theme';
import styled from '@emotion/styled';
import RestaurantEditableBanner from '../../components/restaurant/profile/RestaurantEditableBanner';

// styles for profile tabs----------
const mIcons = {
    color: Colours.yellow,
}

// ---------------------------------text fied css style-----------------------
const CustomTabs = styled(Tabs)({
    '& button': {
        color:Colours.yellow,
    },
    '& button:hover': {
        color:Colours.green,
        '& svg':{
            color:Colours.green,
        },
    },
    '& button:active': {
        color:Colours.grayWhite,
        '& svg':{
            color:Colours.grayWhite,
        },
    },
    '& button.Mui-selected':{
        color:Colours.green,
        '& svg':{
            color:Colours.green,
        },
    }
    
});
// ---------------------------------------------------------------------


const RestaurantProfile = () => {

    const [value, setValue] = React.useState(0);

    const changing = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        document.title = "Restaurant Profile";
    })

    return (
        <Box>
            <Navbar />

            <Fade>
                <RestaurantEditableBanner />
            </Fade>

            {/* -------------------tabs of the proffile------------------ */}
            <Fade down cascade>
                <CustomTabs
                    value={value}
                    onChange={changing}
                    variant="fullWidth"
                    TabIndicatorProps={{sx : {background:Colours.green}}}
                    aria-label="resturantProfile"
                >
                    <Tab icon={<HomeIcon sx={{ color: Colours.yellow }} />} label="HOME" value={0}/>
                    <Tab icon={<DashboardIcon sx={{ color: Colours.yellow }} />} label="DASHBOARD" value={1}/>
                    <Tab icon={<AccountBalanceWalletIcon sx={{ color: Colours.yellow }} />} label="INCOME" value={2}/>
                </CustomTabs>

            </Fade>

            <Box>
                <RTabPanel value={value} index={0} >
                    <RestaurantHome />
                </RTabPanel>
                <RTabPanel value={value} index={1} >
                    Dashboard
                </RTabPanel>
                <RTabPanel value={value} index={2} >
                    volet
                </RTabPanel>
            </Box>

        </Box>
    )
}

export default RestaurantProfile
