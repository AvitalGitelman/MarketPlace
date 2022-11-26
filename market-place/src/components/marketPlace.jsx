import './marketPlace.css';

import React from 'react';


import { shoppingList } from "../assests/shoppingList";

import { useNavigate } from 'react-router-dom';

export default function MarketPlace() {
    const navigate = useNavigate();

    const onClickItem = (name) => navigate(`/item/${name}`);

    return (
        <div className='market-place'>
            <h1>The Market Place</h1>
            {shoppingList.map(({ name, price, picture }) => (<div className='shopping-list' key={name} onClick={() => onClickItem(name)}>
                <div className='item-info'>
                    <div className='item-name'><span>Name:</span> {name}</div>
                    <div className='item-price'><span>Price:</span> {price}</div>
                </div>
                <img src={picture} alt={name} className='item-img' />
            </div>))}
        </div>)
}
