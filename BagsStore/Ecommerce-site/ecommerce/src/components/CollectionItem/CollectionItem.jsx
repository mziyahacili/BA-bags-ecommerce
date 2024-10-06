import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './CollectionItem.css';

export default function CollectionItem({ image, category, name, link, index }) {
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.transitionDelay = `${index * 0.4}s`; // задержка для каждого элемента
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, [index]);

  return (
    <div className="collection-item" ref={itemRef}>
      <img src={image} alt={name} />
      <div className="collection-item-details">
        <p>{category}</p>
        <h2>{name}</h2>
        <Link to={link} className="discover-more">
          <span className="discover-more-line left"></span>
          Discover More
          <span className="discover-more-line right"></span>
          <div className="underline"></div>
        </Link>
      </div>
    </div>
  );
}
