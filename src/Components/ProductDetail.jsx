import React from "react";
import "./Style.css";
import { FaStar, FaHeart, FaCheckCircle,FaRegHeart } from "react-icons/fa";
import { MdLocationOn, MdPublic,MdCheck,MdMessage } from "react-icons/md";
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { BsShieldCheck } from 'react-icons/bs';
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

const ProductDetail = () => {
  return (
    <div className="product-detail-wrapper">
      {/* LEFT SECTION */}
      <div className="left-section">
        <img
          src="src/assets/Bitmap.png"
          alt="Main Product"
          className="main-image"
        />
        <div className="thumbnail-row">
          {products.map((product) => (
            <img
              key={product.id}
              src={product.image}
              alt={product.name}
              className="thumbnail"
            />
          ))}
        </div>
      </div>

      {/* MIDDLE SECTION */}
      <div className="middle-section">
        <p className="in-stock">
          <MdCheck style={{ color: "green" }} />
          In stock
        </p>
        <h2>
          Mens Long Sleeve T-shirt Cotton Base <br /> Layer Slim Muscle
        </h2>
        <div className="ratings">
          <span className="stars">
            <span>
              <FaStar style={{ color: "#FF9017" }} />
              <FaStar style={{ color: "#FF9017" }} />
              <FaStar style={{ color: "#FF9017" }} />
              <FaStar style={{ color: "#FF9017" }} />{" "}
              <FaStar style={{ color: "#BDC4CD" }} />
            </span>
          <span style={{color:"#FF9017"}}> 9.3</span>
          </span>
          <span className="reviews">. <MdMessage/>   32 reviews</span>
          <span className="sold">. <HiOutlineShoppingBag/> 154 sold</span>
        </div>

        <div className="price-table">
          <div className="price-box" style={{border:"none"}}>
            <div className="price">$98.00</div>
            <div className="range">50–100 pcs</div>
          </div>
          <div className="price-box">
            <div className="price">$90.00</div>
            <div className="range">100–700 pcs</div>
          </div>
          <div className="price-box">
            <div className="price">$78.00</div>
            <div className="range">700+ pcs</div>
          </div>
        </div>

        <div className="details-grid1">
          <div >
            <div className="heading">Price:</div> <div>Negotiable</div>
          </div>
          <div>
            <div className="heading">Type:</div> <div>Classic shoes</div>
          </div>
          <div>
            <div className="heading">Material:</div> <div>Plastic material</div>
          </div>
          <div>
            <div className="heading">Design:</div> <div>Modern nice</div>
          </div>
          <div>
            <div className="heading">Customization:</div> <div>Customized logo and <br /> design custom
            packages</div>
          </div>
          <div>
            <div className="heading">Protection:</div> <div>Refund Policy</div>
          </div>
          <div>
            <div className="heading">Warranty:</div> <div>2 years full warranty</div>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="right-section">
        <div className="supplier-card">
          <div className="supplier-header">
            <div className="avatar">R</div>
            <div>
              <>Supplier</>
              <br />
              Guanjoi Trading LLC
            </div>
          </div>
          <div className="supplier-info">
            <p>
              <MdLocationOn /> Germany, Berlin
            </p>
            <p>
              <BsShieldCheck /> Verified Seller
            </p>
            <p>
              <MdPublic /> Worldwide shipping
            </p>
          </div>
          <button className="inquiry-btn">Send inquiry</button>
          <button className="profile-btn">Seller's profile</button>
          <div className="save-later">
          </div>
        </div>
        <div className="hrt">
          <div>

            <FaRegHeart />
          </div>
             <div>Save for later</div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
