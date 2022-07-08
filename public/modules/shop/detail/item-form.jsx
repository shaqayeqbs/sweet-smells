import classes from "./item-form.module.css";
import { useRef } from "react";

const ItemForm = (props) => {
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
 
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label className={classes.input} htmlFor="Amount">
        Amount
      </label>
      <input
        ref={amountInputRef}
        id={`"amount_" + ${props.id}`}
        type="number"
        step="1"
        defaultValue="1"
      />
      <div className={classes.container}>
        <button className={classes.button} type="submit">
        ADD TO BAG
        </button>
      </div>
    </form>
  );
};

export default ItemForm;
