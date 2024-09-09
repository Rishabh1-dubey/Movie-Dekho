import React from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <div className="w-[20%] h-full bg-slate-600 border-r-2  	">
      <h1 className=" font-bold text-xl  p-3">
        <i className="text-[35px] text-[#B838AF] ri-movie-fill  "></i>
        <span className="text-2xl  text-white m-3 hover:text-[#B838AF] duration-300 cursor-pointer">Jio Cinema</span>
      </h1>

      <nav className="  flex flex-col p-6 gap-3">

        <h1 className="text-white text-xl  font-bold"> New Feeds</h1>

        <Link to="/trending" className=" text-slate-300 hover:bg-[#b838af] rounded-lg hover:text-white duration-300 p-4">
          <i className="ri-fire-fill v"></i> Trending
        </Link>

        <Link className="  text-slate-300 text-slate-300e hover:bg-[#b838af] rounded-lg hover:text-white duration-300 p-4">
          <i className="ri-sparkling-line mr-2"></i>Popular
        </Link>

        <Link className=" text-slate-300 hover:bg-[#b838af] rounded-lg hover:text-white duration-300 p-4">
          <i className="ri-film-line mr-2"></i>Movies
        </Link>
        <Link className=" text-slate-300 hover:bg-[#b838af] rounded-lg hover:text-white duration-300 p-4">
          <i className="ri-tv-fill mr-2"></i>TV Shows
        </Link>
        <Link className=" text-slate-300 hover:bg-[#b838af] rounded-lg hover:text-white duration-300 p-4">
          <i className="ri-user-line mr-2"></i> People
        </Link>

        {/* aobut us section */}
        <hr className="border-none bg-slate-400 h-[1px]" />
        <h1 className="text-slate-100 font-bold text-xl">Website Informatin</h1>
        <Link className=" text-slate-300 hover:bg-[#b838af] rounded-lg hover:text-white duration-300 p-4">
          <i className="ri-pages-line"></i> About Us
        </Link>
        <Link className=" text-slate-300 hover:bg-[#b838af] rounded-lg hover:text-white duration-300 p-4">
          <i className="ri-customer-service-line"></i> Contact Us{" "}
        </Link>
      </nav>
    </div>
  );
};

export default Sidenav;
