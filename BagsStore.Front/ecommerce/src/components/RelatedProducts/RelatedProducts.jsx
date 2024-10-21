import React from 'react';
import Slider from 'react-slick'; // Импортируем React Slick
import './RelatedProducts.css';
import data_product from '../Assets/all_product';
import Item from '../Item/Item';

export default function RelatedProducts() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '10px',
    nextArrow: (
      <div style={{right: '-25px', color: 'white' }}>
        →
      </div>
    ), // Стиль для правой стрелки
    prevArrow: (
      <div style={{left: '-25px', color: 'white' }}>
        ←
      </div>
    ), // Стиль для левой стрелки
    customPaging: function(i) {
      return <div className="custom-dot"></div>; // Кастомная точка
    }
  };

  return (
    <div className="relatedproducts">
      <Slider {...settings} className="relatedproducts-slider">
        {data_product.map((item, i) => (
          <div key={i} className="relatedproducts-item">
            <Item
              id={item.id}
              name={item.name}
              image={item.image}
              imageHover={item.imageHover}
              new_price={item.new_price}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

// Кастомные стрелки
function NextArrow(props) {
  const { onClick } = props;
  return <div className="slick-arrow slick-next" onClick={onClick} />;
}

function PrevArrow(props) {
  const { onClick } = props;
  return <div className="slick-arrow slick-prev" onClick={onClick} />;
}
