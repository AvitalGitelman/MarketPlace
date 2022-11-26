import './marketPlace.css'

import bananaPic from '../assests/pictures/banana.jpg'
import breadPic from '../assests/pictures/bread.jpg'
import milkPic from '../assests/pictures/milk.jpg'
import strawberryJamPic from '../assests/pictures/strawberry-jam.jpg'
import peanutButterPic from '../assests/pictures/peanut-butter.jpg'

import React from 'react'

const shoppingList = [
    {
        name: "bread",
        price: 5,
        picture: breadPic
    },
    {
        name: "banana",
        price: 10,
        picture: bananaPic
    },
    {
        name: "milk",
        price: 17,
        picture: milkPic
    },
    {
        name: "strawberry jam",
        price: 8,
        picture: strawberryJamPic
    },
    {
        name: "peanut butter",
        price: 11,
        picture: peanutButterPic
    }
];

export default function MarketPlace() {
    return (
        <div className='market-place'>
            <h1>The Market Place</h1>
            {shoppingList.map(({ name, price, picture }) => (<div className='shopping-list'>
                <div className='item-info'>
                    <div className='item-name'><span>Name:</span> {name}</div>
                    <div className='item-price'><span>Price:</span> {price}</div>
                </div>
                <img src={picture} alt={name} className='item-img' />
            </div>))}
        </div>)
}
