import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

export default function Item(props) {
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.transitionDelay = `${props.index * 0.2}s`; // задержка для каждого элемента
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
  }, [props.index]);

  return (
    <div className="item" ref={itemRef}>
      <Link to={`/product/${props.id}`}>
        <img src={props.image} alt={props.name} />
      </Link>
      <div className="item-details">
        <p>{props.name}</p>
        <div className="item-prices">
          <div className="item-price-new">
            {props.new_price}
          </div>
          <div className="item-price-old">
            {props.old_price}
          </div>
        </div>
      </div>
    </div>
  );
}
