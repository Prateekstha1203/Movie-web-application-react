import React from "react";
import "./genre.scss";
import { useSelector } from "react-redux";

const Genre = ({ data }) => {
  const { genres } = useSelector((state) => state.home);
  return (
    <div className="genres">
      {data?.map((g) => {
        if (!genres[g]?.name) return;
        return (
          <div className="genre" key={g}>
            {genres[g].name}
          </div>
        );
      })}
    </div>
  );
};

export default Genre;
