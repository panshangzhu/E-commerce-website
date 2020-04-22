import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import { Container } from "@material-ui/core";
import ShoppingItem from "./ShoppingItem";
import { connect } from "react-redux";
import {
  GetCartAction,
  DeleteCartAction,
  EditCartAction,
} from "../Actions/CartAction";
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

function DbShoppingCart(props) {
  const classes = useStyles();
  let items = props.items;
  console.log(props.id);
  useEffect(() => {
    props.GetCartAction(props.id);
  }, []);
  const handleDelete = (index) => {
    props.DeleteCartAction(props.id, index);
  };
  const handleAmount = (index, amount) => {
    props.EditCartAction(props.id, index, amount);
  };
  // const getPrice = () => {
  //   console.log(props.items)
  //   let sum = 0;
  //   for (var i = 0; i < props.items?.length; i++) {
  //     sum = sum + props.items[i].price * props.items[i].quality;
  //   }
  //   if (!sum) {
  //     setPrice(0);
  //   } else {
  //     setPrice(sum);
  //   }
  // };
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
          {props.name} Shopping Cart
        </Typography>
        <Container>
          <div className={classes.demo}>
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
          <h6>Total: ${props.price}</h6>
          <Link to="/">
            <Button color="primary">Home</Button>
          </Link>
          <br />
          <Button variant="contained" color="primary">
            Check Out
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
    name: state.loginReducer.customer?.name,
    items: state.CartReducer?.cart,
    price: state.CartReducer?.totalPrice,
  };
};

export default connect(mapStateToProps, {
  GetCartAction,
  DeleteCartAction,
  EditCartAction,
})(DbShoppingCart);
