import React, { useReducer } from "react";

import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_ALL_FROM_CART } from "./types";
import Context from "./Context";
import Reducer from "./Reducer";
import products from "../data.js";

export default function GlobalState({ children }) {
  const [state, dispatch] = useReducer(Reducer, { carts: [] });

  // # add product to cart
  const addProductToCart = (product) => {
    dispatch({
      type: ADD_TO_CART,
      payload: product,
    });
  };

  // # remove product from cart
  const removeProductFromCart = (productID) => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: productID,
    });
  };

  // # clear all product from cart
  const clearCart = () => {
    dispatch({
      type: CLEAR_ALL_FROM_CART,
    });
  };

  return (
    <Context.Provider
      value={{
        products: products,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
        clearCart: clearCart,
        carts: state.carts,
      }}
    >
      {children}
    </Context.Provider>
  );
}
