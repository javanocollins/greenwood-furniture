import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import React from 'react';
import './cart-icon.styles.scss'

function CartIcon() {
    return (
        <div className="Cart-icon">
            <ShoppingIcon className="Shopping-icon" />
            <span className="item-count">0</span>
        </div>
    )
}

export default CartIcon
