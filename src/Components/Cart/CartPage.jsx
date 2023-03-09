import React, { useState, useEffect } from "react";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [orderState, setOrderState] = useState("default");

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
    } else {
      removeItem(item);
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

  const placeOrder = () => {
    localStorage.setItem("orderedItems", JSON.stringify(cartItems));
    setCartItems([]);
    localStorage.removeItem("cart");
    setOrderState("done");
    // alert("Order placed successfully!");
  };


  function handleButtonClick() {
    setOrderState("placing");
    setTimeout(() => {
      placeOrder();
      setTimeout(() => {
        setOrderState("default");
      }, 2000);
    }, 4000);
  }
  return (
    <div>
      <h1>Cart</h1>
      {
        cartItemCount ?
          <div>
            <p>
              Total: ₹{cartTotal} + ₹50 delivery charge
            </p>
            <p>Total Items: {cartItemCount}</p>
            <div className="cartPage">
              {cartItems.map((item) => (
                <div
                  className="SingleProductCard"
                  style={{ color: "black", backgroundColor: "white" }}
                  key={item.id}
                >
                  <div className="product-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div >
                    <h2>{item.title}</h2>
                    <h4>₹{item.price}</h4>
                    <span>
                      <span style={{ fontWeight: "bold" }}>Quantity: </span>
                      {item.quantity}
                    </span>
                    <div className="cart-buttons">
                      <button onClick={() => decrementQuantity(item)}>-</button>
                      <button onClick={() => incrementQuantity(item)}>+</button>
                    </div>
                  </div>
                </div>
              ))
              }
            </div>
            <button
              className={`place-order place-order--${orderState}`}
              onClick={handleButtonClick}
            >
              <div className="default text">Place Order</div>
              <div className="forklift">
                <div className="upper"></div>
                <div className="lower"></div>
              </div>
              <div className="box animation"></div>
              <div className="done text">Done</div>
            </button>
          </div>
          : <h1>No Items In Cart</h1>
      }
    </div >
  );
};

export default CartPage;
