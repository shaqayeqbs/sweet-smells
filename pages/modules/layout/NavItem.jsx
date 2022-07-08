import Search from "../../icons/search";
import User from "../../icons/user";
import { useEffect, useState } from "react";
import ShoppingBag from "../../icons/shopping-bag";
import { useSession, signOut } from "next-auth/client";
import Logout from "../../icons/logout";
import classes from "./muiNav.module.css";
import Link from "next/link";
import React from "react";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import CustomizedTooltips from "./tooltip/tooltip";

function NavItem(props) {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const items = useSelector((state) => state.cart.items);
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  const btnClasses = `${classes.buttonicon} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  const [session] = useSession();
  const username = session?.user?.name;
  const logoutHandler = () => {
    signOut();
  };
  const navItems = [
    <div>
      {!session && (
        <Link href="/auth" passHref>
          <a className={classes.icon}>
            <User />
          </a>
        </Link>
      )}
    </div>,
    <div className={classes.icon}>
      <Search />
    </div>,
    <div>
      {session && (
        <Link href="/profile">
          <a className={classes.icon}>
            <CustomizedTooltips name={username} />
          </a>
        </Link>
      )}
    </div>,
    <div>
      {" "}
      {session && (
        <button className={btnClasses} onClick={props.onShowCart}>
          <ShoppingBag />

          <div className={classes.parent}>
            <span className={classes.badge}>{numberOfCartItems}</span>
          </div>
        </button>
      )}
    </div>,
    <div>
      {" "}
      {session && (
        <button className={classes.buttonicon} onClick={logoutHandler}>
          <Logout />
        </button>
      )}
    </div>,
  ];

  return (
    <>
      {navItems.map((item, index) => (
        <Button key={index} sx={{ color: "black", background: "white" }}>
          {item}
        </Button>
      ))}
    </>
  );
}

export default NavItem;
