import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidenav = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`fixed md:relative h-screen bg-black border-r-2 border-zinc-700 overflow-y-auto transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      {/* Logo and Brand Name */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <img
            className="h-12 w-12 rounded-full"
            src="https://i.pinimg.com/474x/4c/3f/b4/4c3fb4ea87a4b1cbc6f21e9e08bab7da.jpg"
            alt="Streamy Logo"
          />
          {!isCollapsed && (
            <span className="text-2xl font-medium text-white ml-2 hover:text-[#B838AF] duration-300 cursor-pointer">
              Streamy
            </span>
          )}
        </div>
        <button
          onClick={toggleSidebar}
          className="text-white hover:text-yellow-500 focus:outline-none md:hidden"
        >
          <i className={`ri-${isCollapsed ? "menu-line" : "close-line"} text-xl`}></i>
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col p-4 gap-2">
        <h1 className={`text-white text-lg font-semibold mb-2 ${isCollapsed ? "hidden" : ""}`}>
          New Feeds
        </h1>


        <NavLink
          to="/trending"
          className={({ isActive }) =>
            `flex items-center text-slate-300 cursor-pointer  hover:bg-zinc-800 hover:text-yellow-500 rounded-lg duration-300 p-3 ${
              isActive ? "bg-zinc-800 text-yellow-500" : ""
            }`
          }
        >
          <i className="ri-fire-fill text-xl mr-2"></i>
          {!isCollapsed && <span className="text-sm">Trending</span>}
        </NavLink>

        <NavLink
          to="/popular"
          className={({ isActive }) =>
            `flex items-center  cursor-pointer text-slate-300 hover:bg-zinc-800 hover:text-yellow-500 rounded-lg duration-300 p-3 ${
              isActive ? "bg-zinc-800 text-yellow-500" : ""
            }`
          }
        >
          <i className="ri-sparkling-line text-xl mr-2"></i>
          {!isCollapsed && <span className="text-sm">Popular</span>}
        </NavLink>

        <NavLink
          to="/movie"
          className={({ isActive }) =>
            `flex items-center  cursor-pointer text-slate-300 hover:bg-zinc-800 hover:text-yellow-500 rounded-lg duration-300 p-3 ${
              isActive ? "bg-zinc-800 text-yellow-500" : ""
            }`
          }
        >
          <i className="ri-film-line text-xl mr-2"></i>
          {!isCollapsed && <span className="text-sm">Movies</span>}
        </NavLink>

        <NavLink
          to="/tv"
          className={({ isActive }) =>
            `flex items-center  cursor-pointer text-slate-300 hover:bg-zinc-800 hover:text-yellow-500 rounded-lg duration-300 p-3 ${
              isActive ? "bg-zinc-800 text-yellow-500" : ""
            }`
          }
        >
          <i className="ri-tv-fill text-xl mr-2"></i>
          {!isCollapsed && <span className="text-sm">TV Shows</span>}
        </NavLink>

        <NavLink
          to="/person"
          className={({ isActive }) =>
            `flex items-center text-slate-300 hover:bg-zinc-800 hover:text-yellow-500 rounded-lg duration-300 p-3 ${
              isActive ? "bg-zinc-800 text-yellow-500" : ""
            }`
          }
        >
          <i className="ri-user-line text-xl mr-2"></i>
          {!isCollapsed && <span className="text-sm">People</span>}
        </NavLink>

        {/* Divider */}
        <hr className="border-none bg-zinc-700 h-[1px] my-4" />

        {/* Website Information Section */}
        <h1 className={`text-slate-200 text-lg font-medium mb-2 ${isCollapsed ? "hidden" : ""}`}>
          Website Information
        </h1>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `flex items-center text-slate-300 hover:bg-zinc-800 hover:text-yellow-500 rounded-lg duration-300 p-3 ${
              isActive ? "bg-zinc-800 text-yellow-500" : ""
            }`
          }
        >
          <i className="ri-pages-line text-xl mr-2"></i>
          {!isCollapsed && <span className="text-sm">About Us</span>}
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `flex items-center text-slate-300 hover:bg-zinc-800 hover:text-yellow-500 rounded-lg duration-300 p-3 ${
              isActive ? "bg-zinc-800 text-yellow-500" : ""
            }`
          }
        >
          <i className="ri-customer-service-line text-xl mr-2"></i>
          {!isCollapsed && <span className="text-sm">Contact Us</span>}
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidenav;