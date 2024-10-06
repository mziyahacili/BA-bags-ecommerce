import React from 'react';
import CollectionItem from '../CollectionItem/CollectionItem';
import './Collections.css';
import bag1 from '../Assets/Bags/bag-collections/bag-collection1.jpg';
import bag2 from '../Assets/Bags/bag-collections/green-bag-collection1.jpg';
import bag3 from '../Assets/Bags/bag-collections/brown-bag-collection1.jpg';

const collectionsData = [
  {
    image: bag1,
    category: 'WOMAN',
    name: 'Loom Bag',
    link: '/product/loom-bag',
  },
  {
    image: bag2,
    category: 'MAN',
    name: 'Small Leather Goods',
    link: '/product/small-leather-goods',
  },
  {
    image: bag3,
    category: 'WOMAN',
    name: 'Costume Jewellery',
    link: '/product/costume-jewellery',
  },
];

export default function Collections() {
  return (
    <div className="collections">
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
  );
}
