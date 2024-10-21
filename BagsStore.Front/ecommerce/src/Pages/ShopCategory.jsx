import React, { useState, useRef, useEffect, useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import Item from '../components/Item/Item';

export default function ShopCategory(props) {
  const { all_product } = useContext(ShopContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // состояние для dropdown
  const [sortOption, setSortOption] = useState('Relevance'); // состояние для выбранного параметра сортировки
  const dropdownRef = useRef(null); // ссылка на dropdown элемент

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // открытие/закрытие dropdown
  };

  const handleSortChange = (option) => {
    setSortOption(option); // установка выбранной опции
    setIsDropdownOpen(false); // закрытие меню при выборе
  };

  // Обработчик кликов вне dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false); // закрытие меню, если клик был вне dropdown
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  // Функция сортировки продуктов
  const sortProducts = (products) => {
    let sortedProducts = [...products]; // Создаем копию массива продуктов
    if (sortOption === 'Price - from low to high') {
      sortedProducts.sort((a, b) => a.new_price - b.new_price); // Сортировка по возрастанию цены
    } else if (sortOption === 'Price - from high to low') {
      sortedProducts.sort((a, b) => b.new_price - a.new_price); // Сортировка по убыванию цены
    }
    return sortedProducts;
  };

  // Отфильтрованные и отсортированные продукты
  const filteredAndSortedProducts = sortProducts(
    all_product.filter((item) => item.category === props.category)
  );

  return (
    <div className="content shop-category">
      <div className="shopcategory-header">
        <h1>Women's Sweaters, Knitwears & Cardigan</h1>
      </div>
      <div className="shopcategory-indexSort">
        <p>Products ({filteredAndSortedProducts.length})</p>
        <div className="shopcategory-sort" ref={dropdownRef}>
          <button onClick={toggleDropdown}>
            Sort by {sortOption} <span>{isDropdownOpen ? '▲' : '▼'}</span>
          </button>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <ul>
                <li onClick={() => handleSortChange('Price - from low to high')}>
                  Price - from low to high {sortOption === 'Price - from low to high' && <span className="checkmark">✔</span>}
                </li>
                <li onClick={() => handleSortChange('Price - from high to low')}>
                  Price - from high to low {sortOption === 'Price - from high to low' && <span className="checkmark">✔</span>}
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="shopcategory-products">
        {filteredAndSortedProducts.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            imageHover={item.imageHover}
            new_price={item.new_price.toFixed(2)}
          />
        ))}
      </div>
      <div className="shopcategory-loadmore">Explore More</div>
    </div>
  );
}
