import React from "react";
import "./home.scss";
import HeroBanner from "./heroBanner/HeroBanner";
import Trendings from "./trending/Trendings";
import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated";
const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <div style={{ height: "1000px", color: "white" }}>Hey</div>
      <Trendings />
      <Popular />
      <TopRated />
    </div>
  );
};

export default Home;
