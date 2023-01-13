import React, { useReducer } from "react";
import Cartcontext from "./Cartcontext";

const defcartState = {
  items: [],
  totalAmount: 0,
};
const cartreducer = (state, action) => {
  if (action.type === "ADD") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;
    if (existingCartItem) {
      const updateItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updateItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    const updateTotalAmount =
      state.totalAmount + action.item.amount * action.item.price;
    return {
      items: updatedItems,
      totalAmount: updateTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updateItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updateItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defcartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartreducer, defcartState);
  const addItemToCartHander = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemToCartHander = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };
  const CartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHander,
    removeItem: removeItemToCartHander,
  };
  return (
    <Cartcontext.Provider value={CartContext}>
      {props.children}
    </Cartcontext.Provider>
  );
};

export default CartProvider;
