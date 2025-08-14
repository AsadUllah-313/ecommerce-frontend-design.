import React from 'react'
import Navbar from './Components/Navbar'
import "./App.css"; 
import ProductList from './Components/ProductList';
import Home from './Pages/Home';
import ProductView from './Pages/ProductView';
import DetailsPage from './Pages/DetailsPage';
import ProductViewGrid from './Pages/ProductViewGrid';
import Footer from './Components/Footer';
import CartPage from './Pages/CartPage';


function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    {/* <DetailsPage/> */}
    {/* <ProductView /> */}
    {/* <ProductViewGrid/> */}
    {/* <CartPage/> */}
    <Footer/>
    </>
  )
}

export default App