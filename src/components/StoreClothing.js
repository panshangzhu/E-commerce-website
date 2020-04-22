import React from "react";
import Navigation from "../Navigation";
import SelectedItems from "./SelectedItems";
import ClothingItems from "./ClothingItems";
import HomeBread from "./HomeBread";

export default function Home() {
  return (
    <div>
      <Navigation title="Clothing" />
      <br />
      <br />
      <br />

      <div className="container">
        <SelectedItems />
        <br />
        <HomeBread product="clothing" />
        <ClothingItems />
      </div>
    </div>
  );
}
