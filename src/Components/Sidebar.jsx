import React, { useState } from "react";
import '../Pages/ProductView.css';
import { FaChevronDown, FaStar, FaChevronRight } from "react-icons/fa";

const Sidebar = () => {
  const [sections, setSections] = useState({
    category: true,
    brands: true,
    features: true,
    price: true,
    condition: true,
    ratings: true,
  });

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(999999);

  const toggleSection = (name) => {
    setSections((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <div className="sidebar">
      {/* Category */}

      
      <div className="sidebar-section">
        <div
          className="section-header"
          onClick={() => toggleSection("category")}
        >
          <h4>Category</h4>
          {sections.category ? <FaChevronDown style={{fontWeight:"2px"}}/> : <FaChevronRight />}
        </div>
        {sections.category && (
          <>
            <label>
               Mobile accessory
            </label>
            <label>
              Electronics
            </label>
            <label>
               Smartphones
            </label>
            <label>
               Modern tech
            </label>
            <a href="#">See all</a>
          </>
        )}
      </div>

      {/* Brands */}
      <div className="sidebar-section">
        <div className="section-header" onClick={() => toggleSection("brands")}>
          <h4>Brands</h4>
          {sections.brands ? <FaChevronDown /> : <FaChevronRight />}
        </div>
        {sections.brands && (
          <>
            <label>
              <input type="checkbox" /> Samsung
            </label>
            <label>
              <input type="checkbox" /> Apple
            </label>
            <label>
              <input type="checkbox" /> Huawei
            </label>
            <label>
              <input type="checkbox" /> Pocco
            </label>
            <label>
              <input type="checkbox" /> Lenovo
            </label>
            <a href="#">See all</a>
          </>
        )}
      </div>

      {/* Features */}
      <div className="sidebar-section">
        <div
          className="section-header"
          onClick={() => toggleSection("features")}
        >
          <h4>Features</h4>
          {sections.features ? <FaChevronDown /> : <FaChevronRight />}
        </div>
        {sections.features && (
          <>
            <label>
              <input type="checkbox" /> Metallic
            </label>
            <label>
              <input type="checkbox" /> Plastic cover
            </label>
            <label>
              <input type="checkbox" /> 8GB Ram
            </label>
            <label>
              <input type="checkbox" /> Super power
            </label>
            <label>
              <input type="checkbox" /> Large Memory
            </label>
            <a href="#">See all</a>
          </>
        )}
      </div>

      {/* Price */}
      <div className="sidebar-section">
        <div className="section-header" onClick={() => toggleSection("price")}>
          <h4>Price range</h4>
          {sections.price ? <FaChevronDown /> : <FaChevronRight />}
        </div>
        {sections.price && (
          <>
            <input
              type="range"
              min="0"
              max="999999"
              value={minPrice}
              onChange={(e) => setMinPrice(Number(e.target.value))}
            />
            <input
              type="range"
              min="0"
              max="999999"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
            />
            <div className="price-inputs">
              <div style={{ marginRight: "5px" }}>
                <p>Min</p>
                <input
                  type="number"
                  value={minPrice}
                  onChange={(e) => setMinPrice(Number(e.target.value))}
                />
              </div>
              <div style={{ marginLeft: "5px" }}>
                <p>Max</p>
                <input
                  type="number"
                  placeholder="Max"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                />
              </div>
            </div>
            <button style={{width:"100%"}}>Apply</button>
          </>
        )}
      </div>

      {/* Condition */}
      <div className="sidebar-section">
        <div
          className="section-header"
          onClick={() => toggleSection("condition")}
        >
          <h4>Condition</h4>
          {sections.condition ? <FaChevronDown /> : <FaChevronRight />}
        </div>
        {sections.condition && (
          <>
            <label>
              <input type="radio" name="condition" /> Any
            </label>
            <label>
              <input type="radio" name="condition" /> Refurbished
            </label>
            <label>
              <input type="radio" name="condition" /> Brand new
            </label>
            <label>
              <input type="radio" name="condition" /> Old Items
            </label>
          </>
        )}
      </div>

      {/* Ratings */}
      <div className="sidebar-section">
        <div
          className="section-header"
          onClick={() => toggleSection("ratings")}
        >
          <h4>Ratings</h4>
          {sections.ratings ? <FaChevronDown /> : <FaChevronRight />}
        </div>
        {sections.ratings && (
          <>
            <div
              className="rating-section"
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              <span style={{ color: "#FF9017" }}>
                <input type="checkbox" />
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
              </span>
              <span>
                <input type="checkbox" />
                <FaStar style={{ color: "#FF9017" }} />
                <FaStar style={{ color: "#FF9017" }} />
                <FaStar style={{ color: "#FF9017" }} />
                <FaStar style={{ color: "#FF9017" }} /> <FaStar style={{ color: "#BDC4CD" }}/>
              </span>
              <span>
                <input type="checkbox" />
                <FaStar style={{ color: "#FF9017" }} />
                <FaStar style={{ color: "#FF9017" }} />
                <FaStar style={{ color: "#FF9017" }} /> <FaStar style={{ color: "#BDC4CD" }}/> <FaStar style={{ color: "#BDC4CD" }}/>
              </span>
              <span>
                <input type="checkbox" />
                <FaStar style={{ color: "#FF9017" }} />
                <FaStar style={{ color: "#FF9017" }} /> <FaStar style={{ color: "#BDC4CD" }}/> <FaStar style={{ color: "#BDC4CD" }}/>
                <FaStar style={{ color: "#BDC4CD" }}/>
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
