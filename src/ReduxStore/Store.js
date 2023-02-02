import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import myReducer from "../Reducers/myReducer";
import { productReducer } from "../Reducers/ProductReducer";

import logger from "redux-logger"; // middleware
const CR = combineReducers({ myReducer: myReducer, product: productReducer }); // combining reducers

//creating redux store
const myStore = createStore(CR, applyMiddleware(logger)); // pass single reducer (combine if multiple)

export default myStore;
