import React from 'react';
import Slider from 'react-slick';
import './InfoCarousel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../Assets/Inside/inside-carousel1.jpg';
import image2 from '../Assets/Inside/inside-carousel2.jpg';
import image3 from '../Assets/Inside/inside-carousel3.jpg';
import image4 from '../Assets/Inside/inside-carousel4.jpg';

const carouselItems = [
  {
    image: image1,
    title: 'The linen André shirt, now traceable',
    description: 'Babayeva Bags reaffirms its commitment to environmentally conscious practices by extending its traceability service to the linen Andre shirt.'
  },
  {
    image: image2,
    title: 'Babayeva Bags Interiors',
    description: 'Elegant, incomparable raw materials give birth to a fashionable collection of unique furnishings and fabrics.'
  },
  {
    image: image3,
    title: 'Knit Design Award',
    description: 'The Knit Design Award celebrates talented students from leading design schools around the world with an extraordinary passion for knitwear who demonstrate their creativity in reinterpreting Babayeva Bags iconic yarns.'
  },
  {
    image: image4,
    title: 'Babayeva Bags Gift Card',
    description: 'Surprise your beloved ones with a Babayeva Bags Gift Card. Let them discover the brand’s timeless elegance.'
  }
];

export default function InfoCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '30px',
    nextArrow: <div className="slick-next">→</div>, // Можно заменить на иконку
    prevArrow: <div className="slick-prev">←</div>, // Можно заменить на иконку
    customPaging: function(i) {
      return <div className="custom-dot"></div>; // Кастомная точка
    }
  };

  return (
    <div className="infocarousel-container">
      <h2>Inside Babayeva Bags</h2>
      <Slider {...settings}>
        {carouselItems.map((item, index) => (
          <div key={index} className="infocarousel-item">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
