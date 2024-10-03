import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../ImageWithGrayBackground/ImageWithGrayBackground';
import './ForthCollectionComponentSecond.css';
import imageUrl from '../Assets/Bags/fire-bag5.jpg'

import bag1 from '../Assets/Bags/bag-collections/bag-collection1.jpg';
import bag2 from '../Assets/Bags/bag-collections/green-bag-collection1.jpg';
import bag3 from '../Assets/Bags/bag-collections/brown-bag-collection1.jpg';
import ResortCollection from '../ResortCollection/ResortCollection';

const items = [
  { image: bag1, name: 'Item 1' },
  { image: bag2, name: 'Item 2' },
  { image: bag3, name: 'Item 3' },
];



export default function ForthCollectionComponentSecond() {
  return (
    <div className="forth-second-collection-component">
    <div className="resort-collection-container">
      <ResortCollection />
    </div>
    <div className="forth-second-collection-image-container">
      <Link to='/products' className="forth-second-collection-image-link">
        <img src={imageUrl} alt="Big Item" />
      </Link>
    </div>
  </div>
  );
}


