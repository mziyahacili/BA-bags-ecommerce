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
      <button className="carousel-prev" onClick={prevItem}>&lt;</button>
      <button className="carousel-next" onClick={nextItem}>&gt;</button>
    </div>
  );
}
