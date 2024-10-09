import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../Carousel/Carousel';
import './ForthCollectionComponent.css';
import imageUrl from '../Assets/Bags/water-bag6.jpg'


import bag1 from '../Assets/Bags/bag-collections/bag-collection1.jpg';
import bag2 from '../Assets/Bags/bag-collections/green-bag-collection1.jpg';
import bag3 from '../Assets/Bags/bag-collections/brown-bag-collection1.jpg';

const items = [
  { image: bag1, name: 'Item 1' },
  { image: bag2, name: 'Item 2' },
  { image: bag3, name: 'Item 3' },
];


export default function ForthCollectionComponent() {
  return (
    <div className="forth-collection-component">
      <Link to='/products' className="forth-collection-image-link">
        <img src={imageUrl} alt="Big Item" />
      </Link>

      <div className="forth-collection-carousel-container">
      
        <h2>THE LOOK</h2>
        <Carousel items={items} />
        <button className="view-all">View All Looks</button>


      </div>

    </div>
  );
}


