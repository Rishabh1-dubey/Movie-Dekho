import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../utils/axios";
const Topnav = () => {
  const [query, setQuery] = useState("");
  const [serach, setSearch] = useState([]);
  const GetSearchs = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setSearch(data.results);
      // console.log(data.results);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    GetSearchs();
  }, [query]);


  return (
    <div className="w-full h-[10vh] relative flex justify-start items-center ml-[20%] ">
      <i className="text-3xl text-zinc-400 ri-search-line"></i>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="w-[50%] text-zinc-200 mx-10 p-5 text-xl outline-none border-none bg-transparent"
        type="text"
        placeholder="Enter your movie"
      />

      {query.length > 0 && (
        <i
          onClick={() => setQuery("")}
          className=" text-3xl text-zinc-500 ri-close-line"
        ></i>
      )}

      <div className="absolute w-[50%] max-h-[50vh] top-[90%] bg-zinc-300 overflow-auto">
        {serach.map((s, i) => (
          <Link
            key={i}
            className=" text-black  flex justify-start items-center bg-zinc-300 w-[100%] border-b-2 border-zinc-100 font-semibold hover:text-white hover:bg-zinc-400 duration-200 p-6 "
          >
            <img
              className="w-[10vh] h-[10vh] object-cover rounded mr-5 shadow-lg"
              src={`https://image.tmdb.org/t/p/original/${
                s.backdrop_path || s.profile_path || s.poster_path
              }`}
              alt=""
            />
            <span>{s.name || s.original_name || s.original_title}</span>
          </Link>
        ))}
        {/* */}
      </div>
    </div>
  );
};

export default Topnav;
