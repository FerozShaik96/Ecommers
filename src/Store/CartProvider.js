import React, { useReducer } from "react";
import CartContext from "./CartContext";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.Price * action.item.UpdatedAmount;
    const existingCartItemIndex = state.items.findIndex((item) => {
      return item.id === action.item.id;
    });
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        UpdatedAmount:
          existingCartItem.UpdatedAmount + action.item.UpdatedAmount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, disPatchState] = useReducer(cartReducer, defaultCartState);
  const addItemToCartHandlet = (item) => {
    disPatchState({
      type: "ADD",
      item: item,
    });
  };
  const removeItemFromCartHandler = (id) => {};
  const cartContext = {
    // items: cartState.items,
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    // totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandlet,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
