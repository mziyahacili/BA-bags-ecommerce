import React from 'react';
import './ResortCollection.css';
import image from '../Assets/Bags/model.jpg'
import { Link } from 'react-router-dom';

const ResortCollection = () => {
  return (
    <div className="resort-collection">
      <div className="image-container">
        <img src={image} alt="The Resort 2024 Collection" />
      </div>
      <div className="text-content">
        <h2>The Resort 2024 Collection</h2>
        <p>Effortless creations defined by artisanship, lightness, and unique detailing.</p>
        <div className="links">
        <Link to='/products' className="collection-link">
            <span className="collection-link-line left"></span>
            Woman
            <span className="collection-link-line right"></span>
            <div className="collection-underline"></div>
          </Link>
          <Link to='/products' className="collection-link">
            <span className="collection-link-line left"></span>
            Man
            <span className="collection-link-line right"></span>
            <div className="collection-underline"></div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResortCollection;
