import { useMemo } from 'react';
import './ShoppingList.css';
import { Item } from './Item';
import { useNavigate } from 'react-router-dom';

import { useCallback } from 'react';
import { ShoppingCartButton } from './ShoppingCartButton';

export const ShoppingList = ({ products, onAddItem, onBuy }) => {
    const navigate = useNavigate();

    const totalCost = useMemo(() => products.reduce((prev, p) => prev + p.price, 0), [products]);
    const goBack = useCallback(() => navigate(`/`));

    const onBuyClick = () => {
        onBuy(totalCost);
        // goBack();
    }

    return <div className='shopping-cart-list'>
        <h1>Shopping Cart</h1>
        <h2>total cost: <span className='item-price'>{totalCost}</span></h2>
        <div className='list'>
            {products.map(({ amount, ...item }) => <Item item={item} amount={amount} onAddItem={onAddItem} />)}
        </div>
        <ShoppingCartButton onClick={goBack} isBack />
        {totalCost > 0 ? <div className='buy-cart-btn' onClick={onBuyClick}>
            <div>BUY</div>
        </div> : null}
    </div>
}