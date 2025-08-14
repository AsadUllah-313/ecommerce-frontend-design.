import React, { useState }  from 'react'
import "./Style.css";
import { MdCheck } from "react-icons/md";



const products = [
  {
    id: 1,
    name: "Canon Camera EOS 200D",
    name2: " Black 10x zoom",
    price: "$998.00",
    image: "src/assets/8.png",
  },
  {
    id: 2,
    name: "GoPro HERO6 4K Action",
    name2: "Camera - Black",
    price: "$998.00",
    oldPrice: "$1128.00",
    image: "src/assets/10.png",
  },
  {
    id: 3,
    name: "GoPro HERO6 4K Action",
    name2: "Camera - Black",
    price: "$998.00",
    oldPrice: "$1128.00",
    image: "src/assets/13.png",
  },
  {
    id: 4,
    name: "GoPro HERO6 4K Action",
    name2: "Camera - Black",
    price: "$998.00",
    oldPrice: "$1128.00",
    image: "src/assets/14.png",
  },
  {
    id: 5,
    name: "GoPro HERO6 4K Actio",
    name2: "Camera - Black",
    price: "$998.00",
    oldPrice: "$1128.00",
    image: "src/assets/15.png",
  },
];




function DetailInfo() {
  const [activeTab, setActiveTab] = useState("Description");

  const tabs = ["Description", "Reviews", "Shipping", "About seller"];

  return (
    <div className="product-details-container">
      {/* Tabs */}
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="co-container">

      {/* Tab Content */}

      <div className="tab-content">
        {activeTab === "Description" && (
          <>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore etb <br />dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea <br />r
              commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, <br />quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
              aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur.
            </p>

            <table>
              <tbody>
                <tr>
                  <td>Model</td>
                  <td>#8786867</td>
                </tr>
                <tr>
                  <td>Style</td>
                  <td>Classic style</td>
                </tr>
                <tr>
                  <td>Certificate</td>
                  <td>ISO-898921212</td>
                </tr>
                <tr>
                  <td>Size</td>
                  <td>34mm x 450mm x 19mm</td>
                </tr>
                <tr>
                  <td>Memory</td>
                  <td>36GB RAM</td>
                </tr>
              </tbody>
            </table>

            <ul className="feature-list">
              <li><MdCheck/><span>Some great feature name here</span></li>
              <li><MdCheck/><span>Lorem ipsum dolor sit amet, consectetur</span></li>
              <li><MdCheck/><span>Duis aute irure dolor in reprehenderit</span></li>
              <li><MdCheck/><span>Some great feature name here</span></li>
            </ul>
          </>
        )}
      </div>


      {/* Sidebar - You may like */}
      <div className="sidebar" style={{backgroundColor:"#fff"}}>
        <h4>You may like</h4>
        {products.map((product) => (
          <div className="sidebar-item" key={product.id}>
            <div className="sidebar-img"><img
              key={product.id}
              src={product.image}
              alt={product.name}
              className="thumbnail"
            /></div>
            <div style={{marginRight:"10px"}}>
              <p style={{textAlign:"start"}}>{product.name}</p>
              <p style={{textAlign:"start"}}>{product.name2}</p>
              <span style={{textAlign:"start"}}>$7.00 – $99.50</span>
            </div>
          </div>
        ))}
      </div>

      </div>

    



      {/* Related Products */}
      <div className="related-product-container">


      <h3 className="section-title">Related products</h3>
      <div className="related-products">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <div>
                <img
              key={product.id}
              src={product.image}
              alt={product.name}
              className="img-placeholder"
            />
            </div>
           <div className="related-product-info">
             <p>{product.name}</p>
             {/* <p>{product.name2}</p> */}
              <span>$7.00 – $99.50</span>
           </div>
          </div>
        ))}
      </div>
      </div>

      {/* Discount Banner */}
      <div className="discount-banner">
        <div>
          <h2>Super discount on more than 100 USD</h2>
          <p>Have you ever finally just write dummy info</p>
        </div>
        <button className="shop-btn">Shop now</button>
      </div>


      

      
    </div>
  );
};


export default DetailInfo