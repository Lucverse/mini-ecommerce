// cartSelectors.js

export const selectCartItems = (state) => state.cart.cartItems;

export const selectCartTotal = (state) => {
  return state.cart.cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
};

export const selectCartItemCount = (state) => {
  return state.cart.cartItems.reduce((count, item) => {
    return count + item.quantity;
  }, 0);
};
