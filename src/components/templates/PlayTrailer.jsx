import React from "react";
import ReactPlayer from "react-player/youtube";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NotFound from "./NotFound";


const PlayTrailer = () => {
  const { pathname } = useLocation();
  const Navigate = useNavigate();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytvidoes = useSelector((state) => state[category].info.videos);
 
  return  (
    <div className="absolute bg-[rgba(0,0,0,0.5)] z-[100]  h-screen w-screen top-0 left-0  flex bg-  items-center justify-center">
      <Link
        onClick={() => Navigate(-1)}
        className="absolute selection:hover:text-purple-300 ri-close-fill text-3xl text-white right-[15%] top-[5%] "
      ></Link>
     { ytvidoes? (<ReactPlayer
     controls
        height={600}
        width={900}
        url={`https://www.youtube.com/watch?v=${ytvidoes.key}`}
      />):<NotFound/>}
    </div>
  )
};

export default PlayTrailer;
