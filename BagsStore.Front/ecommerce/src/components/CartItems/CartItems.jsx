import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import './CartItems.css';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
    const { cartItems, all_product, removeFromCart } = useContext(ShopContext);

    const getProductDetails = (productId) => {
        return all_product.find((product) => product.id === productId);
    };

    return (
        <div className="cart-container">
            {Object.keys(cartItems).map((key) => {
                const product = getProductDetails(Number(key));
                if (!product || cartItems[product.id] <= 0) return null;

                // Проверяем наличие и корректность значения new_price
                const price = typeof product.new_price === 'number' && !isNaN(product.new_price) ? product.new_price : 0;
                const quantity = cartItems[product.id];
                const total = price * quantity;

                return (
                    <div key={product.id} className="cart-item">
                        <div className="product-image">
                            <img src={product.image} alt={product.name} />
                        </div>
                        <div className="product-details-cart">
                            <div className="product-header">
                                <h2>{product.name}</h2>
                                <button className="remove-btn" onClick={() => removeFromCart(product.id)}>
                                    <img src={remove_icon} alt="remove" />
                                </button>
                            </div>
                            <p className="product-material">{product.name}</p>
                            <p className="product-price">₼ {price.toFixed(2)}</p>
                            <p>Quantity: {quantity}</p>
                            <p>Total: ₼ {(total).toFixed(2)}</p>
                            <a href={`/product/${product.id}`} className="product-link">
                                Access full product description: <span>Product details</span>
                            </a>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default CartItems;
