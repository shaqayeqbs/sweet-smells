import Search from "../../icons/search";
import User from "../../icons/user";
import ShoppingBag from "../../icons/shopping-bag";
import { useSession, signOut } from "next-auth/client";
import Logout from "../../icons/logout";
import classes from "./muiNav.module.css";
import Link from "next/link";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import React from "react";
import Add from "../../icons/add";

function NavItem() {
  const [session] = useSession();
  const logoutHandler = () => {
    signOut();
  };
  const navItemsMob = [
    <li>
      <Link href="/perfumes" passHref>
        collection
      </Link>
    </li>,
    <li>
      <Link href="/women" passHref>
        WOMEN
      </Link>
    </li>,
    <li>
      <Link href="/men" passHref>
        MEN
      </Link>
    </li>,

    <Link href="/" passHref>
      search
    </Link>,
    <div>
      {!session && (
        <Link href="/auth" passHref>
          <a>Login</a>
        </Link>
      )}
    </div>,
    <div>
      {session && (
        <Link href="/admin/add-new-product" passHref>
          <a className={classes.icon}>
            <Add />
          </a>
        </Link>
      )}
    </div>,
    <div>
      {session && (
        <div className={classes.profile}>
          <Link href="/profile" passHref>
            <a>
              <span>profile</span>
            </a>
          </Link>
        </div>
      )}
    </div>,
    <div>
      {" "}
      {session && (
        <Link href="/men" passHref>
          <a className={classes.icon}>
            <ShoppingBag />
          </a>
        </Link>
      )}
    </div>,
    <div>
      {session && (
        <button className={classes.icon} onClick={logoutHandler}>
          <Logout />
        </button>
      )}
    </div>,
  ];
  return (
    <>
      {navItemsMob.map((item, index) => (
        <ListItem key={index} disablePadding>
          <ListItemText primary={item} />
        </ListItem>
      ))}
    </>
  );
}

export default NavItem;
