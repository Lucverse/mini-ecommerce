// CartPage.js

import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal, selectCartItemCount } from "./cartSelectors";


const CartPage = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const cartItemCount = useSelector(selectCartItemCount);

  return (
    <div>
      <h1>Cart</h1>
      {cartItems.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.price}</p>
          <p>{item.quantity}</p>
        </div>
      ))}
      <p>Total: ${cartTotal}</p>
      <p>Quantity: {cartItemCount}</p>
    </div>
  );
};

export default CartPage;
