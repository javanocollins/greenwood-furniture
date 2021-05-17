import React, { Component } from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import SHOP_DATA from "./shop.data";

import './shoppage.style.scss'

import { withRouter } from "react-router-dom";

export class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    return (
      <div className="ShopPage">
        <h1 className="ShopPage-h1" style={{ textAlign: "center", textTransform: "uppercase"}}>Collection</h1>
        {this.state.collections.map((item, index) => (
          <CollectionPreview key={index} title={item.title} items={item.items} routeName={ item.routeName}/>
        ))}
      </div>
    );
  }
}

export default ShopPage;
