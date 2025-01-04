import React from "react";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

const HorizontallyCard = ({ data }) => {
  return (
    <div className=" w-screen h-[50vh] flex overflow-x-auto mb-10 p-2 ">
      {data.map((card, i) => (
        <Link to={`/${card.media_type}/details/${card.id}`}
          className="relative bottom-2 min-w-[18%] h-[42vh]  bg-zinc-700 rounded-md mr-5 overflow-hidden p-1  transform hover:scale-95 transition-all ease-out delay-100"
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

          <h1 className=" pt-2 w-[70%] text-2xl font-semibold text-zinc-200 mx-2 pb-2">
            {card?.title?.slice(0,7) || card?.orignal_title ||card?.name||card?.original_name || "Unknown"}
          </h1>
          <p className=" pb-8 overflow-y-auto  w-[245px] mx-2 text-white font-2xl">
            {card.overview.slice(0, 45)}...
            <span className="m-1 text-white">more</span>
          </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HorizontallyCard;
