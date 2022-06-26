import React from "react";
import Image from "next/image";
import classes from "./item-detail.module.css";
import DropDown from "./description";

const Detail = (props) => {
  const { image, title, price, size } = props;
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
          </div>
          <button className={classes.btn}>ADD TO BAG</button>
          <div className={classes.dropbtn}>
            <DropDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
