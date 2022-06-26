import React from "react";
import Link from "next/link";
import classes from "./item.module.css";
import Image from "next/image";


const Item = (props) => {
  const { title, id, image, price } = props;
  console.log(id, "id");
  const exploredLink = `/perfumes/${id}`;
  return (
    
    <li className={classes.container}>
      <Link href={exploredLink}>
        <div>
          <Image
            className={classes.myimg}
            width={450}
            height={450}
            src={"/" + image}
            alt={title}
          />

          <div>
            <div>
              <h2 className={classes.title}>{title}</h2>
              <div className={classes.price}>${price}</div>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default Item;
