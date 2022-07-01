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

function DrawerAppBar(props) {
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
      <List>
        <NavItemMob onShowCart={props.onShowCart} />
      </List>
    </Box>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{  display: "flex", background: "white" }} background="white">
      <AppBar sx={{height:'4.5rem', color: "black", background: "white" }} component="nav">
        <Toolbar>
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
          <div sx={{ display: { xs: "none", sm: "block" } }}>
           <NavItems onShowCart={props.onShowCart} />
          </div>
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
