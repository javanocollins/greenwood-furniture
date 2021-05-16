import React, { useState } from "react";
import CollectinPreview from "../../components/collection-preview/collection-preview.component";
import CollectionItem from "../../components/collection-item/collection-item.component";
import SHOP_DATA from "../ShopPage/shop.data.js";

// Style Imports
import '../../assets/styles/_product-page.scss'
import ProductItems from "../../components/product-items/product-items.component";

// '../../assets/images/sofas/'

function SofasPage() {
    const sofas = SHOP_DATA[0]
    console.log(sofas.items);
    return <ProductItems products={sofas} />;
}

export default SofasPage;
