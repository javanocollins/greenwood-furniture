import React from 'react';
import CollectionItem from '../collection-item/collection-item.component'
// Style Imports
import './product-items.style.scss'

import SHOP_DATA from '../../pages/ShopPage/shop.data';


function ProductItems({products}) {
    return (
        <div className="TablesPage ProductPage container">
            {products.items.map((item) => {
                return (
                    <div className="ProductPage-item">
                        <CollectionItem
                            items={products}
                            collectionItem={item}
                        />
                    </div>
                );
            })}
        </div>
    );
}

export default ProductItems
