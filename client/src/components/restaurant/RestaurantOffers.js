import { Box, Button, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import authHeader from "../../services/auth-header";
import Carousel from '../carousel/carouselOffers';
import { Link } from 'react-router-dom';

import CardImage1 from '../../assets/images/offer1.jpg';
import CardImage2 from '../../assets/images/offer2.jpg';
import CardImage3 from '../../assets/images/offer5.jpg';
import CardImage4 from '../../assets/images/offer6.jpg';


import BackgroundImage from '../../assets/images/pv4WkDi.webp';
import theme, { Colours } from '../../assets/theme/theme';
import EditIcon from '@mui/icons-material/Edit';

const item1 = [
  {
    "id": "1",
    "title": "",
    "image": CardImage1,
    "decription": "",
    "name": "view"
  },
  {
    "id": "2",
    "title": "",
    "image": CardImage2,
    "decription": "",
    "name": "view"
  },
  {
    "id": "3",
    "title": "",
    "image": CardImage3,
    "decription": "",
    "name": "view"
  },
  {
    "id": "4",
    "title": "",
    "image": CardImage4,
    "decription": "",
    "name": "view"
  }
]

// use when giving separate button name


const title = "Offers";
const itemcount = 3;

var ROLE = null;

var ROLE2 = null;

const RestaurantOffers = (props) => {

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

  // ----------------------for store response data----------------------
  const [details, setDetails] = useState({});

  const [itemData, setItemData] = useState(null);

  useEffect((event) => {

    // ---------------------for the restaurant view-------------------------------
    const sendGetRequest = async () => {
      try {
        const resp = await axios.get('http://localhost:8072/FoodiFy/Restaurant/getOffersR', { headers: authHeader() });

        const details = resp.data;
        setDetails({ ...details });

        // console.log(details);
      } catch (err) {
        // Handle Error Here
        console.error(err);
      }
    };

    // --------------------------check the user and get data------------------------------------------
    if (ROLE === "restaurant") {
      sendGetRequest();
    }
    else {
      const id = props.rId
      const itemData = new FormData();
      itemData.append('id', id);
      setItemData(itemData);
      // --------------------------for customer view--------------------------------------
      const sendGetRequest2 = async () => {
        try {
          const resp = await axios.post(`http://localhost:8072/FoodiFy/Service/getOffersC`,itemData);

          const details = resp.data;
          setDetails({ ...details });

          // console.log(details);
        } catch (err) {
          // Handle Error Here
          console.error(err);
        }
      };

      sendGetRequest2();

    }

  }, []);

  return (
    <Box sx={{
      position: 'relative',
      width: '100%',
      p: '0px',
    }}>



      {(() => {
        if (ROLE === "restaurant") {
          return (
            <Button component={Link} to={"/Restaurant/AddOffers"} sx={{
              margin: '0.5rem',
              marginBottom: 0,
              marginTop: 4,
              width: "15%",
              background: Colours.yellow, '&:hover': {
                backgroundColor: Colours.green,
              },
              color: Colours.dark,
              fontSize: '1rem',
              hover: Colours.green,
              borderRadius: "1rem",
              Width: "20%",
              [theme.breakpoints.down('sm')]: {
                fontSize: '8px',
                padding: '2px',
                width: "25%",
              },
            }} endIcon={<EditIcon sx={{
              color: Colours.primary,
              [theme.breakpoints.down('sm')]: {
                '& svg': {
                  fontSize: "15px",
                }
              },
            }} />}>Add Offers
            </Button>
          );
        }
      }
      )()}

      {/* ------------------------------------if data available this shows----------------------------- */}
      {(() => {
        if (details !== null) {
          return (
            <Carousel item={details} title={title} bimage={BackgroundImage} count={itemcount} />
          );
        }
      }
      )()}
      {/* -----------------------else this shows------------------------------- */}
      {(() => {
        if (details === null) {
          return (
            <Typography variant='body' sx={{ color: Colours.grayWhite, }}>No offers to show</Typography>
          );
        }
      }
      )()}


    </Box>
  )
}

export default RestaurantOffers
