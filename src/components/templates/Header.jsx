import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ data }) => {
  console.log(data)
  const [isExpanded, setIsExpanded] = useState(false); 
 
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.8)),url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.poster_path
        } )`,
        backgroundPosition: "top 10%",
        backgroundSize: "cover",
      }}
      className="w-full h-[60vh] flex flex-col justify-end items-start p-[5%] object-cover"
    >
      <h1 className=" w-[70%] text-slate-50 font-black text-5xl ">
        {data?.title || data?.orignal_title || data?.name|| "Unknown"}
      </h1>
      <h1 className=" w-[70%] mt-3 mb-3  text-slate-100 font-medium ">
      {isExpanded ? data.overview : `${data.overview.slice(0, 200)} ...`}
      <Link
        className="m-1 text-gray-400 cursor-pointer hover:text-gray-700 hover:delay-200 transition ease-in-out"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "less" : "Know More"}
        </Link>
      </h1>

      <p className=" text-white mb-6">
        <i className="ri-focus-2-line  text-yellow-200 "></i>{" "}
        {data.media_type.toUpperCase()}{" "}
        <i className=" ml-5 ri-megaphone-line  text-yellow-200 "> </i>
        {data.release_date || "No Information"}.
      </p>
      <Link to={`/${data.media_type}/details/${data.id}`} className="mt-5 bg-purple-600 rounded text-white p-3">
        Watch Trailer
      </Link>
    </div>
  );
};

export default Header;
