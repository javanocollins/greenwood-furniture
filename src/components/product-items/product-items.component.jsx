import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
// Style Imports
import "./product-items.style.scss";

import SHOP_DATA from "../../pages/ShopPage/shop.data";

import { withRouter } from "react-router-dom";

function ProductItems({ products }) {
    return (
        <div className="TablesPage ProductPage container">
            <h1 className="ProductPage-title">{products.title}</h1>
            <div className="ProductPage-container">
                {products.items.map((item) => {
                    return (
                        <div className="ProductPage-item">
                            <CollectionItem
                                items={products}
                                collectionItem={item}
                            />
                        </div>
                    );
                    console.log(products);
                })}
            </div>
        </div>
    );
}

export default ProductItems;
