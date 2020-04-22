import React from "react";
import Navigation from "../Navigation";
import SelectedItems from "./SelectedItems";
import TvItems from "./TvItems";
import HomeBread from "./HomeBread";


export default function Home() {
  return (
    <div>
      <Navigation title="Electronic" />
      <br />
      <br />
      <br />

      <div className="container">
        <SelectedItems />
        <br />
        <HomeBread product="tv" />
        <TvItems />
      </div>
    </div>
  );
}
