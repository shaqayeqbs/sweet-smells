import React, { useState } from "react";
import classes from "./description.module.css";
import DownIcon from "../../../icons/down";

const Description = (props) => {
  const [showDetail, setShowDetail] = useState(false);
  function dorpdowbHandler() {
    setShowDetail((prevState) => !prevState);
  }
  return (
    <div className={classes.dropdown}>
      <button onClick={dorpdowbHandler} className={classes.dropbtn}>
        <div>Dropdown</div>
        <div className={classes.downIcon}><DownIcon /></div>
      </button>
      {showDetail && (
        <div className={classes["dropdown-content"]}>
          <div>
            An aromatic-woody scent with citrus notes accentuated by sandalwood
            and cedar. A fresh and invigorating fragrance.Woody, aromatic musk
            notes pair with cedar to form an elegant and sensual trail.
          </div>
        </div>
      )}
    </div>
  );
};

export default Description;
