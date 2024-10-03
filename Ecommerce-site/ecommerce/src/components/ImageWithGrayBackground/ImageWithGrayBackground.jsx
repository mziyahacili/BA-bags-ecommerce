import React from 'react';
import './ImageWithGrayBackground.css';

export default function ImageWithGrayBackground({ mainImage, secondaryImage }) {
  return (
    <div className="image-gray-background-container">
      <div className="main-image-container">
        <img src={mainImage} alt="Main" />
      </div>
      <div className="gray-background-container">
        <img src={secondaryImage} alt="Secondary" />
      </div>
    </div>
  );
}
