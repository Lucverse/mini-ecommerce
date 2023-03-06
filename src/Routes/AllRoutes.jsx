import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductPage from "../Components/Product/ProductPage";
import '../App.css'
import CartPage from "../Components/Cart/CartPage";
import Orders from "../Components/Orders/Orders";
import SingleProductPage from "../Components/Product/SingleProductPage";
function AllRoutes() {
  return <div >
    {
      <Routes>
        <Route path='/' element={<ProductPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/products/:id' element={<SingleProductPage />} />
      </Routes>
    }
  </div>;
}

export default AllRoutes;

