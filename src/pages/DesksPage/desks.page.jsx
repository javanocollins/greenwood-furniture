import React from 'react';

import SHOP_DATA from "../ShopPage/shop.data.js";

import ProductItems from "../../components/product-items/product-items.component.jsx";

function DesksPage() {
    const desks = SHOP_DATA[4];
    return (
        <div>
            <ProductItems products={desks} />
        </div>
    );
}

export default DesksPage
