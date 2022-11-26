import "./ItemPage.css";

import React from "react";
import { Link, useParams } from "react-router-dom";
import { findShoppingItemByName } from "../assests/shoppingList";

export default function ItemPage() {
    const { name } = useParams();
    const item = findShoppingItemByName(name);

    if (!item) return <div className="not-found-page">
        <h1>Item Not Found</h1>
        <Link to="/">go back to the market place</Link>
    </div>

    const { description, pagePicture, price, shop } = item;
    return <div className="item-page">
        <div className="more-info">
            <h1>{name}</h1>
            <div className='item-price'><span>Price:</span> {price}</div>
            <div className='item-shop'><span>Shop:</span> {shop}</div>
            <p>{description}</p>
            <Link to="/">go back</Link>
        </div>
        <img src={pagePicture} alt={name} />
    </div>
}