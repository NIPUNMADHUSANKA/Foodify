import { Box } from '@mui/system';
import React from 'react';
import theme, { Colours } from '../../assets/theme/theme';

// when calling data, nned to take from there
import bgImage from '../../assets/images/offersbg.png';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import AddOfferForm from '../../components/restaurant/AddOfferForm';
// for scroll reveals
import Fade from 'react-reveal/Fade';


const AddOffers = () => {

    return (

        // ------main box----------------

        <Box sx={{
            margin: 0,
            padding: 0,
            width: "100%",
            height: "100vh",
            display: "flex",
            flexDirection: "row",
            background: `url(${bgImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            justifyContent:"center",
            [theme.breakpoints.down('sm')]: {
                flexDirection: "column-reverse",
            },
        }}>
            <Box scroll='paper' sx={{
                width:"80%",
                margin:"auto",
                height:"80vh",
                padding:"auto",
                overflow: "scroll",
                borderRadius:"0.8rem",
            }}>
                <AddOfferForm />
            </Box>
        </Box >
    )
}

export default AddOffers
