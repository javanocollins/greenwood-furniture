import React from 'react'
import ProductItems from '../../components/product-items/product-items.component';

import SHOP_DATA from "../ShopPage/shop.data.js";

function TvStandsPage() {
    const tvStands = SHOP_DATA[5]
    return (
        <div>
            <ProductItems products={ tvStands}/>
        </div>
    )
}

export default TvStandsPage
