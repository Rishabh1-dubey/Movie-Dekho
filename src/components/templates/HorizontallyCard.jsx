import React from "react";
import Dropdown from "./Dropdown";

const HorizontallyCard = ({ data }) => {
  return (
    <div className=" w-[100%] h-[50vh] flex overflow-x-auto mb-10 p-2">
      {data.map((card, i) => (
        <div
          className="relative bottom-2 min-w-[22%] h-[45vh]  bg-slate-500 rounded-md mr-5 overflow-hidden p-1"
          key={i}
        >
          <img
            className="w-full h-[58%] object-cover"
            src={`https://image.tmdb.org/t/p/original/${
              card.backdrop_path || card.poster_path
            }`}
            alt=""
          />
          <div className=" m-auto w-[full] ">

          <h1 className="w-[70%] text-2xl font-bold text-white mx-1">
            {card.title || card.orignal_title || "Unknown"}
          </h1>
          <p className=" pb-8  w-[245px] mx-2 text-white">
            {card.overview.slice(0, 55)}...
            <span className="m-1 text-white">more</span>
          </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HorizontallyCard;
