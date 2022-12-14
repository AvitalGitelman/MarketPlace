import './marketPlace.css';

import React from 'react';


import { Item } from './Item';

import { useNavigate } from 'react-router-dom';
import { ShoppingCartButton } from './ShoppingCartButton';
import { getItems, useHttp } from '../providers/itemsProvider';

export default function MarketPlace({ onAdd }) {
    const navigate = useNavigate();
    const {value: shoppingList, isLoading} = useHttp(getItems, true);

    const onClickItem = (id) => navigate(`/item/${id}`);
    const onClickCart = () => navigate(`/cart`);

    return (
        <div className='market-place'>
            <h1>The Market Place</h1>
            {isLoading ? <h2>loading items...</h2> : <div className='market-shopping-list'>
                {shoppingList?.map((item) => <Item item={item} key={item._id} onClick={onClickItem} onAddItem={onAdd} />)}
            </div>}
            
            <ShoppingCartButton onClick={onClickCart} />
        </div>)
}

