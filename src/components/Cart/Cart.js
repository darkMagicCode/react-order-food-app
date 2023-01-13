import React, { useContext } from "react";
import Cartcontext from "../../store/Cartcontext";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(Cartcontext);
  const totalAmount = cartCtx.totalAmount.toFixed(2);
  const hasItems = cartCtx.items.length > 0;
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id)

  };
  const cartAddRemoveHandler = (item) => {
    cartCtx.addItem({...item,amount:1})
  };

  const cartitems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}

          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null ,item.id)}
          onAdd={cartAddRemoveHandler.bind(null , item)}/>
         
      ))}
    </ul>
  );

  return (
    <Modal onhideCart={props.onhideCart}>
      {cartitems}
      <div className={classes.total}>
        <span>total amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onhideCart}>
          close
        </button>

        {hasItems && <button className={classes.button}>order</button>}
      </div>
    </Modal>
  );
};
export default Cart;
