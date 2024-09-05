import React from "react";

const HorizontallyCard = ({ data }) => {
  return (
    <div className="w-full h-[40vh] p-5">
      <div className="mb-5">
        <h1 className="text-2xl  text-zinc-200 font-semibold">Trending</h1>
      </div>

      <div className=" w-[100%] h-[50vh] flex overflow-x-auto ">
        {data.map((card, i) => (
          <div className=" min-w-[20%] bg-slate-500 rounded-md mr-5 overflow-hidden" key={i}>
            <img
              className="w-full h-[55%] object-cover"
              src={`https://image.tmdb.org/t/p/original/${
                card.backdrop_path || card.poster_path
              }`}
              alt=""
            />
            <h1 className="w-[70%] text-xl font-black text-black p-3">
              {card.title || card.orignal_title ||"Unknown"}
            </h1>
            <p className=" w-full mt-3 mb-3  text-white m-2">
              {card.overview.slice(0, 55)} ...
              <span className="m-1 text-blue-500 ">more</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontallyCard;
