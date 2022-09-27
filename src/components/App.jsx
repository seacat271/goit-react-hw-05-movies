import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "../pages/Layout";
import { Home } from "pages/Home"
import { Movies } from "./SearchForm/SearchForm";
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
    <Route path="*" element={<Navigate to="/"/>}></Route>
  </Route>
</Routes>
</div>
  );
};
