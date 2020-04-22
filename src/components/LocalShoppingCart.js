import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import { Container } from "@material-ui/core";
import ShoppingItem from "./ShoppingItem";
import { connect } from "react-redux";
import { GetCartAction } from "../Actions/CartAction";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {},
  demo: {
    width: "100%",
    backgroundColor: "#dff9fb",
  },
  demo1: {
    backgroundColor: "#c7ecee",
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

function LocalShoppingCart(props) {
  const classes = useStyles();
  var [items, setItems] = useState([]);
  var [price, setPrice] = useState(0);
  let products = null;

  const getPrice = (items) => {
    let sum = 0;
    for (var i = 0; i < items?.length; i++) {
      sum = sum + items[i].price * items[i].quality;
    }
    if (!sum) {
      setPrice(0);
    } else {
      setPrice(sum);
    }
  };

  useEffect(() => {
    products = localStorage.getItem("temCarts");
    products = JSON.parse(products);
    setItems(products);
    getPrice(products);
  }, []);

  const handleAmount = (id, newAmount) => {
    let newItems = null;
    items[id].quality = newAmount;
    newItems = items;
    if (!newItems || newItems.length === 0) {
      localStorage.removeItem("temCarts");
      setItems([]);
      setPrice(0);
      return;
    }
    setItems(newItems);
    getPrice(newItems);
    localStorage.setItem("temCarts", JSON.stringify(newItems));
  };

  const handleDelete = (id) => {
    let newItems = items.filter((i) => items.indexOf(i) !== id);
    if (!newItems || newItems.length === 0) {
      localStorage.removeItem("temCarts");
      setItems([]);
      setPrice(0);
      return;
    }
    setItems(newItems);
    getPrice(newItems);
    localStorage.setItem("temCarts", JSON.stringify(newItems));
  };

  if (!items || items.length === 0) {
    return (
      <div>
        <h3>No items in the cart</h3>
        <br />
        <Link to="/">
          <Button color="primary">Home</Button>
        </Link>
      </div>
    );
  } else {
    return (
      <div>
        <Typography variant="h6" className={classes.title}>
          Your Shopping Cart
        </Typography>
        <Container>
          <div>
            <List>
              {items.map((c, index) =>
                index % 2 === 0 ? (
                  <div className={classes.demo} key={index}>
                    <ShoppingItem
                      item={c}
                      id={index}
                      handleDelete={handleDelete}
                      handleAmount={handleAmount}
                    />
                  </div>
                ) : (
                  <div className={classes.demo1} key={index}>
                    <ShoppingItem
                      item={c}
                      id={index}
                      handleDelete={handleDelete}
                      handleAmount={handleAmount}
                    />
                  </div>
                )
              )}
            </List>
          </div>
          <h6>Total: ${price}</h6>
          <Link to="/">
            <Button color="primary">Home</Button>
          </Link>
          <br />
          <Button variant="contained" color="primary">
            Login To Check Out
          </Button>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLogin: state.loginReducer.isLogin,
    id: state.loginReducer.customer?.id,
    items: state.CartReducer?.cart,
  };
};

export default connect(mapStateToProps, { GetCartAction })(LocalShoppingCart);
