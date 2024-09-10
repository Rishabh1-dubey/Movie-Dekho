import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ data, title }) => {
  return (
    <div className="flex flex-wrap w-full h-full pl-4 bg-[#1F1E24] ">
      {data.map((c, i) => (
        <Link className="w-[35vh] mr-10  mt-4" key={i}>
          <img
            className="h-[45vh] w-[50vh]  hover:shadow-orange-600  rounded-lg  hover:scale-105 delay-100 transition-all ease-in-out  "
            src={`https://image.tmdb.org/t/p/original/${
              c.poster_path || c.backdrop_path
            }`}
            alt=""
          />
          <h2 className=" text-2xl mt-2 text-zinc-400 font-semibold hover:text-red-500 hover:transition-all ease-in-out delay-50 hover:scale-105">{c.name || c.title || c.original_title || c.original_name}</h2>
        </Link>
      ))}
    </div>
  );
};

export default Cards;
