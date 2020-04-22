import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import TvIcon from "@material-ui/icons/Tv";
import HomeIcon from "@material-ui/icons/Home";
import StorefrontIcon from "@material-ui/icons/Storefront";
import NavigationFace from "./NavigationFace";
import { logoutAction } from "./Actions/LoginAction";
// import { Menu,MenuItem  } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  app: {
    backgroundColor: "#95a5a6",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  sidebar: {
    top: 64,
  },
}));

function Navigation(props) {
  const classes = useStyles();
  const [state, setState] = useState({
    left: false,
  });
  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, left: open });
  };

  const list = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List className={classes.list}>
        <ListItem button>
          <ListItemIcon>
            <AccountCircleOutlinedIcon />
          </ListItemIcon>
          <Link to="/login">
            <ListItemText primary="Account" />
          </Link>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ShoppingCartOutlinedIcon />
          </ListItemIcon>
          {props.account.isLogin === false ? (
            <Link to="/localshoppingcart">
              {" "}
              <ListItemText primary="Carts" />
            </Link>
          ) : (
            <Link to="/dbshoppingcart">
              {" "}
              <ListItemText primary="Carts" />
            </Link>
          )}
        </ListItem>
      </List>
      <Divider />
      <List>
        {[
          { name: "Electronics", path: "/store/electronic", icon: <TvIcon /> },
          { name: "Home Deco", path: "/store/home", icon: <HomeIcon /> },
          {
            name: "Clothing",
            path: "/store/clothing",
            icon: <StorefrontIcon />,
          },
        ].map((text, index) => (
          <ListItem button key={text.name}>
            <ListItemIcon>{text.icon}</ListItemIcon>
            <Link to={text.path}>
              <ListItemText primary={text.name} />
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.app}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <SwipeableDrawer
            anchor="left" //'right' 'top' 'bottom'
            open={state.left}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
            className={classes.sidebar}
          >
            {list()}
          </SwipeableDrawer>
          <div className={classes.title}>
            <Typography variant="h6">{props.title}</Typography>
          </div>
          {props.account.isLogin ? (
            <NavigationFace />
          ) : (
            <Link to="/login">
              <Button
                color="inherit"
                style={{ color: "white", underline: "none" }}
              >
                Login
              </Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    account: state.loginReducer,
    title: ownProps.title,
  };
};
export default connect(mapStateToProps, { logoutAction })(Navigation);
