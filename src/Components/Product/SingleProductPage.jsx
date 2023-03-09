import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SingleProductPage() {
  const { id } = useParams();
  const [state, setState] = useState({});

  const handleAddToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItemIndex = cartItems.findIndex(item => item.id === state.id);
    if (existingItemIndex !== -1) {
      // Item already exists in the cart, update the quantity
      cartItems[existingItemIndex].quantity += 1;
    } else {
      // Item doesn't exist in the cart, add it
      const itemToAdd = {...state, quantity: 1};
      cartItems.push(itemToAdd);
    }
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  useEffect(() => {
    fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${id}`)
      .then((res) => res.json())
      .then((data => {
        setState(data.data);
      }))
  }, [id]);

  return (
    <div className="mainSingleProudctCard">
      <div className="SingleProductCard">
        <div className="product-image">
          <img src={state.image} height="300px" alt={state.title} />
        </div>
        <div>
          <h1>{state.title}</h1>
          <p>Price : ₹ {state.price}</p>
          <h3>{state.category}</h3>
          <p>Description</p>
          <p>Alskjdfm lxckj wsoi2 msc skldj20sdfasdlfjasd fasldfa sdfjlas lasjkdflasmd alskdcjasldkcmn29oijfa asbcdasdcAlskjdfm
            Alskjdfm lxckj wsoi2 msc skldj20sdfasdlfjasd fasldfa sdfjlas lasjkdflasmd alskdcjasldkcmn29oijfa asbcdasdcAlskjdfm
            Alskjdfm lxckj wsoi2 msc skldj20sdfasdlfjasd fasldfa sdfjlas lasjkdflasmd alskdcjasldkcmn29oijfa asbcdasdcAlskjdfm
          </p>
          <p>{state.brand}</p>
        </div>
      </div>
      <button className="button-css" onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default SingleProductPage;
