// import axios from "axios";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { Home } from "components/Home/Home"
import { Movies } from "./Movies/Movies";
import { MovieDetails } from "./MovieDetails/MovieDetails";
import { Cast } from "./Cast/Cast";
import { Reviews } from "./Reviews/Reviews";

export const App =  () => {
 
  return (
    <div>
<Routes>
  <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path="movies" element={<Movies/>}/>
    <Route path="movies/:movieId" element={<MovieDetails/>}>
      <Route path="cast" element={<Cast/>}/>
      <Route path="reviews" element={<Reviews/>}/>
    </Route>
  </Route>
</Routes>
</div>
  );
};

// "https://api.themoviedb.org/3/trending/all/day?api_key=4e997d9f74601693c84e243277b61d66"