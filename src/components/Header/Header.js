import React from 'react';
import './Header.css';
import img from './image/logo.png';
const Header = () => {
    return (
        <div>
            <nav className="menu">
             <img src={img} alt="" />
               <ul>
                   <li><a href="/home">Home</a></li>
                   <li><a href="/products">Products</a></li>
                   <li><a href="/Details">Details</a></li>
               </ul>
            </nav>
        </div>
    );
};

export default Header;