import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../Carousel/Carousel';
import './ForthCollectionComponent.css';
import imageUrl from '../Assets/Bags/the-look-collection/thelook-bag2.jpg'


import bag1 from '../Assets/Bags/the-look-collection/blue-thelook-bag.jpg';
import bag2 from '../Assets/Bags/the-look-collection/yellow-thelook-bag.jpg';
import bag3 from '../Assets/Bags/the-look-collection/pink-thelook-bag.jpg';
import bag4 from '../Assets/Bags/the-look-collection/thelook-bag.jpg';


const items = [
  { image: bag1, name: 'Azure Blossom' },
  { image: bag2, name: 'Golden Orchid' },
  { image: bag3, name: 'Petal Daze' },
];



export default function ForthCollectionComponent() {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <div className="slick-next-forth">→</div>,
    prevArrow: <div className="slick-prev-forth">←</div>,
  };

  return (
    <div className="forth-collection-component">
      <Link to='/products' className="forth-collection-image-link">
        <img src={imageUrl} alt="Big Item" />
      </Link>

      <div className="forth-collection-carousel-container">
      
        <h2>THE LOOK</h2>
        <Carousel items={items} />
        <button className="view-all">View All Looks</button>


      </div>

    </div>
  );
}


