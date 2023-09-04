import React, { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import Carousel from "../../../components/carousel/Carousel";
import "../trending/trending.scss";
import useFetch from "../../../hooks/useFetch";

const TopRated = () => {
  const [endpoint, setEndpoint] = useState("movie");
  const onTabChange = (item) => {
    setEndpoint(item === "Movie" ? "movie" : "tv");
  };
  const { data, loading } = useFetch(`/${endpoint}/top_rated`);
  console.log(data)
  return (
    <div className="carouselSection">
      <ContentWrapper className="contentWrapper">
        <span className="carouselTitle">Top Rated</span>
        <SwitchTabs data={["Movie", "TV Shows"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} />
    </div>
  );
};

export default TopRated;
