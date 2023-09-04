import React, { useState } from "react";
import "../trending/trending.scss"
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import Carousel from "../../../components/carousel/Carousel";
import useFetch from "../../../hooks/useFetch";

const Popular = () => {
  const [endpoint, setEndpoint] = useState("movie");
  const onTabChange = (item,index) => {
    setEndpoint(item === "Movie" ? "movie" : "tv");
  };
  const { data, loading } = useFetch(`/${endpoint}/popular`);
  return (
    <div className="carouselSection">
      <ContentWrapper className="contentWrapper">
        <span className="carouselTitle">Popular</span>
        <SwitchTabs data={["Movie", "TV Shows"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} />
    </div>
  );
};

export default Popular;
