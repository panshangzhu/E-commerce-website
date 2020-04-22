import React, { useState } from "react";
import UserApi from "../Apis/UserApi";
import Slider from "react-slick";

const selectedObject = "/selected";

export default function SelectedItems() {
  const [selected, setSelected] = useState([]);
  React.useEffect(() => {
    UserApi.get(selectedObject).then((promise) => setSelected(promise.data));
  }, []);
  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return <Slider {...setting}>
      {selected.map(s=>(<img src={s} key={s} />))}
  </Slider>;
}
