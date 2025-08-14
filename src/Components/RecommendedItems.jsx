import React from "react";
import "./Style.css";

const items = [
  {
    title: "T-shirts with multiple colors, for men",
    price: "$10.30",
    image: "src/assets/Bitmap.png",
  },
  {
    title: "Jeans shorts for men blue color",
    price: "$10.30",
    image: "src/assets/a1.png",
  },
  {
    title: "Brown winter coat medium size",
    price: "$12.50",
    image: "src/assets/a2.png",
  },
  {
    title: "Jeans bag for travel for men",
    price: "$34.00",
    image: "src/assets/a3.png",
  },
  {
    title: "Leather wallet",
    price: "$99.00",
    image: "src/assets/a4.png",
  },
  {
    title: "Canon camera black, 100x zoom",
    price: "$9.99",
    image: "src/assets/a5.png",
  },
  {
    title: "Headset for gaming with mic",
    price: "$8.99",
    image: "src/assets/10.png",
  },
  {
    title: "Smartwatch silver modern",
    price: "$10.30",
    image: "src/assets/a4.png",
  },
  {
    title: "Blue wallet for men leather metarial",
    price: "$10.30",
    image: "src/assets/3.png",
  },
  {
    title: "Jeans bag for travel for men",
    price: "$80.95",
    image: "src/assets/11.png",
  },
];

const RecommendedItems = () => {
  return (
    <div className="recommended-container">
      <h2>Recommended items</h2>
      <div className="items-grid">
        {items.map((item, index) => (
          <div key={index} className="item-card">
            <img src={item.image} alt={item.title} />

            <p className="price" style={{ fontSize: "20px" }}>
              {item.price}
            </p>
            <p className="title">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedItems;
