import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import LeftNav from "./left-nav";
import classes from "./muiNav.module.css";
import NavItemMob from "./navItemMob";
import NavItems from "./NavItem";
import ShoppingBag from "../../icons/shopping-bag";
import { useSession } from "next-auth/client";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ListItem } from "@mui/material";

function DrawerAppBar(props) {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const [session, loading] = useSession();
  const btnClasses = `${classes.mobbtnIcon} ${
    btnIsHighlighted ? classes.bump : ""
  }`;
  const items = useSelector((state) => state.cart.items);
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
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
  const logoutHandler = () => {
    signOut();
  };
  const drawerWidth = 240;

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      background="white"
      sx={{ textAlign: "center" }}
    >
      <Typography variant="h9" sx={{ my: 2 }}>
        <h3>
          <Link href="/" passHref>
            <a>𝓢𝔀𝓮𝓮𝓽 𝓢𝓶𝓮𝓵𝓵𝓼</a>
          </Link>
        </h3>
      </Typography>
      <Divider />

      <List sx={{ textAlign: "center" }}>
        <NavItemMob onShowCart={props.onShowCart} />
      </List>
    </Box>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", background: "white" }} background="white">
      <AppBar
        sx={{ height: "4.5rem", color: "black", background: "white" }}
        component="nav"
      >
        <Toolbar
          sx={{
            flexGrow: 1,
            display: { xs: "flex", sm: "flex" },
            placeContent: "space-between",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            background="white"
            onClick={handleDrawerToggle}
            sx={{ mr: 1, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "flex" },
              placeContent: "start",
            }}
          >
            <h1>
              <Link href="/" passHref>
                <a>𝓢𝔀𝓮𝓮𝓽 𝓢𝓶𝓮𝓵𝓵𝓼</a>
              </Link>
            </h1>
            <div className={classes.leftNav}>
              <LeftNav />
            </div>
          </Typography>
          <ListItem
            color="inherit"
            edge="end"
            background="white"
            sx={{ mr: 1, display: { sm: "none" }, width: "4.4rem" }}
          >
            {session && (
              <button className={btnClasses} onClick={props.onShowCart}>
                <ShoppingBag />

                <div className={classes.parent}>
                  <span className={classes.badge}>{numberOfCartItems}</span>
                </div>
              </button>
            )}
          </ListItem>
          <List sx={{ display: { xs: "none", sm: "block" } }}>
            <NavItems onShowCart={props.onShowCart} />
          </List>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}
DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
