import React from "react";

import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

import Avatar from "@material-ui/core/Avatar";

import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";
import Input from "@material-ui/core/Input";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  input: {
    width: "20%",
    textAlign: "center",
  },
}));

export default function ShoppingItem(props) {
  const classes = useStyles();
  
  const { title, price, quality } = props.item;
  const id = props.id;
  var [amount,setAmount]=React.useState(quality)



  return (
    <div>
      <ListItem className={classes.root}>
        <ShoppingBasketIcon />
        <div className={classes.input}>
          <h6>{title}</h6>
        </div>
        <div>
          <h6>${price}</h6>
        </div>
        <div>
          <span>Amount: </span>
          <Input
            type="number"
            className={classes.input}
            defaultValue={quality}
            onChange={(e)=>setAmount(e.target.value)}
            onBlur={()=>props.handleAmount(id,amount)}
          />
        </div>
        <DeleteIcon onClick={()=>props.handleDelete(id)} />
      </ListItem>
      <Divider />
    </div>
  );
}
