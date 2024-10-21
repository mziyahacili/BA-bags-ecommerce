import React from 'react';
import './IconSection.css';
import image from '../Assets/Bags/water-bag7.jpg'
import { Link } from 'react-router-dom';

const IconSection = () => {
  return (
    <div className="icon-section">
      <div className="text-content">
        <h2>Icons: a keen reflection of impeccable form and function</h2>
        <p>Icons are timeless pieces, perfected season after season with refreshed interpretations</p>
      </div>
      <div className="image-container-icon">
        <img src={image} alt="Our Selection" />
        <div className="selection-block">
          <h3>Our Selection</h3>
          <Link to='/products' className="collection-link">
          <span className="collection-link-line left"></span>
          Discover More
          <span className="collection-link-line right"></span>
          <div className="collection-underline"></div>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default IconSection;
