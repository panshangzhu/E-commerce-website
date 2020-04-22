import React from "react";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    marginLeft: "20px",
    backgroundColor: "#95a5a6",
    height: "50px",
    paddingLeft: "10px",
  },
  item: {
    lineHeight: "50px",
    color: "white",
  },
});

export default function HomeBread(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link to="/" color="inherit" href="/" className={classes.item}>
          Home
        </Link>
        <Link to={`/${props.product}`} color="inherit" className={classes.item}>
          {props.product}
        </Link>
        <Typography color="textPrimary">Items</Typography>
      </Breadcrumbs>
    </div>
  );
}
