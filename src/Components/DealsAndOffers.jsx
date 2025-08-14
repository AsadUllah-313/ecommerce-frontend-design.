import React, { useEffect, useState } from "react";
import "./Style.css"; 

const products = [
  { name: "Smart watches", discount: "-25%", img: "src/assets/image 35.png" },
  { name: "Laptops", discount: "-15%", img: "src/assets/image 34.png" },
  { name: "GoPro cameras", discount: "-40%", img: "src/assets/image 28.png" },
  { name: "Headphones", discount: "-25%", img: "src/assets/image 29.png" },
  { name: "Canon camreras", discount: "-25%", img: "src/assets/image 23.png" },
];

function DealsAndOffers() {

  return (
    <div className="deals-wrapper">
      {/* LEFT SIDE */}
      <div className="deals-left">
        <h3>Deals and offers</h3>
        <p>Hygiene equipments</p>
        <div className="timer">
          <div>4 <br /> Days</div>
          <div>13 <br /> Hour</div>
          <div>34 <br /> Min</div>
          <div>59  <br /> Sec</div>
        </div>
      </div>

      {/* PRODUCTS */}
      {products.map((item, index) => (
        <div className="deal-item" key={index}>
          <img src={item.img} alt={item.name} />
          <h4>{item.name}</h4>
          <span className="discount">{item.discount}</span>
        </div>
      ))}
    </div>
  );
}

export default DealsAndOffers;
