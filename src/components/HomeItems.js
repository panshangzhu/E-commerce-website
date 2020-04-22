import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ItemCard from "./ItemCard";
import UserApi from "../Apis/UserApi";
import CircularProgress from "@material-ui/core/CircularProgress";

const HomeObject = "/homes";
const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "Wrap",
    alignItems: "center",
  },
});
export default function HomeItems() {
  const [homes, setHomes] = useState([]);

  useEffect(() => {
    UserApi.get(HomeObject)
      .then((res) => setHomes(res.data))
      .catch(function (e) {
        alert(e);
        return;
      });
  }, []);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      {homes.length > 0 ? (
        homes.map((home) => <ItemCard key={home.id} product={home} />)
      ) : (
        <CircularProgress color="inherit" />
      )}
    </div>
  );
}
