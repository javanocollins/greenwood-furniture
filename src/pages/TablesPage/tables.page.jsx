import React from 'react';
import SHOP_DATA from "../ShopPage/shop.data.js";
import CollectionItem from "../../components/collection-item/collection-item.component";

import '../../assets/styles/_product-page.scss'
import ProductItems from '../../components/product-items/product-items.component.jsx';

function TablesPage() {
    const tables = SHOP_DATA[2];
    return (
        <ProductItems products={tables}/>
    );
}

export default TablesPage
