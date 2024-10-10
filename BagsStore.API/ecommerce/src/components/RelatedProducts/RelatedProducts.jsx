import React from 'react';
import Slider from 'react-slick'; // Импортируем React Slick
import './RelatedProducts.css';
import data_product from '../Assets/data';
import Item from '../Item/Item';

export default function RelatedProducts() {
  const settings = {
    dots: true, // Показать точки для навигации
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Отображать 4 элемента одновременно
    slidesToScroll: 1, // Прокручивать по 1 элементу
    nextArrow: <NextArrow />, // Кастомные стрелки
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="relatedproducts">
      <h1 className="carousel-title">Our Recommendations</h1>
      <Slider {...settings} className="relatedproducts-slider">
        {data_product.map((item, i) => (
          <div key={i} className="relatedproducts-item">
            <Item
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
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
