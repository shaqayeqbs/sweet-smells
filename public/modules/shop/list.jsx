import React from "react";
import Item from "./item";
import classes from "./list.module.css";

const List = (props) => {
  const { items } = props;
  return (
    <ul>
      <div className="row">
        <div className={classes.container}>
          {items.map((perfume) => (
            <Item
              size={perfume.size}
              key={perfume._id}
              id={perfume._id}
              title={perfume.title}
              price={perfume.price}
              image={perfume.image}
            />
          ))}
        </div>
      </div>
    </ul>
  );
};

export default List;
