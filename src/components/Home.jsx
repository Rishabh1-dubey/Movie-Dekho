import React, { useEffect, useState } from "react";
import Sidenav from "./templates/Sidenav";
import Topnav from "./templates/Topnav";
import axios from "../utils/axios";
import Header from "./templates/Header";
import HorizontallyCard from "./templates/HorizontallyCard";

const Home = () => {
  const [wallpapaer, setWallpaper] = useState(null);
  const [trending , setTrending] = useState(null)


  //<----------------- header wallpaper render ----------------------->
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

  //<------------------------ Trending data render ------------------->
  const GetTredingData = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      
      setTrending(data.results);
    } catch (error) {
      console.log("Error", error);
    }
  };
console.log(wallpapaer);

// <-------calling use effect -------------------------->
  useEffect(() => {
    !wallpapaer && GetHeaderWallpaper();
    !trending && GetTredingData();
  }, []);
  console.log(trending);

  return wallpapaer && trending ? (
    <>
      <Sidenav />
      <div className="w-[80%] h-full bg-gray-800 overflow-auto overflow-x-hidden" >
        <Topnav />
        <Header data={wallpapaer} />
        <HorizontallyCard data={trending}/>
      </div>
    </>
  ):<h1>Loading whi shimmer wla effect dal dena</h1>
};

export default Home;
