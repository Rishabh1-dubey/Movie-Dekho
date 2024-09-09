import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "../Topnav";
import Dropdown from "../Dropdown";
import axios from "../../../utils/axios";



const Trending = () => {
  const navigate = useNavigate();
  const [category, setcategory] = useState("all");
  const [trending,settrending ] = useState("day");
  const [duration, setduration] = useState(null);
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

  const GetTredingData = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}`);
      settrending(data.results);
    } catch (error) {
      console.log("Error", error);
    }
  };

  console.log(trending);

  useEffect(() => {
    GetTredingData()
  },[category,duration])

  return (
    <div className=" h-screen w-screen p-[1%]">
      <div className="w-full flex items-center  ">
        <h2 className="text-zinc-600 text-2xl w-[20%] m-5 font-semibold ">
          <i
            onClick={() => navigate(-1)}
            class="hover:text-yellow-700 cursor-pointer   ri-arrow-left-line"
          ></i>{" "}
          Trending
        </h2>
        <div className="flex items-center w-[80%]">
          <Topnav />
          <Dropdown title="Category" option={["movie", "tv", "all"]} func={(e)=>setcategory(e.target.value)} />
          <div className="w-[2%]"></div>
          <Dropdown title="Duration" option={["week", "day"]} func={(e)=>setduration(e.target.value)} />
        </div>
      </div>
    </div>
  );
};

export default Trending;
