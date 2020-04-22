import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import ItemCard from "./ItemCard";
import UserApi from "../Apis/UserApi";
import CircularProgress from '@material-ui/core/CircularProgress';


const TvObject = "/clothings";
const useStyles = makeStyles({
    root: {
      display:'flex',
      justifyContent:'space-around',
      flexWrap:'Wrap',
      alignItems:'center'
    }
  });
export default function ClothingItems() {
  const [clothings, setClothings] = useState([]);
 
  useEffect(() => {
    UserApi.get(TvObject)
      .then((res) => setClothings(res.data))
      .catch(function (e) {
        alert(e);
        return;
      });
  }, []);

  const classes = useStyles();
  return (
    <div className={classes.root}>
        {clothings.length>0? clothings.map(clothing=>(<ItemCard key={clothing.id} product={clothing}/>)): <CircularProgress color="inherit" />}
    </div>
  );
}
