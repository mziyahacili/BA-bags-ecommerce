import React, { useState ,useContext } from 'react';
import './ProductDisplay.css';
import { ShopContext } from '../../Context/ShopContext';

export default function ProductDisplay(props) {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="product-display">


     <div className="product-images">

        <div className="image-list">
          <img src={product.image} alt={product.name} />
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
        <button className="add-to-cart" onClick={() => addToCart(product.id)}>
          Add to Shopping Bag
        </button>

        {/* Секция аккордеона */}
        <div className="accordion-section">
  {[ "Product Details", "Care & Maintenance", "Shipping Information", "Payment & Security", "Return & Exchange" ].map((item, index) => (
    <div className={`accordion-item ${activeIndex === index ? "active" : ""}`} key={index}>
      <button className="accordion-button" onClick={() => toggleAccordion(index)}>
        {item}
      </button>
      <div className="accordion-content">
        <p>{`Details about ${item.toLowerCase()}...`}</p>
      </div>
    </div>
  ))}
</div>

      </div>
    </div>
  );
}
