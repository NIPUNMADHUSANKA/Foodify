import { Box } from '@mui/system';
import React from 'react';
import theme, { Colours } from '../../assets/theme/theme';

// when calling data, nned to take from there
import bgImage from '../../assets/images/offersbg.png';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import AddOfferForm from '../../components/restaurant/AddOfferForm';
// for scroll reveals
import Fade from 'react-reveal/Fade';

// ----------------this is tem until data call--------
const details = {
    "detail": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quosblanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eumquasi quidem quibusdam.",
}

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
            <Box sx={{
                width:"70%",
                margin:"auto",
                height:"90vh",
            }}>
                <AddOfferForm />
            </Box>
        </Box >
    )
}

export default AddOffers
