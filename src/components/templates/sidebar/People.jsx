import React, { useEffect, useState } from 'react'
import Loader from '../Loader';
import InfiniteScroll from 'react-infinite-scroll-component';
import Dropdown from '../Dropdown';
import Topnav from '../Topnav';
import { useNavigate } from 'react-router-dom';
import axios from '../../../utils/axios';
import Cards from './Cards';

const People = () => {
    const navigate = useNavigate();
    const [category, setcategory] = useState("popular");
    const [person, setperson] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true)


    const GetPeople = async () => {
        try {
          const { data } = await axios.get(`/person/${category}?page=${page}`);
          if (data.results.length > 0) {
            setperson((prevState) => [...prevState, ...data.results]);
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
        if (person.length === 0) {
            GetPeople();
        } else {
          setpage(1);
          setperson([]);
          //yha pe gettendinng data isllye kiye hai kyuki jb react infinte scrollkregea to jb humko movies ka filter chiaye infinte scroll krne ke liye to hamra loading bs hoha
          GetPeople()
        }
      };
    
      useEffect(() => {
        refreshHandler();
      }, [category]);
  return person.length > 0 ? (
    <div className=" h-screen w-screen">
      <div className="w-full flex items-center px-5    ">
        <h2 className="text-zinc-600 text-2xl w-[20%] m-5 font-semibold ">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-yellow-700 cursor-pointer   ri-arrow-left-line"
          ></i>{" "}
          People
        </h2>
        <div className="flex items-center w-[80%]">
          <Topnav />
          <Dropdown
            title="Category"
            option={["popular", "top_rated", "on_the_air","airing_today"]}
            func={(e) => setcategory(e.target.value)}
          />
          <div className="w-[2%]"></div>
         
        </div>
      </div>

      {/* adding functionlites of infinte scroll this is more important concept of the react */}
      <InfiniteScroll
        loader={<h4>loading......</h4>}
        hasMore={hasMore}
        next={GetPeople}
        dataLength={person.length}
      >
        <Cards data={person} title="person" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
}

export default People