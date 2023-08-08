import React, { useState, useEffect } from "react";
import CartPageCard from "./CartPageCard";
import ConfirmOverlay from "./ConfirmOverlay";
import NoItem from "./NoItem";
import OrderButton from "./OrderButton";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [orderState, setOrderState] = useState("default");
  const [showConfirmOverlay, setShowConfirmOverlay] = useState(false);
  const [confirmMessage, setConfirmMessage] = useState("");
  const [onConfirm, setOnConfirm] = useState(() => { });
  const [onCancel, setOnCancel] = useState(() => { });

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
      const onCancel = () => {
        setShowConfirmOverlay(false);
      };
      const onConfirm = () => {
        removeItem(item);
        setShowConfirmOverlay(false);
      };
      const message = "This is the last item. Are you sure you want to remove it?";
      setConfirmMessage(message);
      setOnConfirm(() => onConfirm);
      setOnCancel(() => onCancel);
      setShowConfirmOverlay(true);
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
  const handleButtonClick = () => {
    setOrderState("placing");
    setTimeout(() => {
      placeOrder();
      setTimeout(() => {
        setOrderState("default");
      }, 2000);
    }, 4000);
  }

  const alert = (message, className) => {
    const div = document.createElement("div");
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));
    document.body.appendChild(div);
    setTimeout(() => {
      div.remove();
    }, 1500);
  }
  return (
    <>
      {cartItemCount ? (
        <div>
          <p>
            Total: ₹{cartTotal} + ₹50 delivery charge
          </p>
          <p>Total Items: {cartItemCount}</p>
          <div className="cartPage">
            {cartItems.map((item) => (
              <CartPageCard
                key={item.id}
                item={item}
                decrementQuantity={decrementQuantity}
                incrementQuantity={incrementQuantity}
              />
            ))
            }
          </div>
          <OrderButton
            handleButtonClick={handleButtonClick}
            orderState={orderState}
          />
        </div>
      ) : (
        <NoItem />
      )}
      {showConfirmOverlay && (
        <ConfirmOverlay
          message={confirmMessage}
          onConfirm={onConfirm}
          onCancel={onCancel}
        />
      )}
    </>
  );

};

export default CartPage;
