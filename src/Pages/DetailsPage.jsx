import React from 'react'
import ProductDetail from '../Components/ProductDetail';
import DetailInfo from '../Components/DetailInfo';
import { FaChevronRight } from "react-icons/fa";

function DetailsPage() {
  return (
    <>

    <div className="path" style={{marginLeft:"120px"}}>
            <span>Home</span>
            <FaChevronRight />
            <span>Clothing</span>
            <FaChevronRight />
            <span>Men's wear</span>
            <FaChevronRight />
            <span>Summer clothing</span>
          </div>



    <ProductDetail/>
    <DetailInfo/>
    </>
  )
}

export default DetailsPage