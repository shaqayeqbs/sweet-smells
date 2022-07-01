import React from "react";
import Image from "next/image";
import classes from "./item-detail.module.css";
import DropDown from "./description";
import ItemForm from "./item-form";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../cart/index";

const Detail = (props) => {
  const { image, title, price, size, id } = props;

  const dispatch = useDispatch();

  const addToCartHandler = (amount) => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        size,
        amount,
      })
    );
  };
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.myimg}>
          <Image width={600} height={600} src={"/" + image} alt={title} />
        </div>
        <div className={classes.detailContainer}>
          <div className={classes.detail}>
            <h1>{title}</h1>
            <div className={classes.price}>${price}</div>
            <div className={classes.form}>
              <ItemForm id={id} onAddToCart={addToCartHandler} />
            </div>
          </div>
          <div className={classes.dropbtn}>
            <DropDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
