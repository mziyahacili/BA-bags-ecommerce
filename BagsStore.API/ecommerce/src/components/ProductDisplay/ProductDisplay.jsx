import React, { useState, useContext } from 'react';
import './ProductDisplay.css';
import { ShopContext } from '../../Context/ShopContext';

export default function ProductDisplay(props) {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  const [activeIndex, setActiveIndex] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isModalOpen, setIsModalOpen] = useState(false); // Состояние для модального окна
  const [selectedImage, setSelectedImage] = useState(''); // Выбранное изображение для модального окна

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const openModal = (imgSrc) => {
    setSelectedImage(imgSrc);
    setIsModalOpen(true);
    document.body.classList.add('modal-open'); // Добавляем класс для отключения прокрутки
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.classList.remove('modal-open'); // Убираем класс для восстановления прокрутки
  };



  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  
  return (
    <div className="product-display">
      {/* Product Images Section */}
      <div className="product-images">
        <div className="image-list">
          {product.images.map((imgSrc, index) => (
            <div 
              className="image-container" 
              key={index} 
              onMouseMove={handleMouseMove}
              onClick={() => handleImageClick(imgSrc)} // Открытие модального окна при нажатии
            >
              <img src={imgSrc} alt={product.name} className="product-image" />
              <div 
                className="plus-icon" 
                style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
              >
                {/* SVG иконка */}
                <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_b_1276_80052)">
                    <circle cx="48.421" cy="48.3863" r="35.9479" fill="#bdb4b2" fillOpacity="0.64"></circle>
                    <circle cx="48.421" cy="48.3863" r="35.4479" stroke="#bdb4b2" strokeOpacity="0.1"></circle>
                  </g>
                  <path fillRule="evenodd" clipRule="evenodd" d="M94.9999 48.3862C94.9999 74.1105 74.1462 94.9642 48.4218 94.9642C38.3006 94.9642 28.9334 91.7361 21.2937 86.2532L20.5772 86.9696C28.4054 92.6288 38.0241 95.9642 48.4218 95.9642C74.6985 95.9642 95.9999 74.6628 95.9999 48.3862C95.9999 37.9884 92.6645 28.3697 87.0053 20.5416L86.2888 21.258C91.7717 28.898 94.9999 38.2653 94.9999 48.3862ZM81.4476 14.1374L80.7404 14.8446C74.6097 8.93584 66.8632 4.69226 58.2287 2.84213C55.0678 2.16482 51.787 1.80811 48.4218 1.80811C22.6975 1.80811 1.84375 22.6618 1.84375 48.3862C1.84375 60.9373 6.80807 72.3289 14.8803 80.7047L14.1731 81.4119C5.91993 72.8551 0.84375 61.2134 0.84375 48.3862C0.84375 22.1095 22.1452 0.808105 48.4218 0.808105C51.8579 0.808105 55.2088 1.17235 58.4382 1.86432C67.2647 3.75559 75.1829 8.09506 81.4476 14.1374Z" fill="#bdb4b2" fillOpacity="0.6"></path>
                  <line x1="47.4072" y1="48.0928" x2="53.3332" y2="48.0928" stroke="#121010"></line>
                  <line x1="42.6665" y1="48.0928" x2="47.5554" y2="48.0928" stroke="#121010"></line>
                  <line className="st3" x1="48" y1="48.6" x2="48" y2="42.7" stroke="#121010"></line>
                  <line className="st3" x1="48" y1="53.3" x2="48" y2="48.4" stroke="#121010"></line>
                  <defs>
                    <filter id="filter0_b_1276_80052" x="-12.5269" y="-12.5615" width="121.896" height="121.896" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                      <feGaussianBlur in="BackgroundImageFix" stdDeviation="12.5"></feGaussianBlur>
                      <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1276_80052"></feComposite>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1276_80052" result="shape"></feBlend>
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Details Section */}
      <div className="product-details">
        <h1 className="product-name">{product.name}</h1>
        <p className="product-category">Wool</p>
        <p className="product-price">{`₼ ${product.new_price.toFixed(2)}`}</p>

        <button className="add-to-cart" onClick={() => addToCart(product.id)}>
          Add to Shopping Bag
        </button>

        {/* Accordion Section */}
        <div className="accordion-section">
          {['Product Details', 'Care & Maintenance', 'Shipping Information', 'Payment & Security', 'Return & Exchange'].map((item, index) => (
            <div className={`accordion-item ${activeIndex === index ? 'active' : ''}`} key={index}>
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

      {/* Modal for Image Zoom */}
      {isModalOpen && (
        <div className="modal" onClick={handleCloseModal}>
          <div
            className="modal-content"
            style={{ backgroundImage: `url(${product.image})` }}
            onMouseDown={(e) => e.stopPropagation()}
          >
            <img
              src={product.image}
              alt={product.name}
              onMouseDown={(e) => {
                e.preventDefault();
                const startY = e.clientY;
                const initialY = parseFloat(getComputedStyle(e.currentTarget.parentElement).getPropertyValue('--y')) || 0;

                const handleMouseMove = (moveEvent) => {
                  const deltaY = moveEvent.clientY - startY;
                  const newY = initialY + deltaY;
                  e.currentTarget.parentElement.style.setProperty('--y', `${newY}px`);
                };

                const handleMouseUp = () => {
                  document.removeEventListener('mousemove', handleMouseMove);
                  document.removeEventListener('mouseup', handleMouseUp);
                };

                document.addEventListener('mousemove', handleMouseMove);
                document.addEventListener('mouseup', handleMouseUp);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
