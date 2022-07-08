import classes from "./item-form.module.css";
import { useRef } from "react";
import { useRouter } from "next/router";
import { deletePerfume } from "../../admin/delete/service";
import { useDispatch } from "react-redux";
import { messageActions } from "../../message/index";

const ItemForm = (props) => {
  const amountInputRef = useRef();
  const dispatch = useDispatch();
  const router = useRouter();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    props.onAddToCart(enteredAmountNumber);
  };
  const deleteHandler = async (event) => {
    event.preventDefault();
    const res = await deletePerfume(props.id);
    console.log(res.message);
    dispatch(messageActions.setMessage(res.message));
    router.replace("/perfumes");
  };
  const editHandler = (event) => {
    event.preventDefault();
    router.replace(`/admin/perfumes/edit/${props.id}`);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.upcontainer}>
        <div>
          {" "}
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
        </div>

        <div>
          {" "}
          <button onClick={deleteHandler}>Delete</button>
          <button onClick={editHandler}>Edit</button>
        </div>
      </div>

      <button className={classes.button} type="submit">
        ADD TO BAG
      </button>
    </form>
  );
};

export default ItemForm;
