import React, { useContext} from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../components/Assets/dropdown_icon.png';
import Item from '../components/Item/Item';

export default function ShopCategory(props) {
  const { all_product } = useContext(ShopContext);


  return (
    <div className="content shop-category">
      <div className="shopcategory-header">
        <h1>Women's Sweaters, Knitwears & Cardigan</h1>
      </div>
      <div className="shopcategory-indexSort">
        <p>
          Products (99)
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="Sort Icon" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          }
          return null;
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
}
