import axios from "axios";
import {
  SHOW_PRODUCTS,
  DELETE_PRODUCT,
  ADD_PRODUCT,
  SHOW_PRODUCT,
  EDIT_PRODUCT
} from "./types";

export const showProducts = () => async dispatch => {
  const response = await axios.get("https://my-json-server.typicode.com/Extibax/React-Redux-CRUD/products");

  dispatch({
    type: SHOW_PRODUCTS,
    payload: response.data
  });
};

export const showProduct = id => async dispatch => {
  const response = await axios.get(`https://my-json-server.typicode.com/Extibax/React-Redux-CRUD/products/${id}`);

  dispatch({
    type: SHOW_PRODUCT,
    payload: response.data
  });
};

export const deleteProduct = id => async dispatch => {
  await axios.delete(`https://my-json-server.typicode.com/Extibax/React-Redux-CRUD/products/${id}`);

  dispatch({
    type: DELETE_PRODUCT,
    payload: id
  });
};

export const addProduct = product => async dispatch => {
  const response = await axios.post("https://my-json-server.typicode.com/Extibax/React-Redux-CRUD/products", product);

  dispatch({
    type: ADD_PRODUCT,
    payload: response.data
  });
};

export const editProduct = product => async dispatch => {
  const response = await axios.put(
    `https://my-json-server.typicode.com/Extibax/React-Redux-CRUD/products/${product.id}`,
    product
  );

  dispatch({
    type: EDIT_PRODUCT,
    payload: response.data
  });
};
