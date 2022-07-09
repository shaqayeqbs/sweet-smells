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

function NavItem(props) {
  const [session] = useSession();
  const isAdmin = session?.session?.user?.isAdmin;
  const logoutHandler = () => {
    signOut();
  };
  const navItemsMob = [
    <div className={classes.mobIcon}>
      <Link href="/perfumes" passHref>
        collection
      </Link>
    </div>,
    <div className={classes.mobIcon}>
      <Link href="/women" passHref>
        WOMEN
      </Link>
    </div>,
    <div className={classes.mobIcon}>
      <Link href="/men" passHref>
        MEN
      </Link>
    </div>,

    <div className={classes.mobIcon}>
      <Link href="/search" passHref>
        <span>
          <Search />
        </span>
      </Link>
    </div>,
    <div>
      {!session && (
        <Link href="/auth" passHref>
          <a>Login</a>
        </Link>
      )}
    </div>,
    <div>
      {isAdmin && (
        <Link href="/admin/add-new-product" passHref>
          <a className={classes.mobIcon}>
            <Add />
          </a>
        </Link>
      )}
    </div>,
    <div>
      {session && (
        <div className={classes.profile}>
          <Link href="/profile" passHref>
            <a className={classes.mobIcon}>
              <span>
                <User />
              </span>
            </a>
          </Link>
        </div>
      )}
    </div>,
    <div>
      {session && (
        <button className={classes.mobIcon} onClick={logoutHandler}>
          <Logout />
        </button>
      )}
    </div>,
  ];
  return (
    <>
      {navItemsMob.map((item, index) => (
        <ListItem sx={{ textAlign: "center" }} key={index} disablePadding>
          <ListItemText primary={item} />
        </ListItem>
      ))}
    </>
  );
}

export default NavItem;
