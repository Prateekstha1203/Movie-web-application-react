import React, { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router-dom";
import "./heroBanner.scss";

import useFetch from "../../../hooks/useFetch";
import Img from "../../../components/lazyLoadImage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { data, loading, error } = useFetch("/movie/upcoming");

  const { url } = useSelector((state) => state.home);
  
  useEffect(() => {
    if (url?.backdrop && data?.results) {
      const bgURL =
        url.backdrop +
        data.results[Math.floor(Math.random() * data.results.length)]
          .backdrop_path;
      console.log("Background URL:", bgURL);
      setBackground(bgURL);
    }
  }, [data, loading, error, url]);

  const searchHandler = () => {
    if (query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  const handleKeyUp = (event) => {
    if (event.key === "Enter") {
      searchHandler();
    }
  };

  return (
    <div className="hero_banner">
      {!loading && (
        <div className="backdrop-img">
          <Img src={background} />
        </div>
      )}
      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="hero_banner_content">
          <span className="title">Welcome.</span>
          <span className="subTitle">
            A Universe of Movies at Your Fingertips. Explore now
          </span>
          <div className="searchMovie">
            <input
              type="text"
              placeholder="Search for a movie or TV show..."
              onKeyUp={handleKeyUp}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={searchHandler}>Search</button>
          </div>
        </div>
      </ContentWrapper>

      <div className="wrapper"></div>
    </div>
  );
};

export default HeroBanner;
