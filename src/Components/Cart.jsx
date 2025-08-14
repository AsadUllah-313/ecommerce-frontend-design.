import React from 'react'
import { FaLock, FaHeadset, FaTruck } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { HiOutlineShoppingCart } from "react-icons/hi";
import "../Pages/Cart.css";



const products = [
  {
    id: 1,
    name: "Canon Camera EOS 200D",
    name2: " Black 10x zoom",
    price: "$998.00",
    oldPrice: "$1128.00",
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
];

const logos = [
  {
    id: 1,
    name: "Canon Camera EOS 200D",
    image: "src/assets/Logo1.png",
  },
  {
    id: 2,
    name: "Canon Camera EOS 200D",
    image: "src/assets/Logo2.png",
  },
  {
    id: 3,
    name: "Canon Camera EOS 200D",
    image: "src/assets/Logo3.png",
  },
  {
    id: 4,
    name: "Canon Camera EOS 200D",
    image: "src/assets/Logo4.png",
  },
  {
    id: 5,
    name: "Canon Camera EOS 200D",
    image: "src/assets/Logo5.png",
  },
  
];


const Relatedproducts = [
  {
    id: 1,
    name: "Canon Camera EOS 200D",
    name2: " Black 10x zoom",
    price: "$998.00",
    oldPrice: "$1128.00",
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
];




function Cart() {
  return (
    <>
     <div className="cart-container">
      <h2>My cart (3)</h2>
      <div className="cart-content">
        
        {/* Left - Cart Items */}
        <div className="cart-items">
          {products.map((product) => (
            <div className="cart-item" key={product.id}>
              <img
                  src={product.image}
                  alt={product.name}
                  style={{border:"1px solid #E0E0E0"}}
                />
              <div className="item-details">
                <h4>T-shirts with multiple colors, for men and lady</h4>
                <p>Size: medium, Color: blue, Material: Plastic</p>
                <span className="seller">Seller: Best factory LLC</span>
                <div className="item-actions">
                  <button className="remove-btn">Remove</button>
                  <button className="save-btn">Save for later</button>
                </div>
              </div>
              
            <div className="price-cntnr">
                <div className="item-price">$78.99</div>
              <select className="qty-select">
                <option>Qty: 1</option>
                <option>Qty: 2</option>
                <option>Qty: 3</option>
              </select>
            </div>

            </div>
          ))}
          <div className="cart-footer-buttons">
            <button className="back-btn">← Back to shop</button>
            <button className="remove-all-btn">Remove all</button>
          </div>
        </div>

        {/* Right - Summary */}

        <div className="summary-container">


          <div className="coupon">
            <p>Have a coupon?</p>
            <div className="coupon-input">
              <input type="text" placeholder="Add coupon" />
              <button>Apply</button>
            </div>
          </div>
        <div className="cart-summary">
          <div className="summary-prices">
            <div className="price-row">
              <span>Subtotal:</span>
              <span>$1403.97</span>
            </div>
            <div className="price-row discount">
              <span>Discount:</span>
              <span>-$60.00</span>
            </div>
            <div className="price-row tax">
              <span>Tax:</span>
              <span>+ $14.00</span>
            </div>
            <div className="total-row">
              <span>Total:</span>
              <strong>$1357.97</strong>
            </div>
          </div>
          <button className="checkout-btn">Checkout</button>
          <div className="payment-icons">
            {logos.map((logo) => (
            <div className="cart-item" key={logo.id}>
              <img
                  src={logo.image}
                  alt={logo.name}
                />
            </div>
          ))}
          </div>
        </div>

        </div>

      </div>

      {/* Bottom Features */}
      <div className="cart-features">
  <div className="feature">
    <div className="icn">

    <FaLock className="feature-icon" />
    </div>
    <div>
      <strong>Secure payment</strong>
      <p>Have you ever finally just</p>
    </div>
  </div>
  <div className="feature">

    <div className="icn">

    <MdMessage className="feature-icon" />
    </div>

    <div>
      <strong>Customer support</strong>
      <p>Have you ever finally just</p>
    </div>
  </div>
  <div className="feature">

    <div className="icn">

    <FaTruck className="feature-icon" />
    </div>
    
    <div>
      <strong>Free delivery</strong>
      <p>Have you ever finally just</p>
    </div>
  </div>
</div>


<div className="related-product-container">


      <h3 className="section-title">Saved for later</h3>
      <div className="related-products">
        {Relatedproducts.map((Relatedproduct) => (
          <div className="product-card" key={Relatedproduct.id}>
            <div>
                <img
              key={Relatedproduct.id}
              src={Relatedproduct.image}
              alt={Relatedproduct.name}
              className="img-placeholder"
            />
            </div>
           <div className="related-product-info">
              <span style={{color:"#1C1C1C", fontSize:"16px", fontWeight:"600"}}>$7.00 – $99.50</span>
             <p style={{color:"#606060", fontSize:"13px", fontWeight:"400", textAlign:"start"}}>{Relatedproduct.name}</p>

             <button style={{fontSize:"15px", paddingLeft:"2px"}}>
             <HiOutlineShoppingCart style={{marginRight:"8px"}}/>
             Move to cart

             </button>

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
    
    </>
  )
}

export default Cart