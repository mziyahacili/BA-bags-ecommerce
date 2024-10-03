import React, { useContext } from 'react';
import './ProductDisplay.css';
import { ShopContext } from '../../Context/ShopContext';

export default function ProductDisplay(props) {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="product-display">
      <div className="product-images">
        <div className="main-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="image-list">
          <img src={product.image} alt={product.name} />
          <img src={product.image} alt={product.name} />
          <img src={product.image} alt={product.name} />
        </div>
      </div>
      <div className="product-details">
        <h1 className="product-name">{product.name}</h1>
        <p className="product-category">Wool</p>
        <p className="product-price">${product.price}</p>
        <div className="product-color">
          <span>Colour: Venus Rice (H05S)</span>
          <div className="color-swatch"></div>
        </div>
        <div className="product-size">
          <label htmlFor="size-select">Select Size</label>
          <select id="size-select">
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
          <a href="#" className="size-guide">Size Guide</a>
        </div>
        <button className="add-to-cart" onClick={() => addToCart(product.id)}>Add to Shopping Bag</button>
        <div className="product-links">
          <a href="#">Check in store availability? Find in store</a>
          <a href="#">You need help? Contact us</a>
        </div>
        <div className="product-description">
          <p>Pecora Nera® fabric – a hidden gem unearthed from the untamed beauty of New Zealand's dark merino sheep – is a testament to Loro Piana’s...</p>
        </div>
      </div>
    </div>
  );
}
