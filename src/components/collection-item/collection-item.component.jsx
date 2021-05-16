import React, { useState } from "react";
import "./collection-item.styles.scss";
import "../../assets/styles/_button.scss";

const CollectionItem = ({ items, collectionItem }) => {
  const [style, setStyle] = useState({ display: "none" });

  return (
      <div className="item">
          <div
              className="full-item"
              key={collectionItem.id}
              onMouseEnter={(e) => {
                  setStyle({ display: "block" });
              }}
              onMouseLeave={(e) => {
                  setStyle({ display: "none" });
              }}
          >
              <img
                  className="item-image"
                  src={
                      require(`./../../assets/images/${collectionItem.imageUrl}`)
                          .default
                  }
                  alt=""
              />
              <button style={style} className="add-to-cart-btn">
                  Add to cart
              </button>
              <div className="item-description">
                  <p>{collectionItem.name}</p>
                  <p>${collectionItem.price}</p>
              </div>
          </div>
      </div>
  );
};

export default CollectionItem;
