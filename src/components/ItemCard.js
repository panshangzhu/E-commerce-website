import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { AddCartAction } from "../Actions/CartAction";
const useStyles = makeStyles({
  root: {
    maxWidth: 340,
    height: 600,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 15,
  },
  media: {
    height: 190,
    margin: 20,
    objectFit: "cover",
  },
  action: {
    alignSelf: "flex-end",
  },
});

function ItemCard(props) {
  const classes = useStyles();
  const handleAddAction = () => {
    let localItem = {
      "title": props.product.title,
      "price": props.product.price,
      "quality": 1,
    };
    if (props.isLogin === false) {
      let localItems = [];
      let stoItems;
      stoItems = localStorage.getItem("temCarts");
      if (!stoItems) {
        localItems.push(localItem);
        localStorage.setItem("temCarts", JSON.stringify(localItems));
      } else {
        localItems = JSON.parse(stoItems);
        localItems.push(localItem);
        localStorage.removeItem("temCarts");
        localStorage.setItem("temCarts", JSON.stringify(localItems));
      }
    } else {
      props.AddCartAction(props.id, localItem);
    }
  };
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.product.image}
          title={props.product.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.product.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.product.des}
          </Typography>
          <Typography variant="h6" color="textPrimary" component="h5">
            ${props.product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.action}>
        <Button size="small" color="primary">
          Detail
        </Button>
        <Button size="small" color="primary" onClick={() => handleAddAction()}>
          Add
        </Button>
      </CardActions>
    </Card>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    product: ownProps.product,
    isLogin: state.loginReducer.isLogin,
    id: state.loginReducer.customer?.id,
  };
};

export default connect(mapStateToProps, { AddCartAction })(ItemCard);
