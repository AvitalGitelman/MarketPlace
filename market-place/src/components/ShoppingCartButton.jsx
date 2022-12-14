import './ShoppingCartButton.css';

import ShoppingCartIcon from '../assests/icons/shopping-cart-icon.webp';
import BackIcon from '../assests/icons/back-icon.png';

export const ShoppingCartButton = ({onClick, isBack}) => {

    return <div className="shopping-cart-btn" onClick={onClick}>
        <div className='img-wrapper'>
        <img src={isBack ? BackIcon : ShoppingCartIcon} alt="img" />
        </div>
    </div>
}