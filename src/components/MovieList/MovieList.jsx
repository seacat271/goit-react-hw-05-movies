import { MovieLink } from "./MovieList.styled";
import { useLocation } from "react-router-dom";


export const MovieList = ({data}) => {
const location = useLocation()
const pathVar = location.pathname === "/" ? "/movies/" : "";
    return (
        data && <ul>
        {data.results.map(movie => <MovieLink 
        key = {movie.id} 
        to={`${pathVar}${movie.id}`} 
        state ={{from: location}}
        >{movie.title}</MovieLink>
        )}
    </ul>)
}