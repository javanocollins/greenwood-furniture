import React, { Component } from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import SHOP_DATA from "./shop.data";

export class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    return (
      <div className="container">
        <h1>Collections</h1>
        {this.state.collections.map((item) => (
          <CollectionPreview title={item.title} items={item.items} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
