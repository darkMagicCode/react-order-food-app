import React, { useContext } from "react";
import Cartcontext from "../../../store/Cartcontext";
import calsses from './MealItem.module.css'
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
 const cartCtx = useContext(Cartcontext)
  const addToCartHander = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price:props.price
    })
  }
  return (
    <li className={calsses.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={calsses.description}>{props.description}</div>
        <div className={calsses.price}>{price}</div>
      </div>
      <div><MealItemForm onAddToCart={addToCartHander} id={props.id}/>
</div>
    </li>
  );
};
export default MealItem;
