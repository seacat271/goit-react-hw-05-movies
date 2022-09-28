import { Navigate, Route, Routes } from "react-router-dom";
import { lazy} from "react";
import Layout from "../pages/Layout";

const Movies = lazy(() => import("../pages/Movies"));
const Home = lazy(() => import("pages/Home") );
const MovieDetails = lazy(() => import("../pages/MovieDetails"));
const Cast = lazy (() => import("./Cast/Cast"));
const Reviews = lazy (() => import("./Reviews/Reviews"));

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
