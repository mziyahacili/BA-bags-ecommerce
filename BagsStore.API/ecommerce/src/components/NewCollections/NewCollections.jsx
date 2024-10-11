import React from 'react';
import new_collection from '../Assets/new_collections';
import Item from '../Item/Item';
import './NewCollections.css';

export default function NewCollections() {
  return (
    <div className="new-collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_collection.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            imageHover={item.imageHover}
            index={i} 
          />
        ))}
      </div>
    </div>
  );
}
