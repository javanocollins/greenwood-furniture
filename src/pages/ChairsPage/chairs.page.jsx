import React from 'react'
import ProductItems from '../../components/product-items/product-items.component.jsx';
import SHOP_DATA from "../ShopPage/shop.data.js";

function ChairsPage() {
    const chairs = SHOP_DATA[1]
    return (
        <div>
            <ProductItems products={chairs} />
        </div>
    )
}

export default ChairsPage
