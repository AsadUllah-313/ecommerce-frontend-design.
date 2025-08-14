import React from "react";
import "./Style.css";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { HiOutlineMail, HiOutlineChevronUp } from "react-icons/hi";

function Footer() {
  return (
    <>
      {/* Newsletter Section */}
      <section className="newsletter-container">
        <h3>Subscribe on our newsletter</h3>
        <p>
          Get daily news on upcoming offers from many suppliers all over the
          world
        </p>
        <div className="newsletter-form">
          <div className="input-box">
            <HiOutlineMail className="input-icon" />
            <input type="email" placeholder="Email" />
          </div>
          <button className="subscribe-btn">Subscribe</button>
        </div>
      </section>

      {/* Footer Section */}
      <section className="footer-section">
        {/* Brand Info */}
        <div className="footer-brand">
          <div className="brand-title"> <img src="src\assets\logo.PNG" alt="logo" srcset="" /> Brand</div>
          <p className="brand-desc">
            Best information about the company goes here but now lorem ipsum is
          </p>
          <div className="social-icons-container">


          <div className="social-icons"><FaTwitter /></div>
          <div className="social-icons"><FaFacebookF /></div>
          <div className="social-icons"> <FaLinkedinIn /></div>
          <div className="social-icons"><FaInstagram /></div>
          <div className="social-icons"><FaYoutube /></div>       
          </div>
          
        </div>

        {/* Links */}
        <div className="footer-links">
          <div>
            <h4>About</h4>
            <a href="#">About Us</a>
            <a href="#">Find store</a>
            <a href="#">Categories</a>
            <a href="#">Blogs</a>
          </div>
          <div>
            <h4>Partnership</h4>
            <a href="#">About Us</a>
            <a href="#">Find store</a>
            <a href="#">Categories</a>
            <a href="#">Blogs</a>
          </div>
          <div>
            <h4>Information</h4>
            <a href="#">Help Center</a>
            <a href="#">Money Refund</a>
            <a href="#">Shipping</a>
            <a href="#">Contact us</a>
          </div>
          <div>
            <h4>For users</h4>
            <a href="#">Login</a>
            <a href="#">Register</a>
            <a href="#">Settings</a>
            <a href="#">My Orders</a>
          </div>
          <div>
            <h4>Get app</h4>
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="store-badge1"
            />

            <br />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="store-badge"
            />
          </div>
        </div>
      </section>

      {/* Footer Bottom */}
      <section className="footer-bottom">
        © 2023 Ecommerce.
        <span className="footer-lang">
          <img
            src="https://flagcdn.com/w40/us.png"
            alt="EN"
            className="lang-flag"
          />
          English<HiOutlineChevronUp/>
        </span>
      </section>
    </>
  );
}

export default Footer;
