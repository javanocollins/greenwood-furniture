import React, { useState } from "react";
import "./collection-item.styles.scss";
import "../../assets/styles/_button.scss";

import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";


const CollectionItem = ({ items, item, addItem }) => {
    const [style, setStyle] = useState({ display: "none" });
    const { id, name, price, imageUrl } = item;

    return (
        <div className="item">
            <div
                className="full-item"
                key={id}
                onMouseEnter={(e) => {
                    setStyle({ display: "block" });
                }}
                onMouseLeave={(e) => {
                    setStyle({ display: "none" });
                }}
            >
                <img
                    className="item-image"
                    src={
                        require(`./../../assets/images/${imageUrl}`)
                            .default
                    }
                    alt=""
                />
                <button onClick={() => addItem(item)} style={style} className="add-to-cart-btn">
                    Add to cart
                </button>
                <div className="item-description">
                    <p>{name}</p>
                    <p>${price}</p>
                </div>
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);
