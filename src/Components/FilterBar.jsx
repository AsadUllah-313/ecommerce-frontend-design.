import React from 'react';
import './Style.css';
import { FaThLarge } from 'react-icons/fa';
import { MdMenu } from 'react-icons/md';
const FilterBar = () => {
  return (
    <div className="filter-bar">
      <span className="item-count">
        12,911 items in <strong>Mobile accessory</strong>
      </span>

      <div className="filter-actions">
        <label className="checkbox-label">
          <input type="checkbox" />
          Verified only
        </label>

        <select className="sort-dropdown">
          <option value="featured">Featured</option>
          <option value="price_low_high">Price: Low to High</option>
          <option value="price_high_low">Price: High to Low</option>
          <option value="newest">Newest</option>
        </select>

        <button className="toggle-button">
          <FaThLarge />
        </button>
        <button className="toggle-button">
          <MdMenu />
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
