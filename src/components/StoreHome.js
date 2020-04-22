import React from "react";
import Navigation from "../Navigation";
import SelectedItems from "./SelectedItems";
import HomeItems from "./HomeItems";
import HomeBread from "./HomeBread";


export default function Home() {
  return (
    <div>
      <Navigation title="Home Decoration" />
      <br />
      <br />
      <br />

      <div className="container">
        <SelectedItems />
        <br />
        <HomeBread product="home" />
        <HomeItems />
      </div>
     
    </div>
  );
}
