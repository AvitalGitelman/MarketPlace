import "./ItemPage.css";

import React, {useCallback} from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ShoppingCartButton } from './ShoppingCartButton';
import { getItem, useHttp } from "../providers/itemsProvider";

export default function ItemPage() {
    const navigate = useNavigate();
    const { id } = useParams();

    const {value: item, isLoading} = useHttp(async () =>await  getItem(id), true);


    const goBack = useCallback(() => navigate(`/`));

    if (isLoading) return  <div className="not-found-page">
        <h1>Loading...</h1>
    </div>

    if (!item) return <div className="not-found-page">
        <h1>Item Not Found</h1>
        <Link to="/">go back to the market place</Link>
    </div>

    const { description, pagePicture, price, shop, name } = item;
    return <div className="item-page">
        <div className="more-info">
            <h1>{name}</h1>
            <div className='item-price'><span>Price:</span> {price}</div>
            <div className='item-shop'><span>Shop:</span> {shop}</div>
            <p>{description}</p>
            <Link to="/">go back</Link>
        </div>
        <img className="item-page-img" src={pagePicture} alt={name} />
        <ShoppingCartButton onClick={goBack} isBack />
    </div>
}