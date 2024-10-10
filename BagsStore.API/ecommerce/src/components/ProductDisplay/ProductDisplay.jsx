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
       
        
        <button className="add-to-cart" onClick={() => addToCart(product.id)}>
          Add to Shopping Bag
        </button>




        {/* Секция аккордеона */}
          <div div className="accordion-section">
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
