import React from "react";
import { FaUser, FaEnvelope, FaHeart, FaShoppingBag,FaShoppingCart, FaSearch, FaBars } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import "./Style.css"; 

export default function Navbar() {
  return (
    <div className="navbar-container">
      {/* Top Navbar */}
      <div className="top-navbar">
        {/* Logo */}
        <div className="logo">
          <img src="src\assets\logo.PNG" alt="logo" srcset="" />
          <span className="logo-text">Brand</span>
        </div>

        {/* Search Bar */}
        <div className="search-bar">
          <input type="text" placeholder="Search" className="search-input" />
          <select className="search-select">
            <option>All category</option>
          </select>
          <button className="search-button">Search</button>
        </div>

        {/* Icons */}
        <div className="icon-group">
          <div className="icon-item">
            <FaUser style={{ color:"#8B96A5" }}/>
            <div className="icon-label">Profile</div>

          </div>
          <div className="icon-item">
            <FaEnvelope style={{ color:"#8B96A5" }}/>
            <div className="icon-label">Message</div>
          </div>
          <div className="icon-item">
            <FaHeart style={{ color:"#8B96A5" }}/>
            <div className="icon-label">Orders</div>
          </div>
          <div className="icon-item">
            <FaShoppingCart style={{ color:"#8B96A5" }}/>
            <div className="icon-label">My cart</div>
          </div>
        </div>
      </div>

      {/* Bottom Menu */}
      <div className="bottom-menu">
        <div className="menu-item">
          <FaBars /> All category
        </div>
        <div className="menu-item">Hot offers</div>
        <div className="menu-item">Gift boxes</div>
        <div className="menu-item">Projects</div>
        <div className="menu-item">Menu item</div>
        <div className="menu-item help">
          Help <IoIosArrowDown style={{ backgroundColor:"#fff" }} />
        </div>
        <div className="menu-right">
          <div className="menu-item">
            English, USD <IoIosArrowDown style={{ backgroundColor:"#fff" }}/>
          </div>
          <div className="menu-item">
            Ship to <img src="https://flagcdn.com/w40/de.png" alt="Germany" className="flag" />
          </div>
        </div>
      </div>
    </div>
  );
}
