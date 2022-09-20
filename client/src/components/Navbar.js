import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';

import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';

import Logo from '../assets/icons/foodify-logo.png';

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const pages = ['HOME', 'EXPLORE', 'ABOUT US', 'CONTACT US'];

var ROLE = null;

const mobileMenu = {
  // backgroundColor: 'Transparent',
  '& .MuiMenuItem-root': {
    fontSize: 12,
    color: 'White'
  },

  '& .MuiPopover-paper': {
    backgroundColor: 'rgba(255, 255, 255, 0.27)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(6px)',
  },

}

const userMenu = {
  marginTop: "55px",
  '& .MuiMenuItem-root' : {
    fontSize: 12,
    color: 'White'
  },

  '& .MuiPopover-paper': {
    backgroundColor: 'rgba(255, 255, 255, 0.27)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(6px)',
  }

}

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '20px',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));


export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const navigate = useNavigate();

  const logout = () => {

    localStorage.removeItem("TOKEN");
    localStorage.removeItem("ROLE");

    ROLE = null
    
    navigate("/Explore");

  };

  //use this for notifiacation menu
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };


  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderAccountMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      sx={userMenu}
    >
      <MenuItem component={Link} to = "/myprofile">
        PROFILE
      </MenuItem>

      <MenuItem>
        TRANSACTION
      </MenuItem>

      <MenuItem >
        LOGOUT
      </MenuItem>

    </Menu>
  );


  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      sx={mobileMenu}
    >
      {pages.map((page) => (
        <MenuItem>
          {page}
        </MenuItem>
      ))}

      <MenuItem>
        NOTIFICATIONS
      </MenuItem>
      <MenuItem>
        PROFILE
      </MenuItem>
    </Menu>
  );



  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#000', boxShadow: '0 10 5 0 rgba(0,0,0,0.75)' }}>
        <Toolbar>

          <Box
            component="img"
            sx={{
              height: 40,
            }}
            src={Logo}

          />

          {/*------------------------------START SET USERTOLE-------------------------------------------------*/}
          {(() => {
            if (JSON.parse(localStorage.getItem('ROLE'))) {
              ROLE = JSON.parse(localStorage.getItem('ROLE'))[0].authority;
              console.log(ROLE)
            }
          }
          )()}
          {/*------------------------------END SET USERTOLE-------------------------------------------------*/}

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

            {/*------------------------------START Without Resturants Have this option-------------------------------------------------*/}
            {(() => {
              if (ROLE != "restaurant") {
                return (<Button component={Link} to='/' sx={{ my: 2, color: 'white', display: 'block', ml: 10 }}> HOME </Button>);
              }
            }
            )()}
            {(() => {
              if (ROLE != "restaurant") {
                return (<Button component={Link} to='/Explore' sx={{ my: 2, color: 'white', display: 'block', ml: 10 }}> EXPLORE </Button>);
              }
            }
            )()}
            {/*------------------------------END Without Resturants Have this option-------------------------------------------------*/}


            {/*------------------------------START Only unregistered Have this option-------------------------------------------------*/}
            {(() => {
              if (ROLE === null) {
                return (<Button component={Link} to='/' sx={{ my: 2, color: 'white', display: 'block', ml: 10 }}> ABOUT US </Button>);
              }
            }
            )()}

            {(() => {
              if (ROLE === null) {
                return (<Button component={Link} to='/Explore' sx={{ my: 2, color: 'white', display: 'block', ml: 10 }}> CONTACT US </Button>);
              }
            }
            )()}
            {/*------------------------------END Only unregistered Have this option-------------------------------------------------*/}



            {/*------------------------------START Only Resturants Have these option-------------------------------------------------*/}
            {(() => {
              if (ROLE === "restaurant") {
                return (<Button component={Link} to='/RestaurantProfile' sx={{ my: 2, color: 'white', display: 'block', ml: 10 }}> HOME </Button>);
              }
            }
            )()}
            {(() => {
              if (ROLE === "restaurant") {
                return (<Button component={Link} to='/AddFoodMenu' sx={{ my: 2, color: 'white', display: 'block', ml: 10 }}> MENU </Button>);
              }
            }
            )()}
            {(() => {
              if (ROLE === "restaurant") {
                return (<Button component={Link} to='/Restaurant/AddOffers' sx={{ my: 2, color: 'white', display: 'block', ml: 10 }}> OFFERS </Button>);
              }
            }
            )()}
            {/*------------------------------END Only Resturants Have these option-------------------------------------------------*/}


            {/*------------------------------START Only Premium Have these option-------------------------------------------------*/}
            {(() => {
              if (ROLE === "premiumUser") {
                return (<Button component={Link} to='/Image_Upload' sx={{ my: 2, color: 'white', display: 'block', ml: 10 }}> IMAGE </Button>);
              }
            }
            )()}
            {(() => {
              if (ROLE === "premiumUser") {
                return (<Button component={Link} to='/Intake' sx={{ my: 2, color: 'white', display: 'block', ml: 10 }}> CHART </Button>);
              }
            }
            )()}
            {(() => {
              if (ROLE === "premiumUser") {
                return (<Button component={Link} to='/userprofile' sx={{ my: 2, color: 'white', display: 'block', ml: 10 }}> HISTORY </Button>);
              }
            }
            )()}
            {/*------------------------------END Only Premium Have these option-------------------------------------------------*/}

            {/*------------------------------START Only Registered user and Premium Have this option-------------------------------------------------*/}
            {(() => {
              if (ROLE === "User" || ROLE === "premiumUser") {
                return (<Button component={Link} to='/Complaints' sx={{ my: 2, color: 'white', display: 'block', ml: 10 }}> COMPLAIN  </Button>);
              }
            }
            )()}
            {/*------------------------------END Only Registered user and Premium Have this option-------------------------------------------------*/}

            {/*------------------------------START Only Registered user and Premium Have this option-------------------------------------------------*/}
            {(() => {
              if (ROLE === "admin") {
                return (<Button component={Link} to='/dashboard' sx={{ my: 2, color: 'white', display: 'block', ml: 10 }}> DASHBOARD  </Button>);
              }
            }
            )()}
            {/*------------------------------END Only Registered user and Premium Have this option-------------------------------------------------*/}

          </Box>




          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search for items"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>


            {/*------------------------------START Notification Icons-------------------------------------------------*/}
            {(() => {
              if (ROLE != null) {
                return (<IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <Badge badgeContent={17} color="error">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>);
              }
            }
            )()}
            {/*------------------------------END Notification Icons-------------------------------------------------*/}



            {/*------------------------------START User Icons-------------------------------------------------*/}
            
            {(() => {
              if (ROLE != null && ROLE != "admin" && ROLE != "restaurant") {
                return (<IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  color="inherit"
                  onClick={handleProfileMenuOpen}

                  component = {Link} 
                  to = "/myProfile"
                >
                  <AccountCircle />
                </IconButton>);
              }
            }
            )()}


            {(() => {
              if (ROLE != null) {
                return (<IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  color="inherit"
                >
                  <LogoutIcon onClick = {logout} />
                </IconButton>);
              }
            }
            )()}


            {/*------------------------------END User Icons-------------------------------------------------*/}


            {/*------------------------------START Login Icons-------------------------------------------------*/}
            {(() => {
              if (ROLE === null) {
                return (
                  <Button component={Link} to='/login' sx={{ my: 2, color: 'white', display: 'block', ml: 1 }}> LogIn  </Button>
                );
              }
            }
            )()}
            {/*------------------------------END Login Icons-------------------------------------------------*/}



            {/*------------------------------START SignUp Icons-------------------------------------------------*/}
            {(() => {
              if (ROLE === null) {
                return (
                  <Button component={Link} to='/register/Signup' sx={{ my: 2, color: 'white', display: 'block', ml: 1 }}> SignUp  </Button>
                );
              }
            }
            )()}
            {/*------------------------------END Signup Icons-------------------------------------------------*/}



          </Box>
          {renderAccountMenu}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderAccountMenu}
      {renderMobileMenu}
    </Box>
  );

}
