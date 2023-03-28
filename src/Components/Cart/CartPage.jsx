import React, { useState, useEffect } from "react";
import NoItem from "./NoItem";

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
    if (newCartItems[index].quantity < 9) {
      newCartItems[index].quantity += 1;
      setCartItems(newCartItems);
      localStorage.setItem("cart", JSON.stringify(newCartItems));
    } else {
      alert("You can buy only 9 items at once", "alert-warning");
    }
  };


  const decrementQuantity = (item) => {
    const newCartItems = [...cartItems];
    const index = newCartItems.findIndex((x) => x.id === item.id);
    if (newCartItems[index].quantity > 1) {
      newCartItems[index].quantity -= 1;
      setCartItems(newCartItems);
      localStorage.setItem("cart", JSON.stringify(newCartItems));
    } else {
      if (window.confirm("This is the last item. Are you sure you want to remove it?")) {
        removeItem(item);
      }
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
    const orderedItems = JSON.parse(localStorage.getItem("orderedItems")) || [];
    const mergedItems = [...cartItems, ...orderedItems];
    localStorage.setItem("orderedItems", JSON.stringify(mergedItems));
    setCartItems([]);
    localStorage.removeItem("cart");
    setOrderState("done");
    alert("Order Placed", "alert-success");
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

  function alert(message, className) {
    const div = document.createElement("div");
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));
    document.body.appendChild(div);
    setTimeout(() => {
      div.remove();
    }, 1500);
  }
  return (
    <div>
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
          :
          <NoItem />
      }
    </div >
  );
};

export default CartPage;
