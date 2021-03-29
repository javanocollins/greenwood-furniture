import React from 'react'

const CollectionItem = () => {
    return (
      <div>
        {items.slice(0, 4).map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    );
}

export default CollectionItem
