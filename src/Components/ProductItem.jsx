import React from "react";

const ProductItem = ({ title, price, image, category }) => {
  // console.log('title');
  return (
    <div
      data-testid="product-item"
      style={{
        display: "flex",
        gap: "1rem",
        justifyContent: "space-between",
        alignItems: "center",
        border: "1px solid #ccc",
        padding: "1rem",
        marginBottom: "1rem",
        flexDirection: "column",
        height: '250px'
      }}
    >
      <img data-testid="product-image" src={image} height="100px" alt={title} />
      <b data-testid="product-title">{title}</b>
      <span data-testid="product-price">₹ {price}</span>
      <div style={{ display: "flex" }}>
        <p data-testid="product-category">{category}</p>
      </div>
    </div>
  );
};
export default ProductItem;
