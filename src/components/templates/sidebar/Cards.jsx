import React from "react";
import { Link } from "react-router-dom";
import { IMG_URL } from "../../../utils/constents";

const Cards = ({ data, title }) => {
  return (
    <div className="flex flex-wrap w-full h-full pl-10 bg-[#1F1E24]">
      {data.map((c, i) => (
        <div className="   w-[35vh] mr-10  mt-4 " key={i}>
          <img
            className="h-[50vh] w-[45vh]   cursor-pointer  rounded-lg  hover:scale-105 delay-100 transition-all ease-in-out  "
            src={  c.poster_path || c.backdrop_path ||c.profile_path ?`https://image.tmdb.org/t/p/original/${
              c.poster_path || c.backdrop_path ||c.profile_path
            }`: IMG_URL}
            alt=""
          />
          <h2 className=" text-2xl mt-2 text-zinc-400 font-semibold hover:text-red-500 cursor-pointer ease-in-out delay-50 ">{c.name || c.title || c.original_title || c.original_name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Cards;
