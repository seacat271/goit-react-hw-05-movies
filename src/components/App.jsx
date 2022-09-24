// import axios from "axios";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { Home } from "components/Home/Home"
import { Movies } from "./Movies/Movies";
import { MovieDetails } from "./MovieDetails/MovieDetails";

export const App =  () => {
 
  return (
    <div>
<Routes>
  <Route path="/" element={<Layout/>}>
    <Route path="/" element={<Home/>}/>
    <Route path="movies" element={<Movies/>}>
      <Route path=":movieId" element={<MovieDetails/>}>
        <Route path="cast" element={<div>Cast</div>}/>
        <Route path="reviews" element={<div>Reviews</div>}/>
      </Route>
    </Route>
  </Route>
</Routes>
</div>
  );
};

// "https://api.themoviedb.org/3/trending/all/day?api_key=4e997d9f74601693c84e243277b61d66"