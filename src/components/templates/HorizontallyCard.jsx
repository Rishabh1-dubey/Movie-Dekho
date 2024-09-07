import React from "react";
import Dropdown from "./Dropdown";

const HorizontallyCard = ({ data }) => {
  return (
    <div className=" w-[100%] h-[45vh] flex overflow-x-auto mb-10 p-2">
      {data.map((card, i) => (
        <div
          className=" min-w-[22%]  bg-slate-500 rounded-md mr-5 overflow-hidden"
          key={i}
        >
          <img
            className="w-full h-[55%] object-cover"
            src={`https://image.tmdb.org/t/p/original/${
              card.backdrop_path || card.poster_path
            }`}
            alt=""
          />
          <h1 className="w-[70%] text-xl font-black text-white p-2">
            {card.title || card.orignal_title || "Unknown"}
          </h1>
          <p className=" w-full mt-3 mb-3  text-white m-2">
            {card.overview.slice(0, 55)} ...
            <span className="m-1 text-blue-500 ">more</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default HorizontallyCard;
