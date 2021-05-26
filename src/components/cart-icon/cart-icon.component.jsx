import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

// Style imports
import "./cart-icon.styles.scss";

function CartIcon({ toggleCartHidden, itemCount }) {
    return (
        <div className="Cart-icon" onClick={toggleCartHidden}>
            <ShoppingIcon className="Shopping-icon" />
            <span className="item-count">{itemCount}</span>
        </div>
    );
}

const mapStateToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
});
export default connect(null, mapStateToProps)(CartIcon);
