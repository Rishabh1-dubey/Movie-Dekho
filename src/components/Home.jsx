import React, { useEffect, useState } from "react";
import Sidenav from "./templates/Sidenav";
import Topnav from "./templates/Topnav";
import axios from "../utils/axios";
import Header from "./templates/Header";
import HorizontallyCard from "./templates/HorizontallyCard";
import Dropdown from "./templates/Dropdown";
import Loader from "./templates/Loader";

const Home = () => {
  const [wallpapaer, setWallpaper] = useState(null);
  const [trending, setTrending] = useState(null);
  const [category, setCategory] = useState("all");

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
      const { data } = await axios.get(`/trending/${category}/day`);
      setTrending(data.results);
    } catch (error) {
      console.log("Error", error);
    }
  };
// console.log(trending)

  // <-------calling use effect -------------------------->
  useEffect(() => {
    // trending && GetTredingData();
    // when we call all api like we did in filter option so it will automatically call only getTending data untill we did not  change the value;
    GetTredingData();
    !wallpapaer && GetHeaderWallpaper();
  }, [category]);

  return wallpapaer && trending ? (
    <>
      <Sidenav />
      <div className="w-[80%] h-full bg-gray-800 overflow-auto overflow-x-hidden">
        <Topnav />
        <Header data={wallpapaer} />

        <div className="mb-5 flex justify-between p-4">
          <h1 className="text-2xl  text-zinc-200 font-semibold">Trending</h1>
          {/* drop down render */}
          <Dropdown
            title="Filter"
            option={["movie", "tv", "all"]}
            func={(e) => setCategory(e.target.value )}
          />
        </div>

        <HorizontallyCard data={trending} func={setCategory}/>
      </div>
    </>
  ) : (
    <Loader/>
  );
};

export default Home;
