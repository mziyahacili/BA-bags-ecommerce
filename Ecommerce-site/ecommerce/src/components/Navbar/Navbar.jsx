import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import ba_logo from '../Assets/Logo/ba_logo.png'

import cartIcon from '../Assets/Icons/shopping-bag.png';
import cartIconHover from '../Assets/Icons/shopping-baghover.png';

import userIcon from '../Assets/Icons/user.png';
import userIconHover from '../Assets/Icons/userhover.png';

import wishlistIcon from '../Assets/Icons/wishlist.png';
import wishlistIconHover from '../Assets/Icons/wishlisthover.png';

import searchIcon from '../Assets/Icons/search.png'
import searchIconHover from '../Assets/Icons/searchhover.png'


const Navbar = () => {

    // const {getTotalCartItems} = useContext(ShopContext);
    const [hoverCart, setHoverCart] = useState(false);
    const [hoverUser, setHoverUser] = useState(false);
    const [hoverWishlist, setHoverWishlist] = useState(false);
    const [hoverSearch, setHoverSearch] = useState(false);
    


    
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);

    const handleScroll = () => {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (currentScrollTop > lastScrollTop) {
            setIsNavbarVisible(false);
        } else {
            setIsNavbarVisible(true);
        }
        setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop); // For Mobile or negative scrolling
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollTop]);


    return (
        <nav className={`ba-navbar ${isNavbarVisible ? 'show' : 'hide'}`}>

        <div className="ba-navbar-statusbar">
        Discover to the new cart Babayeva Bags
        </div>

        <div className="ba-menu-ribbon"></div>

        <div className="ba-navbar-logo">
            <Link to="/">
            <img src={ba_logo} alt="ba_logo" />
            </Link>
        </div>

        <div className="ba-navbar-content">

        <div 
        onMouseEnter={() => setHoverSearch(true)}
        onMouseLeave={() => setHoverSearch(false)}
        className="ba-navbar-search">

        <Link
                to="/search"
                className="ba-navbar-icon"
                >
                <img src={hoverSearch  ? searchIconHover  : searchIcon} alt="Search" />
            
                <input
            type="text"
            placeholder="Search"
            className="ba-navbar-input"/>
        </Link>


        

          
      </div>
        
        <ul className="ba-navbar-menu">
            <li className="ba-navbar-item"><Link to="/">Fall/Winter 2024</Link></li>
            <li className="ba-navbar-item"><Link to="/mens">Bags</Link></li>
            <li className="ba-navbar-item"><Link to="/womens">Accessories</Link></li>
            <li className="ba-navbar-item"><Link to="/kids">Masks</Link></li>
            <li className="ba-navbar-item"><Link to="/kids">Kit</Link></li>
            <li className="ba-navbar-item"><Link to="/home">About Us</Link></li>
        </ul>

        <div className="ba-navbar-icons">

            <Link
             to="/login"
             className="ba-navbar-icon"
             onMouseEnter={() => setHoverUser(true)}
             onMouseLeave={() => setHoverUser(false)}>
                <img src={hoverUser  ? userIconHover  : userIcon} alt="User" />
            </Link>

            <Link
             to="/login"
             className="ba-navbar-icon"
             onMouseEnter={() => setHoverWishlist(true)}
             onMouseLeave={() => setHoverWishlist(false)}>
                <img src={hoverWishlist  ? wishlistIconHover  : wishlistIcon} alt="User" />
            </Link>

            <Link
             to="/cart"
             className="ba-navbar-icon"
             onMouseEnter={() => setHoverCart(true)}
             onMouseLeave={() => setHoverCart(false)}>
                <img src={hoverCart  ? cartIconHover : cartIcon} alt="Cart" />
            </Link>


        </div>

        </div>
        </nav>

    );
}

export default Navbar;



