import React from "react";
import "./home.scss";
import HeroBanner from "./heroBanner/HeroBanner";

const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <div style={{ height: "1000px", color: "white" }}>Hey</div>
    </div>
  );
};

export default Home;
