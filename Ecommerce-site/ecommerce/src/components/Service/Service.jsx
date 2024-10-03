import React from 'react'
import './Service.css';
import shipIcon from '../Assets/Icons/ship-icon.avif'
import writeIcon from '../Assets/Icons/write-icon.avif'
import boxIcon from '../Assets/Icons/box-icon.avif'
import { Link } from 'react-router-dom';

export default function Service() {
  return (
    <div className="service-section">
    <h2>At your <span>service</span></h2>
    <div className="service-container">
      <div className="service-item">
        <img src={shipIcon} alt="Free Shipping" />
        <p>Free Shipping</p>
        <Link to='/products' className="collection-link">
          <span className="collection-link-line left"></span>
          Discover More
          <span className="collection-link-line right"></span>
          <div className="collection-underline"></div>
        </Link>
      </div>
      <div className="service-item">
        <img src={writeIcon} alt="Free Returns and Exchange" />
        <p>Free Returns and Exchange</p>
        <Link to='/products' className="collection-link">
          <span className="collection-link-line left"></span>
          Discover More
          <span className="collection-link-line right"></span>
          <div className="collection-underline"></div>
        </Link>
      </div>
      <div className="service-item">
        <img src={boxIcon} alt="Book a Private Appointment in Store" />
        <p>Book a Private Appointment in Store</p>
        <Link to='/products' className="collection-link">
          <span className="collection-link-line left"></span>
          Discover More
          <span className="collection-link-line right"></span>
          <div className="collection-underline"></div>
        </Link>
      </div>
    </div>
  </div>
  )
}
