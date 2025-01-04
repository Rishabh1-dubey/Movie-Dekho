import React from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <div className="w-[20%] h-full bg-black border-r-2  	">
   
        <div className="flex mt-2">

       <img className="h-16" src="https://i.pinimg.com/474x/4c/3f/b4/4c3fb4ea87a4b1cbc6f21e9e08bab7da.jpg"/>
        <span className="text-3xl  font-medium text-white py-4 px-6 hover:text-[#B838AF] duration-300 cursor-pointer">Streamy</span>
        </div>
    

      <nav className="  flex flex-col py-2 px-6 gap-3">

        <h1 className="text-white text-xl  font-semibold"> New Feeds</h1>

        <Link to="/trending" className=" text-slate-300  rounded-lg hover:text-yellow-500 duration-300 p-4 ">
          <i className="ri-fire-fill text-2xl px-2"></i> Trending
        </Link>

        <Link to="/popular" className="  text-slate-300   rounded-lg hover:text-yellow-500 duration-300 p-4  ">
          <i className="ri-sparkling-line mr-2 text-2xl  px-2"></i>Popular
        </Link>

        <Link to="/movie" className=" text-slate-300 rounded-lg hover:text-yellow-500 duration-300 p-4 ">
          <i className="ri-film-line mr-2 text-2xl  px-2"></i>Movies
        </Link>
        <Link to="/tv" className=" text-slate-300 hover:text-yellow-500 rounded-lg  duration-300 p-4 ">
          <i className="ri-tv-fill mr-2  text-2xl px-2"></i>TV Shows
        </Link>
        <Link to="/person" className=" text-slate-300 hover:text-yellow-500 rounded-lg duration-300 p-4  ">
          <i className="ri-user-line mr-2  text-2xl px-2"></i> People
        </Link>

        {/* aobut us section */}
        <hr className="border-none bg-slate-400 h-[1px]" />
        <h1 className="text-slate-200  text-xl font-medium">Website Informatin</h1>
        <Link className=" text-slate-300 hover:text-yellow-500 rounded-lg  duration-300 p-4 ">
          <i className="ri-pages-line"></i> About Us
        </Link>
        <Link className=" text-slate-300 hover:text-yellow-500 rounded-lg duration-300 p-4  ">
          <i className="ri-customer-service-line"></i> Contact Us{" "}
        </Link>
      </nav>
    </div>
  );
};

export default Sidenav;
