import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
const ProductList = ({ products = [] }) => {
    return <div className="productdiv" >
        {
            products.map((ele, key) => {
                return (
                    <Link to={`/products/${ele.id}`}  key={key} >
                        <ProductCard title={ele.title} price={ele.price} image={ele.image} category={ele.category} brand={ele.brand}/>
                    </Link>
                )
            })
        }
    </div>;
};
export default ProductList;