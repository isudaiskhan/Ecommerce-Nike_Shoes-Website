import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import Blog from './Components/Pages/Blog/Blog';
import Contact from './Components/Pages/Contact/Contact';
import ShopCategory from './Components/Pages/Shop/ShopCategory';
import ProductsDetails from './Components/Pages/Shop/ProductsDetails';
import ProductsCheckout from './Components/Pages/Shop/ProductsCheckout';
import ShoppingCart from './Components/Pages/Shop/ShoppingCart';
import Confirmation from './Components/Pages/Shop/Confirmation';
import Login from './Components/Pages/Pages/Login';
import Tracking from './Components/Pages/Pages/Tracking';
import Elements from './Components/Pages/Pages/Elements';
import BlogDeals from './Components/Pages/Blog/BlogDeals';



function App() {
  return (
    <>

   <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/shopcategory" element={<ShopCategory/>} />
          <Route path="/ProductsDetails" element={<ProductsDetails/>} />
          <Route path="/ProductsCheckout" element={<ProductsCheckout/>} />
          <Route path="/ShoppingCart" element={<ShoppingCart/>} />
          <Route path="/Confirmation" element={<Confirmation/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/blogdeals" element={<BlogDeals/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/tracking" element={<Tracking/>} />
          <Route path="/elements" element={<Elements/>} />
          <Route path="/contact" element={<Contact/>} />
   </Routes>
    
   
    </>
  );
}

export default App;