import React from "react";
import { Link } from "react-router-dom";
import { IMG_URL } from "../../../utils/constents";

const Cards = ({ data, title }) => {
  console.log(title)
  const getBadgeColor = (rating) => {
    if (rating > 80) {
      return "bg-green-500"; // Green for ratings above 70%
    } else if (rating <= 70) {
      return "bg-yellow-500"; // Yellow for ratings 60% or below
    } else {
      return "bg-blue-500"; // Blue for ratings between 61% and 70%
    }
  };

  console.log(data);
  return (
    <div className="flex flex-wrap w-full h-full pl-10 bg-[#1F1E24]">
      {data.map((c, i) => (
        <Link to={`/${data.media_type || title}/details/${c.id}`} className="   relative w-[35vh] mr-10  mt-4 " key={i}>
          <img
            className="h-[50vh] w-[45vh]    rounded-lg  hover:scale-105 delay-100 transition-all ease-in-out  "
            src={
              c.poster_path || c.backdrop_path || c.profile_path
                ? `https://image.tmdb.org/t/p/original/${
                    c.poster_path || c.backdrop_path || c.profile_path
                  }`
                : IMG_URL
            }
            alt=""
          />
          <h2 className=" text-2xl mt-2 text-zinc-400 font-semibold hover:text-red-500  ease-in-out delay-50 ">
            {c.name || c.title || c.original_title || c.original_name}
          </h2>
          {c.vote_average && (
            <div
              className={`absolute bottom-[20%] right-[-10%] text-white text-lg w-[5.7vh] h-[5vh] flex justify-center items-center rounded-full font-semibold ${getBadgeColor(
                (c.vote_average * 10).toFixed()
              )}`}
            >
              {(c.vote_average * 10).toFixed()}
              <sup>%</sup>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
};

export default Cards;
