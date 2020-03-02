import axios from "axios";
import React from "react";

export const addToCart = id => {
  return { type: "Add_TO_CART", payload: id };
};
export const removeFromCart = id => {
  //  console.log(id);
  //console.log("id");
  return { type: "REMOVE_FROM_CART", payload: id };
};

export const getCart = id => {
  return this.state.product.filter(item => id === item.id);
};

export const getProduct = (state, props) => {
  //console.log("props id");
  //console.log(props.id, state);
  return state.product.find(item => props.id === item.id);
};

export function getProducts(state, props) {
  return state.products;
}
export const fetchUsers = () => {
  return dispatch => {
    axios.get("./data.json").then(response => {
      dispatch(fetchUsersSuccess(response.data));
    });
  };
};

export const fetchUsersSuccess = user => {
  return {
    type: "FETCH_USERS_REQUEST",
    payload: user
  };
};
