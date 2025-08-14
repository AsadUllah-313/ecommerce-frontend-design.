import React, { useState } from "react";
import "./Style.css"; 

function Banner() {
  const [activeIndex, setActiveIndex] = useState(null);

  const categories = [
    "Automobiles",
    "Clothes and wear",
    "Home interiors",
    "Computer and tech",
    "Tools, equipments",
    "Sports and outdoor",
    "Animal and pets",
    "Machinery tools",
    "More category",
  ];
  return (
    <div className="banner-container">
      {/* Left: Categories */}
      <div className="sidebar-categories">
        <ul>
          {categories.map((category, index) => (
            <li
              key={index}
              onClick={() => setActiveIndex(index)}
              style={{
                backgroundColor: activeIndex === index ? "#E5F1FF" : "",
                cursor: "pointer",
                padding: "8px",
                borderRadius: "5px",
                marginBottom: "4px",
              }}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      {/* Center: Banner */}
      <div className="main-banner">
        <div className="text-content">
          <p>Latest trending</p>
          <h2>Electronic items</h2>
          <button>Learn more</button>
        </div>
      </div>

      {/* Right: User box + promotions */}
      <div className="right-panel">
        <div className="user-box">
          <div className="user">
            <div className="img-user">
              <img
                src="src\assets\Avatar.png"
                alt="User"
                className="user-img"
              />
            </div>
            <div className="info-user">
              Hi, user <br />
              let’s get stated
            </div>
          </div>
          <button className="join-btn">Join now</button>
          <button className="login-btn">Log in</button>
        </div>

        <div className="promo-box orange">
          Get US $10 off <br />with a new <br />supplier
        </div>
        <div className="promo-box teal">
          Send quotes with <br />supplier <br /> preferences
        </div>
      </div>
    </div>
  );
}

export default Banner;
