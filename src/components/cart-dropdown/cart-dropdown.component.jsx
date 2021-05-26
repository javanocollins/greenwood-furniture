import React from 'react'

import './cart-dropdown.style.scss'
import CustomButton from '../custom-button/custom-button.component'

function CartDropwDown() {
    return (
        <div className="Cart-dropdown">
            <div className="cart-items">
                <CustomButton>CHECKOUT</CustomButton>
            </div>
        </div>
    )
}

export default CartDropwDown
