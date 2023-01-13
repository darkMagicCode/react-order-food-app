import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
import calsses from "./MealItemForm.module.css";

const MealItemForm = (props) => {
const [amountIsvalid, setamountIsvalid] = useState(true)

  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNum = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNum < 1 ||
      enteredAmountNum > 5
    ) {
        setamountIsvalid(false)
      return;
    }
    props.onAddToCart(enteredAmountNum)
  };
  return (
    <form className={calsses.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
          <button >+ add</button>
          {!amountIsvalid && <p>please enter vaild amount(1-5)</p>}
    </form>
  );
};
export default MealItemForm;
