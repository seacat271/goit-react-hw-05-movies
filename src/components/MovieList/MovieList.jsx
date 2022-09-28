import { MovieLink, MovieLinkBox, Image} from "./MovieList.styled";
import { useLocation } from "react-router-dom";
import Placeholder from "../../placeholders/placeholder_for_movie.jpg"


export const MovieList = ({data}) => {
    // console.log(data.results[0].release_date.slice(0, 4))
const location = useLocation()
const pathVar = location.pathname === "/" ? "/movies/" : "";
    return (
        data && <MovieLinkBox>
        {data.results.map(({id, poster_path, title, release_date}) => 
        <li key = {id}><MovieLink 
        to={`${pathVar}${id}`} 
        state ={{from: location}}
        >
            <Image src = {"https://image.tmdb.org/t/p/w500/" + (poster_path ? poster_path : Placeholder)} alt="movie poster" width="270" height="405"/>
            <span>{title}</span><span>{release_date.slice(0, 4)}</span></MovieLink></li>
        )}
    </MovieLinkBox>)
}