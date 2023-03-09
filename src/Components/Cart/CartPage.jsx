import React, { useState, useEffect } from "react";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(items);
  }, []);

  const incrementQuantity = (item) => {
    const newCartItems = [...cartItems];
    const index = newCartItems.findIndex((x) => x.id === item.id);
    newCartItems[index].quantity += 1;
    setCartItems(newCartItems);
    localStorage.setItem("cart", JSON.stringify(newCartItems));
  };

  const decrementQuantity = (item) => {
    const newCartItems = [...cartItems];
    const index = newCartItems.findIndex((x) => x.id === item.id);
    if (newCartItems[index].quantity > 1) {
      newCartItems[index].quantity -= 1;
      setCartItems(newCartItems);
      localStorage.setItem("cart", JSON.stringify(newCartItems));
    }
  };

  const removeItem = (item) => {
    const newCartItems = cartItems.filter((x) => x.id !== item.id);
    setCartItems(newCartItems);
    localStorage.setItem("cart", JSON.stringify(newCartItems));
  };

  const cartItemCount = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  const cartTotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return (
    <div>
      <h1>Cart</h1>
      <p>Total: ₹{cartTotal}</p>
      <p>Quantity: {cartItemCount}</p>
      {cartItems.map((item) => (
        <div className="ProductCard" style={{ color: 'black', backgroundColor: 'white' }}>
          <div>
            <img src={item.image} alt={item.title} />
          </div>
          <div className="ProductCard2">
            <h2 >{item.title}</h2>
            <h4 >₹{item.price}</h4>
          </div>
          <div>
            <button onClick={() => decrementQuantity(item)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => incrementQuantity(item)}>+</button>
          </div>
          <button onClick={() => removeItem(item)}>Remove</button>
        </div>
      ))
      }
    </div >
  );
};

export default CartPage;
