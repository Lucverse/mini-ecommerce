import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import cartReducer from './cartReducer';

const middlewares = [thunk];

const store = createStore(
  cartReducer,
  applyMiddleware(...middlewares)
);

export default store;
