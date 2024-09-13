import { useNavigate } from 'react-router-dom';
import axios from '../../../utils/axios';
import React, { useEffect, useState } from 'react'
import Loader from '../Loader';
import Topnav from '../Topnav';
import Dropdown from '../Dropdown';
import InfiniteScroll from 'react-infinite-scroll-component';
import Cards from './Cards';

const Popular = () => {

//favicon mai tending dikhkne ko
document.title="Project | Trending"


    const navigate = useNavigate();
    const [category, setcategory] = useState("movie");
    const [popular, setPopular] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true)

    const GetPopular = async () => {
        try {
          const { data } = await axios.get(`${category}/popular?page=${page}`);
        
          if (data.results.length > 0) {
            setPopular((prevState) => [...prevState, ...data.results]);
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
        if (popular.length === 0) {
            GetPopular();
        } else {
          setpage(1);
          setPopular([]);
          //yha pe gettendinng data isllye kiye hai kyuki jb react infinte scrollkregea to jb humko movies ka filter chiaye infinte scroll krne ke liye to hamra loading bs hoha
          GetPopular()
        }
      };
    
      useEffect(() => {
        refreshHandler();
      }, [category]);




      return popular.length > 0 ? (
        <div className=" h-screen w-screen">
          <div className="w-full flex items-center px-5    ">
            <h2 className="text-zinc-600 text-2xl w-[20%] m-5 font-semibold ">
              <i
                onClick={() => navigate(-1)}
                className="hover:text-yellow-700 cursor-pointer   ri-arrow-left-line"
              ></i>{" "}
              Popoluar
            </h2>
            <div className="flex items-center w-[80%]">
              <Topnav />
              <Dropdown
                title="Category"
                option={["movie", "tv"]}
                func={(e) => setcategory(e.target.value)}
              />
              <div className="w-[2%]"></div>
             
            </div>
          </div>
    
          {/* adding functionlites of infinte scroll this is more important concept of the react */}
          <InfiniteScroll
            loader={<h4>loading......</h4>}
            hasMore={hasMore}
            next={GetPopular}
            //idhhr jaise hi bracket dala turent automaticlly sb data render hone lagega
            dataLength={popular.length}
          >
            <Cards data={popular} title={category} />
          </InfiniteScroll>
        </div>
      ) : (
        <Loader />
      );
}

export default Popular;