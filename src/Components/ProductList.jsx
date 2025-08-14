import React from "react";
import "../Pages/ProductView.css";
import {  FaRegHeart,FaStar } from "react-icons/fa";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import FilterBar from "./FilterBar";


const products = [
  {
    id: 1,
    name: "Canon Camera EOS 200D, Black 10x zoom",
    price: "$998.00",
    oldPrice: "$1128.00",
    image: "src/assets/8.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    id: 2,
    name: "GoPro HERO6 4K Action Camera - Black",
    price: "$998.00",
    image: "src/assets/10.png",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
  },
  {
    id: 3,
    name: "GoPro HERO6 4K Action Camera - Black",
    price: "$998.00",
    image: "src/assets/13.png",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
  },
  {
    id: 4,
    name: "GoPro HERO6 4K Action Camera - Black",
    price: "$998.00",
    image: "src/assets/14.png",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
  },
  {
    id: 5,
    name: "GoPro HERO6 4K Action Camera - Black",
    price: "$998.00",
    image: "src/assets/15.png",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
  },
  {
    id: 6,
    name: "GoPro HERO6 4K Action Camera - Black",
    price: "$998.00",
    oldPrice: "$1128.00",
    image: "src/assets/12.png",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
  },
];

const ProductList = () => {
  return (
    <>
      <div className="product-wrapper">
        {/* Top Bar */}
        <FilterBar />

        {/* Product Cards */}
        {products.map((product) => (
          <div key={product.id} className="card">
            <img
              src={product.image}
              alt={product.name}
              className="card-image"
            />

            <div className="card-content">
              <h4>{product.name}</h4>
              <div className="card-info">
                <span className="price">{product.price}</span>
                {product.oldPrice && (
                  <span className="old-price">{product.oldPrice}</span>
                )}

              </div>

                 <div className="rating-info">
                  <span className="rating">
                    <FaStar className="star" />
                    <FaStar className="star" />
                    <FaStar className="star" />
                    <FaStar className="star" />
                    <FaStar className="star" style={{color:"#D4CDC5"}} />
                  </span>
                      <span style={{color:"#FF9017" , fontWeight:"400", marginLeft:"5px"}}>7.5</span>
                  <span className="orders">· 154 orders</span>
                  <span className="shipping">· Free Shipping</span>

                </div>


              <div className="info">

              <p>{product.description}</p>
              </div>

              <a href="#" className="details-link">
                View details
              </a>
            </div>
                <div className="heart-icon">

           <FaRegHeart style={{color:"#0D6EFD"}}/> 
                </div>
          </div>
        ))}

        {/* Pagination */}
        <div className="pagination">
          <select className="sort-dropdown" style={{width:"60px", paddingRight:"5px"}}>
          <option value="featured">10</option>

          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
        </select>
        <button>
            <MdNavigateBefore />
          </button>
          <button className="active">1</button>
          <button>2</button>
          <button>3</button>
          <button>
            <MdNavigateNext />
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductList;
