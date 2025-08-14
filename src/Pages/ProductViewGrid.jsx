import React from "react";
import ProductGrid from "../Components/ProductGrid";
import Sidebar from "../Components/Sidebar";
import { FaChevronRight } from "react-icons/fa";
import { MdClose } from 'react-icons/md';
import FilterBar from "../Components/FilterBar";

function ProductViewGrid() {
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

      <div style={{ display: "flex" }}>
        <Sidebar />
        <div>
          <FilterBar />
          <div className="filters">
            <div className="filter">Samsung
                <div><MdClose/></div>
            </div>
            <div className="filter">Apple
                <MdClose/>
            </div>
            <div className="filter">Poco
                <MdClose/>
            </div>
            <div className="filter">Matellic
                <MdClose/>
            </div>
            <div className="filter">4 stars
                <MdClose/>
            </div>
            <div className="filter">3 stars
                <MdClose/>
            </div>
      
            <div className="clear">Clear filters</div>
          </div>
          <ProductGrid />
        </div>
      </div>
    </>
  );
}

export default ProductViewGrid;
