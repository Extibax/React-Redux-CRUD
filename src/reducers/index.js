/* Modules */
import { combineReducers } from "redux";

/* Reducers */
import productsReducer from "./productsReducers";

export default combineReducers({
  products: productsReducer
});
