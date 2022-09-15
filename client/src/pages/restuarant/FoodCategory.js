import { Box, IconButton, Typography } from '@mui/material'
import React, { useEffect } from "react";
import Background from '../../assets/images/categoryBackground.png'
import theme, { Colours } from '../../assets/theme/theme'

import CarouselCard2 from '../../components/carousel/CarouselCard2';
import Carousel from 'react-elastic-carousel'; //for the carousel
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Navbar from './../../components/Navbar';
import Fade from 'react-reveal/Fade';

import axois from "axios";
import { Link } from 'react-router-dom';

import authHeader from "../../services/auth-header";
import AuthService from '../../services/auth-service';
import { useLocation } from 'react-router-dom';

// ---------------css for carousel-------------------------

// -----------------------------for the carousel-------------------

/*const item = {
  "id": "1",
  "title": "Boneless Diang na Bangus",
  "image": image1,
  "name2": "Bojun Hut",
  "price": "Rs.280",
  "name": "Order Now",
}

const data = [
  {
    "id": "1",
    "title": "Boneless Diang",
    "image": image1,
    "name2": "Bojun Hut",
    "price": "Rs.280",
    "name": "Order Now",
  },
  {
    "id": "2",
    "title": "Tilapia in Tausi",
    "image": image2,
    "name2": "Bojun Hut",
    "price": "Rs.280",
    "name": "Order Now",
  },
  {
    "id": "3",
    "title": "Buttered Shrimp",
    "image": image3,
    "name2": "Bojun Hut",
    "price": "Rs.300",
    "name": "Order Now",
  },
  {
    "id": "4",
    "title": "Tulingan Sa Gata",
    "image": image4,
    "name2": "Bojun Hut",
    "price": "Rs.220",
    "name": "Order Now",
  },
  {
    "id": "5",
    "title": "Fried Tawilis",
    "image": image5,
    "name2": "Bojun Hut",
    "price": "Rs.125",
    "name": "Order Now",
  },
  {
    "id": "6",
    "title": "Pinangat",
    "image": image6,
    "name2": "Bojun Hut",
    "price": "Rs.200",
    "name": "Order Now",
  }
]
*/
const itemcount = 4;

// ------------------------------------------------------
//console.log(data)

//const data2 = data;
var ROLE = null;

const FoodCategory = () => {


  {/*------------------------------START SET USERTOLE-------------------------------------------------*/ }
  {
    (() => {
      if (JSON.parse(localStorage.getItem('ROLE'))) {
        ROLE = JSON.parse(localStorage.getItem('ROLE'))[0].authority;
        // console.log(ROLE)
      }
    }
    )()
  }
  {/*------------------------------END SET USERTOLE-------------------------------------------------*/ }

  const location = useLocation();
  const Id = location.state.id;
  const name = location.state.name;

  // ----------store restaurant values--------
  const [details, setDetails] = React.useState({});

  // ----------Get Category --------
  const [isgetItem, setisgetItem] = React.useState(false);


  ///-- Get Token UserName--///
  // const currentUser = AuthService.getCurrentUser();

  useEffect((event) => {

    axois.get("http://localhost:8072/FoodiFy/RegisteredUser/getFoodCategoryItem/" + Id, { headers: authHeader() })
      .then(data => {

        setDetails(data.data);
        setisgetItem(true);

      })
      .catch(error => {
        console.log(error);

      });

  }, [isgetItem]);

console.log(details);

  return (



    <Box sx={{
      width: '100%',
      height: "auto",
      padding: 0,
      margin: 0,
      background: `url(${Background})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 100%",
    }}>
      {/*------------------------- main area--------------------- */}
      <Box sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        marginTop: 0,
        padding: 0,

      }}>

        <Fade top>
          <Navbar />
        </Fade>

        <Box sx={{
          marginTop: "8%",
          [theme.breakpoints.down('sm')]: {
            marginTop: "40%",
          },
        }}>
          {/* ---------title area------------ */}
          <Box sx={{
            width: '100%',
            display: "flex",
            flexDirection: "row",
          }}>

            {(() => {
              if (ROLE === "User") {
                return (
                  <IconButton component={Link} to={"/Restaurant"}>
                    <ArrowBackIcon sx={{
                      color: Colours.green,
                      fontSize: "2rem",
                    }} />
                  </IconButton>
                );
              }
            }
            )()}
            {(() => {
              if (ROLE === "restaurant") {
                return (
                  <IconButton component={Link} to={"/Restaurantprofile"}>
                    <ArrowBackIcon sx={{
                      color: Colours.green,
                      fontSize: "2rem",
                    }} />
                  </IconButton>
                );
              }
            }
            )()}
            <Typography variant="h4" gutterBottom component="div" sx={{
              width: '100%',
              textAlign: 'left',
              color: Colours.green,
              padding: "1rem",
              margin: 0,
              [theme.breakpoints.down('sm')]: {
                fontSize: '30px',
                padding: '2px',
              },
            }}>
              {name}

            </Typography>
          </Box>
          {/* ---------end of title area------------ */}


          {/* ---------------carousel area-------------------------- */}

          <Box sx={{
            padding: "1rem",
          }}>

            <Carousel
              itemsToShow={itemcount}
              easing={"ease"}
              breakPoints={theme.breakPoints = [
                { width: 1, itemsToShow: 1 },
                { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
                { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
                { width: 1450, itemsToShow: 5 },
                { width: 1750, itemsToShow: 6 },
              ]}
            >
              {/* <Box> */}


              {
                Array.from(details).map((item) => {

                  return (
                    <CarouselCard2 item={item} />
                  )

                })
              }


              {/* <CarouselCard2 item={item} />
              <CarouselCard2 item={item} />
              <CarouselCard2 item={item} />
              <CarouselCard2 item={item} />
              <CarouselCard2 item={item} />
              <CarouselCard2 item={item} /> */}

            </Carousel>
          </Box>
          {/* </Box> */}

          {/* ---------------end of carousel area-------------------------- */}
        </Box>

      </Box>

    </Box >

  )
}

export default FoodCategory
