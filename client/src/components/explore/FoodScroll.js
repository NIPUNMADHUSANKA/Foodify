import React from 'react'
import FoodCard from './FoodCard.js'
import Carousel from '../carousel/carouselExplore.js'
// import { itemClassName } from 'react-horizontal-scrolling-menu/dist/types/constants.js'

const FoodScroll = () => {
    return(
        <Carousel item = {FoodCard} title = "Food" />
    )
}

export default FoodScroll