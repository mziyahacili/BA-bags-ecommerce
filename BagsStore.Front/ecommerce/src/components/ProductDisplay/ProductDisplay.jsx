import React, { useState, useContext, useEffect } from 'react'; 
import './ProductDisplay.css';
import { ShopContext } from '../../Context/ShopContext';

export default function ProductDisplay(props) {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  const [activeIndex, setActiveIndex] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isZoomed, setIsZoomed] = useState(false); // Состояние зума
  const [selectedImage, setSelectedImage] = useState(product.images[0]);


  //движение мышкой
  const [scale, setScale] = useState(1); // Масштаб изображения
  const [offsetY, setOffsetY] = useState(0); // Смещение по оси Y
  


  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  
    if (isZoomed) {
      const imageHeight = e.target.offsetHeight;
      const containerHeight = rect.height;
      
      // Высчитываем процент, на который смещается изображение
      const moveFactor = (cursorPos.y / containerHeight) * 100;
  
      // Двигаем картинку в пределах допустимого диапазона
      const maxOffsetY = imageHeight * (scale - 1); // Максимальное смещение
      setOffsetY(-(moveFactor * maxOffsetY) / 100);
    }
  };
  
  

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsZoomed(true); // Открыть зум
  };

  const handleCloseZoom = () => {
    setIsZoomed(false); // Отключить зум
    setScale(1); // Сброс масштаба
    setOffsetY(0); // Сброс положения по вертикали
  };

  const handleZoomThumbnailClick = (image, e) => {
    e.stopPropagation(); // Останавливаем всплытие события, чтобы зум не закрывался
    setSelectedImage(image); // Обновляем изображение в зуме
  };


  const handleWheel = (e) => {
    e.preventDefault();
    if (isZoomed) {
      setScale((prevScale) => {
        const newScale = prevScale + (e.deltaY > 0 ? -0.1 : 0.1); // Увеличиваем или уменьшаем
        return Math.min(Math.max(newScale, 1), 3); // Ограничение масштаба от 1 до 3
      });
    }
  };


  useEffect(() => {
    if (isZoomed) {
      document.body.style.overflow = 'hidden'; // Отключаем прокрутку
    } else {
      document.body.style.overflow = ''; // Включаем обратно, если зум выключен
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isZoomed]);

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
              onClick={() => handleImageClick(imgSrc)} // Открытие зума при клике
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
                  <path fillRule="evenodd" clipRule="evenodd" d="..." fill="#bdb4b2" fillOpacity="0.6"></path>
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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum tincidunt pulvinar. In eget malesuada felis.</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Section for Image Zoom */}
      {isZoomed && (
        <div className="modal" onClick={handleCloseZoom} onWheel={handleWheel}>
          <div className="zoom-container">
          <img
      src={selectedImage}
      alt="Zoomed product"
      className="zoomed-image"
      style={{ transform: `scale(${scale}) translateY(${offsetY}px)` }} // Применение вертикального смещения
    />
            
            {/* Vertical Thumbnail Menu - only visible when zoomed */}
            <div className="thumbnail-menu">
              {product.images.map((imgSrc, index) => (
                <div
                  className="thumbnail"
                  key={index}
                  onClick={(e) => handleZoomThumbnailClick(imgSrc, e)} // Обновляем изображение и останавливаем всплытие события
                >
                  <img src={imgSrc} alt={`Thumbnail ${index}`} className="thumbnail-image" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
