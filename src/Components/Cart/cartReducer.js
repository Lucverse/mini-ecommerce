import { ADD_TO_CART, REMOVE_FROM_CART, INCREMENT_ITEM, DECREMENT_ITEM } from "./cartTypes";

const initialState = {
  cartItems: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;
      const itemExists = state.cartItems.find(cartItem => cartItem.id === item.id);

      if (itemExists) {
        return {
          ...state,
          cartItems: state.cartItems.map(cartItem =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          )
        };
      }

      return {
        ...state,
        cartItems: [...state.cartItems, { ...item, quantity: 1 }]
      };
    case REMOVE_FROM_CART:
      const itemId = action.payload;
      return {
        ...state,
        cartItems: state.cartItems.filter(cartItem => cartItem.id !== itemId)
      };
    case INCREMENT_ITEM:
      const itemToIncrement = action.payload;
      return {
        ...state,
        cartItems: state.cartItems.map(cartItem =>
          cartItem.id === itemToIncrement.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      };
    case DECREMENT_ITEM:
      const itemToDecrement = action.payload;
      return {
        ...state,
        cartItems: state.cartItems.map(cartItem =>
          cartItem.id === itemToDecrement.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      };
    default:
      return state;
  }
};

export default cartReducer;
