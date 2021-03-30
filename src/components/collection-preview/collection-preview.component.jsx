import React from "react";
import "./collection-preview.styles.scss";

// Component imports
import CollectionItem from "../collection-item/collection-item.component";

const CollectinPreview = ({ title, items }) => {
  return (
    <div className="collection-preview container">
      <h1 className="itemTitle">{title}</h1>
      <div className="preview">
        {/* Render 4 items from shop.data.js */}
        {items.slice(0, 4).map((item) => (
          <CollectionItem items={items} collectionItem={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectinPreview;
