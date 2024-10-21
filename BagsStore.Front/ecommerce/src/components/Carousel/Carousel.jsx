import React, { useState, useRef, useEffect } from 'react';
import './Carousel.css';

export default function Carousel({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const nextItem = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevItem = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleMouseDown = (e) => {
    setStartX(e.clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startX;
    if (deltaX > 50) {
      prevItem();
      setIsDragging(false);
    } else if (deltaX < -50) {
      nextItem();
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="carousel" ref={carouselRef} onMouseDown={handleMouseDown}>
      <div
        className="carousel-items"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {items.map((item, index) => (
          <div className="carousel-item" key={index}>
            <img src={item.image} alt={item.name} />
            <div className="carousel-item-details">
              <p>{item.name}</p>
            </div>
          </div>
        ))}
      </div>


      <button className="carousel-prev" onClick={prevItem}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="1 0 21 23" width="90" height="90">
          <path 
            d="M14 17a1 1 0 0 1-.707-.293l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 1 1 1.414 1.414L11.414 12l3.293 3.293A1 1 0 0 1 14 17z" 
           />
        </svg>
      </button>



      <button className="carousel-next" onClick={nextItem}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="1 0 21 23" width="90" height="90"><path d="m14.707 12.707-4 4a1 1 0 0 1-1.414-1.414L12.586 12 9.293 8.707a1 1 0 1 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414z"/></svg>
      </button>
    </div>
  );
}
