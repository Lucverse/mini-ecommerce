// Action types
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_CART_ITEM_QUANTITY = "UPDATE_CART_ITEM_QUANTITY";
export const CLEAR_CART = "CLEAR_CART";

// Action creators
export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
};

export const removeFromCart = (itemId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: itemId,
  };
};

export const updateCartItemQuantity = (itemId, quantity) => {
  return {
    type: UPDATE_CART_ITEM_QUANTITY,
    payload: { itemId, quantity },
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};
