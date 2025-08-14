import React from "react";
import "./Style.css";
import { FaSearch, FaStore,FaPlane, FaShieldAlt } from "react-icons/fa";

const services = [
  {
    title: "Source from Industry Hubs",
    image: "src/assets/image 108.png", // Replace with real image
    icon: <FaSearch />,
  },
  {
    title: "Customize Your Products",
    image: "src/assets/image 104.png",
    icon: <FaStore />,
  },
  {
    title: "Fast, reliable shipping by ocean or air",
    image: "src/assets/image 106.png",
    icon: <FaPlane />,
  },
  {
    title: "Product monitoring and inspection",
    image: "src/assets/image 107.png",
    icon: <FaShieldAlt />,
  },
];

const regions = [
  { name: "Arabic Emirates", domain: "shopname.ae", image: "src/assets/flag1.png" },
  { name: "Australia", domain: "shopname.ae", image: "src/assets/AU.png" },
  { name: "United States", domain: "shopname.ae", image: "src/assets/US.png" },
  { name: "Russia", domain: "shopname.ru", image: "src/assets/RU.png" },
  { name: "Italy", domain: "shopname.it", image: "src/assets/IT.png" },
  { name: "Denmark", domain: "denmark.com.dk", image: "src/assets/DK.png" },
  { name: "France", domain: "shopname.com.fr", image: "src/assets/FR.png" },
  { name: "Arabic Emirates", domain: "shopname.ae", image: "src/assets/AE.png" },
  { name: "China", domain: "shopname.ae", image: "src/assets/CN.png" },
  { name: "Great Britain", domain: "shopname.co.uk", image: "src/assets/GB.png" },
];

const ExtraServices = () => {
  return (
    <div className="extra-services-container">
      <h2>Our extra services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.image} alt={service.title} />
            <div className="icon-wrapper">{service.icon}</div>
            <p>{service.title}</p>
          </div>
        ))}
      </div>

      <h3>Suppliers by region</h3>
      <div className="regions-grid">
        {regions.map((region, index) => (
          <div key={index} className="region-item">
            <img className="flag"src={region.image} alt="flag"/>
            <div>
              <div>{region.name}</div>
              <div className="domain">{region.domain}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExtraServices;
