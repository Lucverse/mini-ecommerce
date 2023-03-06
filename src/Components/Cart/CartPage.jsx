import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from './cartActions';

function CartPage(props) {
  const { cartItems, removeFromCart } = props;

  const handleRemove = (id) => {
    removeFromCart(id);
  };

  const cartItemsList = cartItems.map(item => (
    <div key={item.id}>
      <img src={item.image} alt={item.title} />
      <p>{item.title}</p>
      <p>{item.quantity} x {item.price}</p>
      <button onClick={() => handleRemove(item.id)}>Remove</button>
    </div>
  ));

  const totalPrice = cartItems.reduce((total, item) => total + (item.quantity * item.price), 0);
  const deliveryCharge = 50;
  const grandTotal = totalPrice + deliveryCharge;

  return (
    <div>
      {cartItemsList}
      <p>Total Price: {totalPrice}</p>
      <p>Delivery Charge: {deliveryCharge}</p>
      <p>Grand Total: {grandTotal}</p>
      <button>Place Order</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
