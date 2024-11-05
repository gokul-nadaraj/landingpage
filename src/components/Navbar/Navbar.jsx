// Navbar.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import logo from '/images/multibook.png'

import './Navbar.css'; // Import CSS for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="open" />
      </div>
      <div className='list'>
        <ul>
            <li><a href="home">Home</a></li>
            <li><a href="product">Product</a></li>
            <li><a href="about">About</a></li>
            <li><a href="blog">Blog</a></li>
            <li><a href="Contact">Contact</a></li>
        </ul>
      </div>
      
      {/* Search Input */}
      <div className="search-container">
        <input type="text"  className="search-input" />
  
      {/* Cart Icon */}
  
      <FontAwesomeIcon icon={faSearch} size="lg" className='icon' />
      <FontAwesomeIcon icon={faHeart} size="lg" className='icon1'/>
      <FontAwesomeIcon icon={faShoppingCart} size="lg"  className='icon1'/>

      </div>
   
 
    </nav>
  );
};

export default Navbar;
