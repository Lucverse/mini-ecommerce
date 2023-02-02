import React from "react";
import ProductItem from "./ProductItem";

// create Product component which contains the list of ProductItem component
const ProductList = ({ products = [] }) => {
  return <div data-testid="products-container">
    {
      products.map((ele, key) => {
        return(
          <ProductItem title={ele.title} price={ele.price} image ={ele.image} category ={ele.category} key={key}/>
        )
      })
    }
  </div>;
};
// function ProductList({products}){
//   console.log(products);
//   return <div data-testid="products-container">
//     <h1>Prod</h1>
//     {
//       products.map((ele) => {
//         <h1>yes</h1>
//         // <ProductItem title={ele.title} price={ele.price} image ={ele.image} category ={ele.category}/>
//         // console.log(ele);
//       })
//     }
//   </div>;
// }
// export
export default ProductList;
