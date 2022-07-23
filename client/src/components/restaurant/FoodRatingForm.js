import * as React from 'react';
import Box from '@mui/material/Box';
import { Button, Typography } from '@mui/material';
import theme, { Colours } from '../../assets/theme/theme';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

// --------------------------------rating values---------------------------
const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};

function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}
// --------------------------------------------------------------------------------

// ---------------------------------text fied css style-----------------------

const CommentArea = styled(TextField)({
    background: Colours.secondary,
    margin: "auto",
    borderRadius: "1rem",
    '&:hover': {
        backgroundColor: Colours.secondary,
    },

    '& label.Mui-focused': {
        color: '#95CD41',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#95CD41',
    },
    '& label': {
        borderColor: '#EFEAEA',
    },

    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#757575',
            borderRadius: "1rem",
        },
        '&:hover fieldset': {
            borderColor: '#FAC213',
            borderRadius: "1rem",

        },
        '&.Mui-focused fieldset': {
            borderColor: '#95CD41',
        },
    },
});
// ---------------------------------------------------------------------

export default function MultilineTextFields() {

    // ----------------for star rating-----------------------------
    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);
    // ------------------------------------------------------------
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            width: "60%",
            margin: "auto",
            marginRight: "30%",
            marginTop: "20%",
        }}>
            <Typography variant='h4' sx={{
                color: Colours.green,
                [theme.breakpoints.down('sm')]: {
                    fontSize: '20px',
                    padding: '2px',
                },
            }}>
                Add Rating
            </Typography>

            {/* ---------------------form area--------------- */}
            <Box
                component="form"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    padding: "1rem",
                    background: Colours.darkform,
                    borderRadius: "1rem",

                    '& .MuiTextField-root': { m: 1, width: '96%' },
                }}
                noValidate
                autoComplete="off"
            >
                {/* -------food name------------- */}
                <Typography variant='h5' sx={{
                    color: Colours.green,
                    [theme.breakpoints.down('sm')]: {
                        fontSize: '14px',
                        padding: '2px',
                    },
                }}>
                    Food Name
                </Typography>

                {/* ---------------text area----------------- */}
                <CommentArea
                    name='comment'
                    label="Add Comment"
                    multiline
                    rows={6}
                    placeholder="Comment"
                />

                {/* ---------------star rating area-------------- */}
                <Box sx={{
                    width: "100%",
                }}>
                    <Typography component="legend" sx={{
                        color: Colours.green,
                        marginLeft:"0.5rem",
                        [theme.breakpoints.down('sm')]: {
                            fontSize: '8px',
                            padding: '2px',
                        },
                    }}>
                        Rate
                    </Typography>


                    {/* ----------------------for star rating------------------------- */}
                    <Box
                        sx={{
                            width: 200,
                            display: 'flex',
                            alignItems: 'center',
                            marginLeft:"0.5rem",
                        }}
                    >
                        <Rating
                            name="rating"
                            value={value}
                            precision={0.5}
                            getLabelText={getLabelText}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                            onChangeActive={(event, newHover) => {
                                setHover(newHover);
                            }}
                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                        />
                        {value !== null && (
                            <Box sx={{ ml: 2, color: Colours.formWhite }}>{labels[hover !== -1 ? hover : value]}</Box>
                        )}
                    </Box>
                    {/* ----------------------end of star rating------------------------- */}

                </Box>
                {/* ---------------end of star rating area-------------- */}

                {/* -----------------------------submit and cancel area--------------------------- */}
                <Box sx={{
                    marginTop: "1rem"
                }}>
                    <Button type='submit' variant="contained" sx={{
                        margin: '0.5rem',
                        background: Colours.green, '&:hover': {
                            backgroundColor: Colours.yellow,
                        },
                        color: Colours.dark,
                        fontSize: '1rem',
                        hover: Colours.green,
                        borderRadius: "1rem",
                        [theme.breakpoints.down('sm')]: {
                            fontSize: '8px',
                            padding: '2px',
                        },
                    }}>Submit</Button>

                    <Button variant="contained" sx={{
                        margin: '0.5rem',
                        background: Colours.grayWhite, '&:hover': {
                            backgroundColor: Colours.secondary,
                        },
                        color: Colours.dark,
                        fontSize: '1rem',
                        hover: Colours.green,
                        borderRadius: "1rem",
                        [theme.breakpoints.down('sm')]: {
                            fontSize: '8px',
                            padding: '2px',
                        },
                    }}>Cancel</Button>
                </Box>
                {/* ---------------------------------end of submit and cancel arae---------------------- */}


            </Box>
            {/* -----------------------end of form---------------- */}

        </Box>
    );
}