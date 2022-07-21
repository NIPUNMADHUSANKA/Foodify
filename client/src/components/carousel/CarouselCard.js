import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import theme, { Colours } from '../../assets/theme/theme'

const CarouselCard = (props) => {
    return (
        // ---------main card area------------
        <Card sx={{
            maxWidth: 345,
            width: '15rem',
            margin:1,
            background: Colours.grayWhite,
            transition: 'transform .2s', '&:hover': {
                transform: 'scale(1.04)',
              },
            [theme.breakpoints.down('sm')]: {
                width:'12rem',
            },
        }}>
            {/* ---------------card action area---------------------- */}
            <CardActionArea>
                {/* -------------------image area------------------------- */}
                <CardMedia
                    component="img"
                    height="235vh"
                    image={props.item.image}
                    alt="green iguana"
                />

                {/* ---------------------card content area---------------------- */}
                <CardContent>
                    {/* title, if any */}
                    <Typography gutterBottom variant="h5" component="div" sx={{
                        textAlign:'center',
                        [theme.breakpoints.down('sm')]: {
                            fontSize: '14px',
                            padding: '2px',
                        },
                    }}>
                        {/* titel, if any */}
                    </Typography>
                    {/* description, if any */}
                    <Typography variant="body2" color="text.secondary" sx={{
                        textAlign:'center',
                        [theme.breakpoints.down('sm')]: {
                            fontSize: '10px',
                            padding: '2px',
                        },
                    }}>
                        {props.item.decription}
                    </Typography>

                </CardContent>
                {/* ---------------------end of card content area---------------------- */}

            </CardActionArea>
            {/* ---------------end of card action area---------------------- */}

            {/* -------------------------card button area---------------------- */}
            <CardActions sx={{
                justifyContent:'center',
                alignItems:'center',
            }}>
                <Button size="small" sx={{
                    margin: '6px',
                    background: Colours.green, '&:hover': {
                        backgroundColor: Colours.yellow,
                    },
                    color: Colours.dark,
                    fontSize: '0.8rem',
                    [theme.breakpoints.down('sm')]: {
                        fontSize: '8px',
                        padding: '2px',
                    },
                }}>
                    {props.item.title}
                </Button>
            </CardActions>
            {/* -------------------------end of card button area---------------------- */}

        </Card>
        //   ----------------end of card area---------------
    )
}

export default CarouselCard
