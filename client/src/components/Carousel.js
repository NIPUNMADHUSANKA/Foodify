import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@material-ui/core';
import FoodCard from './home/FoodCard.js';

function Example(props)
{
    var items = [
        <FoodCard />,
        <FoodCard />,
        <FoodCard />
    ]

    return (
        <Carousel >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <FoodCard>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </FoodCard>
    )
}

export default Example;