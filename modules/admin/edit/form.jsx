import classes from "./form.module.css";
import { useRef } from "react";
import { EditPerfume } from "./service";
import { useDispatch } from "react-redux";
import { messageActions } from "../../message/index";
import { useRouter } from "next/router";

const EditProductForm = (props) => {
  const { size, id, image, title, price, gender } = props;
  let femalechecked = gender === "female" ? true : false;

  const dispatch = useDispatch();
  const router = useRouter();

  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const priceInputRef = useRef();
  const sizeInputRef = useRef();
  const femaleRef = useRef();
  const maleRef = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;
    const enteredSize = sizeInputRef.current.value;
    const enteredGender = femaleRef.current.checked ? "women" : "men";

    if (
      enteredTitle === title &&
      enteredImage === image &&
      enteredGender === gender &&
      enteredPrice === price &&
      enteredSize === size
    ) {
      dispatch(messageActions.setMessage("There is No new update!"));
      return;
    }

    const perfume = {
      id,
      title: enteredTitle,
      image: enteredImage,
      price: enteredPrice,
      gender: enteredGender,
      size: enteredSize,
    };

    const res = await EditPerfume(perfume);

    dispatch(messageActions.setMessage(res.message));
    dispatch(messageActions.cleanMessage());

    router.replace(`/perfumes/${id}`);
  };
  return (
    <div className={classes.container}>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Perfume Title</label>
          <input
            type="text"
            required
            id="title"
            defaultValue={title}
            ref={titleInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Perfume Image</label>
          <input
            type="text"
            defaultValue={image}
            required
            id="image"
            ref={imageInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="price">Price</label>
          <input
            defaultValue={price}
            type="number"
            step="0.01"
            required
            id="price"
            ref={priceInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="size">Size</label>
          <input
            type="text"
            defaultValue={size}
            required
            id="size"
            ref={sizeInputRef}
          />
        </div>

        <div className={classes.controlradio}>
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            defaultChecked={femalechecked}
            ref={femaleRef}
          />
          <label htmlFor="female">female</label>
          <input
            type="radio"
            id="male"
            value="male"
            defaultChecked={!femalechecked}
            name="gender"
            ref={maleRef}
          />
          <label htmlFor="male">male</label>
        </div>

        <div className={classes.actions}>
          <button>Edit Perfume</button>
        </div>
      </form>
    </div>
  );
};

export default EditProductForm;
