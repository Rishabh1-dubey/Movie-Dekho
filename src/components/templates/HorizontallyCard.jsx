import React from "react";
import { Link } from "react-router-dom";

const HorizontallyCard = ({ data }) => {
  return (
    <div className="w-full h-auto flex overflow-x-auto mb-16 p-2">
      {data.map((card, i) => (
        <Link
          to={`/${card.media_type}/details/${card.id}`}
          className="relative min-w-[150px] sm:min-w-[180px] md:min-w-[200px] lg:min-w-[220px] xl:min-w-[240px] h-[200px] sm:h-[220px] md:h-[240px] lg:h-[260px] xl:h-[280px]   rounded-md mr-5 overflow-hidden p-1 transform hover:scale-95 transition-all ease-out delay-100"
          key={i}
        >
          <img
            className="w-full h-[60%] object-cover rounded-lg"
            src={`https://image.tmdb.org/t/p/original/${
              card.backdrop_path || card.poster_path
            }`}
            alt=""
          />
          <div className="m-auto w-full">
            <h1 className="pt-2 w-full text-sm sm:text-base md:text-lg font-semibold text-zinc-200 mx-2 pb-2">
              {card?.title?.slice(0, 7) || card?.original_title || card?.name || card?.original_name || "Unknown"}
            </h1>
            <p className="pb-8 overflow-y-auto w-full mx-2 text-white text-xs sm:text-sm md:text-base">
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