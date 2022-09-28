import { MovieLink, MovieLinkBox } from "./MovieList.styled";
import { useLocation } from "react-router-dom";
import Placeholder from "../../placeholders/placeholder_for_movie.jpg"


export const MovieList = ({data}) => {
const location = useLocation()
const pathVar = location.pathname === "/" ? "/movies/" : "";
    return (
        data && <MovieLinkBox>
        {data.results.map(({id, poster_path, title}) => 
        <MovieLink 
        key = {id} 
        to={`${pathVar}${id}`} 
        state ={{from: location}}
        >
            <img src = {"https://image.tmdb.org/t/p/w500/" + (poster_path ? poster_path : Placeholder)} alt="movie poster" width="270" height="405"/>
            {title}</MovieLink>
        )}
    </MovieLinkBox>)
}