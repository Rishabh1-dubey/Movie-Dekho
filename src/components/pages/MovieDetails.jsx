import React, { useEffect } from "react";
import { asyncloaddMovies } from "../../store/actions/movieAction";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { removemovie } from "../../store/reducers/movieSlic";
import Loader from "../templates/Loader";

const MovieDetails = () => {
  // const params=  useParams()
  const { id } = useParams();
  //getting data form our store
  const { info } = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  //for navigating the page
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(asyncloaddMovies(id));
    return () => {
      dispatch(removemovie());
    };
  }, []);
  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.8)),url(https://image.tmdb.org/t/p/original/${
          info.detail.backdrop_path || info.detail.poster_path
        } )`,
        backgroundPosition: "top 10%",
        backgroundSize: "cover",
      }}
      className="w-screen h-screen    px-[10%]"
    >
      {/* nav bar part -1 */}
      <nav className="h-[10vh] w-full flex gap-8 items-center text-2xl text-zinc-200 ">
        <Link>
          <i
            onClick={() => navigate(-1)}
            className="hover:text-yellow-700 cursor-pointer   ri-arrow-left-line"
          ></i>{" "}
        </Link>
        <a target="_blank" href={info.detail.homepage}>
          <i className="hover:text-yellow-300 transition-all ease-in-out delay-50  ri-earth-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
        >
          <i className=" hover:text-blue-600  ri-link-m"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}
        >
          <i className="hover:text-yellow-700 ri-star-half-line"></i>
        </a>{" "}
      </nav>

      {/* poster part for movie */}
      <div className="w-full flex ">
        <img
          className="h-[55vh] w-[40vh]    rounded-lg  hover:scale-105 delay-100 transition-all ease-in-out  "
          src={
            info.detail.poster_path || info.detail.backdrop_path
              ? `https://image.tmdb.org/t/p/original/${
                  info.detail.poster_path || info.detail.backdrop_path
                }`
              : IMG_URL
          }
          alt=""
        />
        <div className="ml-10">
          <h1 className="text-3xl font-bold text-white">
            {info.detail.title || info.detail.name ||info.detail.original_name ||info.detail.original_title}
           ( <small className="text-xl font-semibold text-zinc-400">{info.detail.release_date.split("-")[0]}</small>)
          </h1>
<div className="flex gap-5 items-center p-3">
  <span
              className=" text-white text-lg w-[5.7vh] h-[5vh] flex justify-center items-center rounded-full font-semibold bg-green-400">
               { (info.detail.vote_average * 10).toFixed()}
              <sup>%</sup>
  </span>

<h1 className="text-white ">{info.detail.release_date}</h1>
<h1 className="text-white font-semibold"><i className=" mr-2 text-xl text-pink-200 ri-file-video-line"></i>{info.detail.genres.map((g)=>g.name).join(",")}</h1>
<h1>
{info.detail.runtime}
</h1>

</div>






        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default MovieDetails;
