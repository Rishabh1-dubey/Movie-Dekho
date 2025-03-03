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
      console.log(data)
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
    
      <div className=" w-full md:w-[97%] h-full bg-gray-700 overflow-auto overflow-x-hidden">
        <Topnav />
        <Header data={wallpapaer} />

        <div className="mb-8 p-4 md:p-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <h1 className="text-2xl md:text-3xl text-zinc-200 font-bold mb-4 md:mb-0">
              Trending
            </h1>
          {/* drop down render */}
          <Dropdown
            title="Filter"
            option={["movie", "tv", "all"]}
            func={(e) => setCategory(e.target.value )}
          />
        </div>

        <HorizontallyCard data={trending} func={setCategory}/>
      </div>
      </div> 
    </>
  ) : (
    <Loader/>
  );
};

export default Home;
