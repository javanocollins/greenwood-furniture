import React from "react";
import './collection-preview.styles.scss'

const CollectinPreview = ({ title, items }) => {
  return (
    <div className="collection-preview container">
      <h1 className="itemTitle">{title}</h1>
      <div className="preview">
        {/* Render 4 items from shop.data.js */}
        {items.slice(0, 4).map((item) => (
          <div className="full-item" key={item.id}>
            <img className='item-image' src={`${item.imageUrl}`} alt="" />
            <div className="item-description">
              <p>{item.name}</p>
              <p>{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectinPreview;
