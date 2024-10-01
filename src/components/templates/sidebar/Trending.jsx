import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "../Topnav";
import Dropdown from "../Dropdown";
import axios from "../../../utils/axios";
import Cards from "../sidebar/Cards";
import Loader from "../Loader";

import InfiniteScroll from "react-infinite-scroll-component";

const Trending = () => {

document.title="Project | Popular "


  const navigate = useNavigate();
  const [category, setcategory] = useState("movie");
  const [duration, setduration] = useState("day");
  const [trending, settrending] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true)

  const GetTredingData = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}?page=${page}`);
     console.log(data)
      if (data.results.length > 0) {
        settrending((prevState) => [...prevState, ...data.results]);
        setpage(page + 1);
      }else{
        sethasMore(false)
      }
      // settrending(data.results);
    
    } catch (error) {
      console.log("Error", error);
    }
  };

  const refreshHandler =  () => {
    if (trending.length === 0) {
      GetTredingData();
    } else {
      setpage(1);
      settrending([]);
      //yha pe gettendinng data isllye kiye hai kyuki jb react infinte scrollkregea to jb humko movies ka filter chiaye infinte scroll krne ke liye to hamra loading bs hoha
      GetTredingData()
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category, duration]);

  return trending.length > 0 ? (
  
    <div className=" h-screen w-screen">
      <div className="w-full flex items-center px-5    ">
        <h2 className="text-zinc-600 text-2xl w-[20%] m-5 font-semibold ">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-yellow-700 cursor-pointer   ri-arrow-left-line"
          ></i>{" "}
          Trending
        </h2>
        <div className="flex items-center w-[80%]">
          <Topnav />
          <Dropdown
            title="Category"
            option={["movie", "tv", "all"]}
            func={(e) => setcategory(e.target.value)}
          />
          <div className="w-[2%]"></div>
          <Dropdown
            title="Duration"
            option={["week", "day"]}
            func={(e) => setduration(e.target.value)}
          />
        </div>
      </div>

      {/* adding functionlites of infinte scroll this is more important concept of the react */}
      <InfiniteScroll
        loader={<h4>loading......</h4>}
        hasMore={hasMore}
        next={GetTredingData}
        dataLength={trending.length}
      >
        <Cards data={trending} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
};

export default Trending;
