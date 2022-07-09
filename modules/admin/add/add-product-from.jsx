import classes from "./add-product-form.module.css";
import { useRef } from "react";
import { AddPerfume } from "./sevice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { messageActions } from "../../message/index";
import { useRouter } from "next/router";

const AddProductForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const priceInputRef = useRef();
  const sizeInputRef = useRef();
  const genderInputRef = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;
    const enteredSize = sizeInputRef.current.value;
    const enteredGender = genderInputRef.current.value;

    const perfume = {
      title: enteredTitle,
      image: enteredImage,
      price: enteredPrice,
      gender: enteredGender,
      size: enteredSize,
    };
    const res = await AddPerfume(perfume);
    dispatch(messageActions.setMessage(res.message));
    dispatch(messageActions.cleanMessage());
    router.replace("/perfumes");
  };
  return (
    <div className={classes.container}>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Perfume Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Perfume Image</label>
          <input type="text" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            step="0.01"
            required
            id="price"
            ref={priceInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="size">Size</label>
          <input type="text" required id="size" ref={sizeInputRef} />
        </div>

        <div className={classes.controlradio}>
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
         
            ref={genderInputRef}
          />
          <label htmlFor="female">female</label>
          <input
            type="radio"
            id="male"
            value="male"
         
            name="gender"
            ref={genderInputRef}
          />
          <label htmlFor="male">male</label>
        </div>
        <div className={classes.actions}>
          <button>Add Perfume</button>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;
