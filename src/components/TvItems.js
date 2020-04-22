import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ItemCard from "./ItemCard";
import UserApi from "../Apis/UserApi";
import CircularProgress from "@material-ui/core/CircularProgress";

const TvObject = "/tvs";
const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "Wrap",
    alignItems: "center",
    alignContent: "flex-start",
  },
});
export default function TvItems() {
  const [tvs, setTvs] = useState([]);
  useEffect(() => {
    UserApi.get(TvObject)
      .then((res) => setTvs(res.data))
      .catch(function (e) {
        alert(e);
        return;
      });
  }, []);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      {tvs.length > 0 ? (
        tvs.map((tv) => <ItemCard key={tv.id} product={tv} />)
      ) : (
        <CircularProgress color="inherit" />
      )}
    </div>
  );
}
