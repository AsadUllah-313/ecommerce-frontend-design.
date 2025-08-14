import React from "react";
import "../Pages/ProductGrid.css";
import { FaRegHeart, FaStar,FaChevronRight } from "react-icons/fa";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";



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
  {
    id: 6,
    name: "GoPro HERO6 4K Action",
    name2: "Camera - Black",
    price: "$998.00",
    oldPrice: "$1128.00",
    image: "src/assets/12.png",
  },
  {
    id: 7,
    name: "GoPro HERO6 4K Action",
    name2: "Camera - Black",
    price: "$998.00",
    oldPrice: "$1128.00",
    image: "src/assets/14.png",
  },
  {
    id: 8,
    name: "GoPro HERO6 4K Actio",
    name2: "Camera - Black",
    price: "$998.00",
    oldPrice: "$1128.00",
    image: "src/assets/15.png",
  },
  {
    id: 9,
    name: "GoPro HERO6 4K Action",
    name2: "Camera - Black",
    price: "$998.00",
    oldPrice: "$1128.00",
    image: "src/assets/12.png",
  },
];

function ProductGrid() {
  return (
    <>
      <div className="container">
       
        <div className="right-grid" style={{marginBottom:"20vw"}}>

          <div className="grid1">
            {products.map((product) => (
              <div key={product.id} className="card1">
                <img
                  src={product.image}
                  alt={product.name}
                  className="card-image1"
                />

                <div className="card-content1">
                  <div className="card-info1">
                    <span className="price">{product.price}</span>
                    {product.oldPrice && (
                      <span className="old-price">{product.oldPrice}</span>
                    )}

                    <div className="heart-icon" style={{color:"#0D6EFD"}}>
                      <FaRegHeart />
                    </div>
                  </div>

                  <div className="rating-info">
                    <span className="rating">
                      <FaStar className="star" />
                      <FaStar className="star" />
                      <FaStar className="star" />
                      <FaStar className="star" />
                      <FaStar className="star" style={{ color: "#D4CDC5" }} />
                    </span>
                    <span
                      style={{
                        color: "#FF9017",
                        fontWeight: "400",
                        marginLeft: "5px",
                      }}
                    >
                      7.5
                    </span>
                  </div>

                  <h4>{product.name}</h4>
                  <h4>{product.name2}</h4>
                </div>
              </div>
            ))}
          </div>

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
      </div>
    </>
  );
}

export default ProductGrid;
