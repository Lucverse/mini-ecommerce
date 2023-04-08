import '../App.css'
import React from "react";
import Home from "../Components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Orders from "../Components/Orders/Orders";
import CartPage from "../Components/Cart/CartPage";
import ProductPage from "../Components/Product/ProductPage";
import Pagenotfound from "../Components/Pageoutfound/Pagenotfound";
import SingleProductPage from "../Components/Product/SingleProductPage";
function AllRoutes() {
  return <div >
    {
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<ProductPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/products/:id' element={<SingleProductPage />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    }
  </div>;
}

export default AllRoutes;

