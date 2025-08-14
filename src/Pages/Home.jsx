import React from 'react'

import Banner from '../Components/Banner';
import {
  homeOutdoorProducts,homeOutdoorProducts2,
  backgroundImage,
  backgroundImage22,
} from "../Components/Products";
import DealsAndOffers from '../Components/DealsAndOffers';
import HomeOutdoor from '../Components/HomeOutdoor';
import QuoteRequest from '../Components/QuoteRequest';
import RecommendedItems from '../Components/RecommendedItems';
import ExtraServices from '../Components/ExtraServices';

function Home() {
  return (
    <>
    <Banner/>
    <DealsAndOffers/>
    <HomeOutdoor text1="Home and " text2="outdoor" products={homeOutdoorProducts} bgImage={backgroundImage}/>
    <HomeOutdoor text1="Consumer " text2="electronics and gadgets" products={homeOutdoorProducts2} bgImage={backgroundImage22}/>
    
    <QuoteRequest/>
    <RecommendedItems/>
    <ExtraServices/>

    </>
  )
}

export default Home