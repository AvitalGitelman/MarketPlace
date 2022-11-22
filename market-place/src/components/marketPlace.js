import './marketPlace.css'

import bananaPic from '../assests/pictures/banana.jpg'
import breadPic from '../assests/pictures/bread.jpg'
import milkPic from '../assests/pictures/milk.jpg'
import strawberryJamPic from '../assests/pictures/strawberry-jam.jpg'
import peanutButterPic from '../assests/pictures/peanut-butter.jpg'

import React from 'react'

class MarketPlace extends React.Component {

    render() {
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

    const renderedOutput = shoppingList.map(item => {
                                            return(<div className='shoppingList'>
                                                <div className='itemInfo'>
                                                    <div className='itemName'><u>Name:</u> {item.name} </div>
                                                    <div className='itemPrice'><u>Price:</u> {item.price} </div>
                                                </div>
                                                <img src={item.picture} alt={item.name}  className='itemPic'/>
                                            </div>)

                                        });

    return (
        <div>
            {renderedOutput}
        </div>)
    }
}

export default MarketPlace;
