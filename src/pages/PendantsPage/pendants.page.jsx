import React from "react";
import ProductItems from "../../components/product-items/product-items.component";

import SHOP_DATA from "../ShopPage/shop.data.js";

function PendantsPage() {
    const pendants = SHOP_DATA[3];
    return (
        <div>
            <ProductItems products={pendants} />
        </div>
    );
}

export default PendantsPage;
