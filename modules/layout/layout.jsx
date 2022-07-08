import classes from "./layout.module.css";
import MuiNav from "./muiNav";
import Cart from "../cart/cart";
import { useState } from "react";
import Footer from "../Footer/Footer";

const Layout = (props) => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <>
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
      <MuiNav onShowCart={showCartHandler} onHideCart={hideCartHandler} />
      <main className={classes.layout}>{props.children}</main>
  <div className={classes.footer}>
  <Footer />
  </div>
    </>
  );
};

export default Layout;
