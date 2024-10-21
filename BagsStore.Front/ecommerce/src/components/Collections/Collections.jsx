import React from 'react';
import CollectionItem from '../CollectionItem/CollectionItem';
import './Collections.css';
import bag1 from '../Assets/Bags/bag-collections/bag-collection1.jpg';
import bag2 from '../Assets/Bags/bag-collections/green-bag-collection1.jpg';
import bag3 from '../Assets/Bags/bag-collections/brown-bag-collection1.jpg';

const collectionsData = [
  {
    image: bag1,
    category: 'MACRAME',
    name: 'Blue Bag',
    link: '/product/loom-bag',
  },
  {
    image: bag2,
    category: 'MACRAME',
    name: 'Green bag',
    link: '/product/small-leather-goods',
  },
  {
    image: bag3,
    category: 'MACRAME',
    name: 'Brown Bag',
    link: '/product/costume-jewellery',
  },
];

export default function Collections() {
  return (
    <div className="collection">
      <h1>Makrame collection</h1>
      <div className="collections-items">
        {collectionsData.map((item, index) => (
          <CollectionItem
            key={index}
            image={item.image}
            category={item.category}
            name={item.name}
            link={item.link}
            index={index} 
          />
        ))}
      </div>
      
    </div>
  );
}
