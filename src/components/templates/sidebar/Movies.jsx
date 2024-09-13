import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Loader from '../Loader';
import axios from '../../../utils/axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import Cards from './Cards';
import Topnav from '../Topnav';
import Dropdown from '../Dropdown';

const Movies = () => {
    const navigate = useNavigate();
    const [category, setcategory] = useState("now_playing");
    const [movie, setmovie] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true)

    const GetMovie = async () => {
        try {
          const { data } = await axios.get(`/movie/${category}?page=${page}`);
          if (data.results.length > 0) {
            setmovie((prevState) => [...prevState, ...data.results]);
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
        if (movie.length === 0) {
            GetMovie();
        } else {
          setpage(1);
          setmovie([]);
          //yha pe gettendinng data isllye kiye hai kyuki jb react infinte scrollkregea to jb humko movies ka filter chiaye infinte scroll krne ke liye to hamra loading bs hoha
          GetMovie()
        }
      };
    
      useEffect(() => {
        refreshHandler();
      }, [category]);



  return movie.length > 0 ? (
    <div className=" h-screen w-screen">
      <div className="w-full flex items-center px-5    ">
        <h2 className="text-zinc-600 text-2xl w-[20%] m-5 font-semibold ">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-yellow-700 cursor-pointer   ri-arrow-left-line"
          ></i>{" "}
          Movies
        </h2>
        <div className="flex items-center w-[80%]">
          <Topnav />
          <Dropdown
            title="Category"
            option={["popular", "top_rated", "now_playing","upcoming"]}
            func={(e) => setcategory(e.target.value)}
          />
          <div className="w-[2%]"></div>
         
        </div>
      </div>

      {/* adding functionlites of infinte scroll this is more important concept of the react */}
      <InfiniteScroll
        loader={<h4>loading......</h4>}
        hasMore={hasMore}
        next={GetMovie}
        dataLength={movie.length}
      >
        <Cards data={movie} title="movie" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
}

export default Movies