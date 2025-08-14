import React from "react";
import ProductList from "../Components/ProductList";
import Sidebar from "../Components/Sidebar";
import { FaChevronRight } from "react-icons/fa";

function ProductView() {
  return (
    <>
      <div className="path">
        <span>Home</span>
        <FaChevronRight />
        <span>Clothing</span>
        <FaChevronRight />
        <span>Men's wear</span>
        <FaChevronRight />
        <span>Summer clothing</span>
      </div>
      <div className="container">
        <Sidebar />

        <div>
          <ProductList />
        </div>
      </div>
    </>
  );
}

export default ProductView;
