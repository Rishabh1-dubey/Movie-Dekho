import React, { useEffect, useState } from "react";
import Sidenav from "./templates/Sidenav";
import Topnav from "./templates/Topnav";
import axios from "../utils/axios";
import Header from "./templates/Header";

const Home = () => {
  const [wallpapaer, setWallpaper] = useState(null);

  const GetHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomData =
        data.results[(Math.random() * data.results.length).toFixed()];
      setWallpaper(randomData);
    } catch (error) {
      console.log("Error", error);
    }
  };
console.log(wallpapaer)
  useEffect(() => {
    !wallpapaer && GetHeaderWallpaper();
  }, []);

  return wallpapaer ? (
    <>
      <Sidenav />
      <div className="w-[80%] h-full bg-gray-800">
        <Topnav />
        <Header data={wallpapaer} />
      </div>
    </>
  ):<h1>Loading whi shimmer wla effect dal dena</h1>
};

export default Home;
