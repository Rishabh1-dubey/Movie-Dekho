import React, { useEffect } from "react";
import { asyncloaddMovies } from "../../store/actions/movieAction";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { removemovie } from "../../store/reducers/movieSlic";
import Loader from "../templates/Loader";
import HorizontallyCard from "../templates/HorizontallyCard";

const MovieDetails = () => {
  const { pathname } = useLocation();
  const { id } = useParams();
  const { info } = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(asyncloaddMovies(id));
    return () => {
      dispatch(removemovie());
    };
  }, [id]);

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.8)),url(https://image.tmdb.org/t/p/original/${
          info.detail.backdrop_path || info.detail.poster_path
        })`,
        backgroundPosition: "top 10%",
        backgroundSize: "cover",
      }}
      className="relative w-screen min-h-[140vh] px-[5%] md:px-[10%] py-8"
    >
      {/* Navbar */}
      <nav className="h-[10vh] w-full flex gap-4 md:gap-8 items-center text-xl md:text-2xl text-zinc-200">
        <Link>
          <i
            onClick={() => navigate(-1)}
            className="hover:text-yellow-700 cursor-pointer ri-arrow-left-line"
          ></i>
        </Link>
        <a target="_blank" href={info.detail.homepage}>
          <i className="hover:text-yellow-300 transition-all ease-in-out delay-50 ri-earth-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
        >
          <i className="hover:text-blue-600 ri-link-m"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}
        >
          <i className="hover:text-yellow-700 ri-star-half-line"></i>
        </a>
      </nav>

      {/* Poster and Details Section */}
      <div className="w-full flex flex-col md:flex-row gap-6 md:gap-12 mb-12">
        {/* Poster */}
        <img
          className="h-[40vh] md:h-[55vh] w-[30vh] md:w-[40vh] rounded-lg hover:scale-105 delay-100 transition-all ease-in-out"
          src={
            info.detail.poster_path || info.detail.backdrop_path
              ? `https://image.tmdb.org/t/p/original/${
                  info.detail.poster_path || info.detail.backdrop_path
                }`
              : IMG_URL
          }
          alt={info.detail.title || info.detail.name || "Movie Poster"}
        />

        {/* Movie Details */}
        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            {info.detail.title ||
              info.detail.name ||
              info.detail.original_name ||
              info.detail.original_title}
            <small className="text-xl font-semibold text-zinc-400 ml-2">
              ({info.detail.release_date.split("-")[0]})
            </small>
          </h1>

          {/* Ratings, Release Date, Genres, Runtime */}
          <div className="flex flex-wrap gap-3 items-center p-3">
            <span className="text-white text-lg w-[5.7vh] h-[5vh] flex justify-center items-center rounded-full font-semibold bg-green-400">
              {(info.detail.vote_average * 10).toFixed()}
              <sup>%</sup>
            </span>
            <h1 className="text-white">{info.detail.release_date}</h1>
            <h1 className="text-white font-semibold">
              <i className="mr-2 text-xl text-pink-200 ri-file-video-line"></i>
              {info.detail.genres.map((g) => g.name).join(", ")}
            </h1>
            <h1 className="text-white text-lg md:text-xl">
              {info.detail.runtime} min
            </h1>
          </div>

          {/* Tagline */}
          <h1 className="italic text-lg md:text-2xl font-bold pt-4 text-white">
            {info.detail.tagline}
          </h1>

          {/* Overview */}
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-yellow-600 mt-2">
              Overview
            </h1>
            <p className="mb-6 text-white italic font-semibold">
              {info.detail.overview}
            </p>
          </div>

          {/* Trailer Link */}
          <Link
            className="text-white p-3 rounded-lg hover:text-blue-400 transition-all delay-75 text-lg scale-90 ease-in-out font-semibold"
            to={`${pathname}/trailer`}
          >
            <i className="ri-play-circle-fill text-4xl md:text-6xl"></i>
          </Link>
        </div>
      </div>

      {/* Recommendations and Similar Movies */}
      <div className="mt-8">
        <h1 className="text-white font-semibold text-2xl md:text-4xl">
          Recommendations and Similar Movies
        </h1>
        <hr className="my-4 border-zinc-600" />

        <HorizontallyCard
          data={
            info.recommendations.length > 0 ? info.recommendations : info.similar
          }
        />
      </div>

      <Outlet />
    </div>
  ) : (
    <Loader />
  );
};

export default MovieDetails;