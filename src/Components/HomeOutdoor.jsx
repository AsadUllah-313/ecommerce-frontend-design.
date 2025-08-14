import React from "react";
import "./Style.css";

function HomeOutdoor({ text1,text2,products, bgImage }) {
  return (
    <div className="home-outdoor-container">
      
      <div
        className="home-left"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h3>{text1}</h3>
        <h3>{text2}</h3>
        <button className="source-btn">Source now</button>
      </div>

      {/* RIGHT GRID */}
      <div className="home-right">
        {products.map((item, index) => (
          <div className="home-item" key={index}>
            <div className="text">
              <h4>{item.name}</h4>
              <p>{item.price}</p>
            </div>
            <img src={item.img} alt={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeOutdoor;
