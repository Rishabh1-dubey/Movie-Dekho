import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Loader from "./components/templates/Loader";
import Trending from "./components/templates/sidebar/Trending";
import Popular from "./components/templates/sidebar/Popular";
import Movies from "./components/templates/sidebar/Movies";
import TV from "./components/templates/sidebar/TV";
import People from "./components/templates/sidebar/People";
import MovieDetails from "./components/pages/MovieDetails";
import TvDetails from "./components/pages/TvDetails";
import PerosnDetails from "./components/pages/PerosnDetails";
import PlayTrailer from "./components/templates/PlayTrailer";
import NotFound from "./components/templates/NotFound";

function App() {
  return (
    <div className="bg-[#1f1e24]  w-screen h-screen flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movie" element={<Movies />} />
        <Route path="/movie/details/:id" element={<MovieDetails />}>
        {/* for movieTrailer */}
          <Route path="/movie/details/:id/trailer" element={<PlayTrailer />} />
        </Route>
        {/* and for tvTrailer */}
        <Route path="/tv" element={<TV />} />
        <Route path="/tv/details/:id" element={<TvDetails />}>
          <Route path="/tv/details/:id/trailer" element={<PlayTrailer />} />
        </Route>

        <Route path="/person" element={<People />} />
        <Route path="/person/details/:id" element={<PerosnDetails />}/>
  
      
        <Route path="*" element={<NotFound />} />
      
      </Routes>
    </div>
  );
}

export default App;
