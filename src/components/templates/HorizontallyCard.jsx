import React from "react";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

const HorizontallyCard = ({ data }) => {
  return (
    <div className=" w-[100%] h-[50vh] flex overflow-x-auto mb-10 p-2">
      {data.map((card, i) => (
        <Link to={`/${card.media_type}/details/${card.id}`}
          className="relative bottom-2 min-w-[22%] h-[45vh]  bg-gray-600 rounded-md mr-5 overflow-hidden p-1"
          key={i}
        >
          <img
            className="w-full  h-[58%] object-cover"
            src={`https://image.tmdb.org/t/p/original/${
              card.backdrop_path || card.poster_path
            }`}
            alt=""
          />
          <div className=" m-auto w-[full]">

          <h1 className=" pt-2 w-[70%] text-xl font-semibold text-white mx-2">
            {card.title || card.orignal_title || "Unknown"}
          </h1>
          <p className=" pb-8 overflow-y-auto  w-[245px] mx-2 text-white">
            {card.overview.slice(0, 55)}...
            <span className="m-1 text-white">more</span>
          </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HorizontallyCard;
