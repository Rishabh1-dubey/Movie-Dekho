import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.8)),url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.poster_path
        })`,
        backgroundPosition: "top 10%",
        backgroundSize: "cover",
      }}
      className="w-full h-[50vh] md:h-[60vh] flex flex-col justify-end items-start p-[5%]"
    >
      {/* Title */}
      <h1 className="w-full md:w-[70%] text-slate-50 font-black text-2xl md:text-5xl">
        {data?.title || data?.original_title || data?.name || "Unknown"}
      </h1>

      {/* Overview */}
      <p className="w-full md:w-[70%] mt-3 mb-3 text-slate-100 font-medium text-sm md:text-base">
        {isExpanded ? data.overview : `${data.overview.slice(0, 200)}...`}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="ml-1 text-gray-400 cursor-pointer hover:text-gray-200 transition duration-200"
        >
          {isExpanded ? "Show Less" : "Know More"}
        </button>
      </p>

      {/* Media Type and Release Date */}
      <div className="flex flex-col md:flex-row gap-2 md:gap-5 text-white mb-6">
        <p>
          <i className="ri-focus-2-line text-yellow-200"></i>{" "}
          {data.media_type.toUpperCase()}
        </p>
        <p>
          <i className="ri-megaphone-line text-yellow-200"></i>{" "}
          {data.release_date || "No Information"}
        </p>
      </div>

      {/* Watch Trailer Button */}
      <Link
        to={`/${data.media_type}/details/${data.id}`}
        className="mt-5 bg-purple-600 rounded text-white px-6 py-2 hover:bg-purple-900 transition duration-200"
      >
        Watch Trailer
      </Link>
    </div>
  );
};

export default Header;