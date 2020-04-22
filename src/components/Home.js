import React from "react";
import Navigation from "../Navigation";
import SelectedItems from "./SelectedItems";
import TvItems from "./TvItems";
import ClothingItems from './ClothingItems'
import HomeItems from './HomeItems'
import HomeBread from './HomeBread'
import Footer from './Footer'

export default function Home() {
  return (
    <div>
      <Navigation title="Home" />
      <br />
      <br />
      <br />
      
      <div className="container">
      <SelectedItems />
      <br />
      <HomeBread product="tv" />
      <TvItems />
      <br />
      <HomeBread product="clothing" />
      <ClothingItems />
      <br />
      <HomeBread product="home" />
      <HomeItems />
      </div>
      <Footer />
    </div>
  );
}
