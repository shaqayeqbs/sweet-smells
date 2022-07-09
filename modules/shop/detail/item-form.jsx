import classes from "./item-form.module.css";
import { useRef } from "react";
import { useRouter } from "next/router";
import { deletePerfume } from "../../admin/delete/service";
import { useDispatch } from "react-redux";
import { messageActions } from "../../message/index";
import { useSession } from "next-auth/client";

const ItemForm = (props) => {
  const amountInputRef = useRef();
  const dispatch = useDispatch();
  const router = useRouter();
  const [session, loading] = useSession();
  const isAdmin = session?.session?.user?.isAdmin === "admin" ? true : false;
  console.log(isAdmin);

  const submitHandler = (event) => {
    if (!session) {
      dispatch(messageActions.setMessage("you should login first!"));
      // router.replace("/auth");
    }
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
        <div className={classes.btn}>
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

        <div className={classes.btn}>
          {" "}
          {isAdmin && (
            <span>
              {" "}
              <button onClick={deleteHandler}>Delete</button>
              <button onClick={editHandler}>Edit</button>
            </span>
          )}
        </div>
      </div>

      <button className={classes.button} type="submit">
        ADD TO BAG
      </button>
    </form>
  );
};

export default ItemForm;
