import { MovieLink, MovieLinkBox, Image, Thumb, ShadowBox} from "./MovieList.styled";
import { useLocation } from "react-router-dom";
import Placeholder from "../../placeholders/placeholder_for_movie.jpg"


export const MovieList = ({data}) => {
const location = useLocation()
const pathVar = location.pathname === "/" ? "/movies/" : "";

    if(!data) return
    return <><MovieLinkBox>
        {data.results.map(({id, poster_path, title, release_date}) => {
        const year = release_date ? release_date.slice(0, 4): null;
        return <ShadowBox key = {id}><MovieLink 
        to={`${pathVar}${id}`} 
        state ={{from: location}}
        >
            <Image src = {"https://image.tmdb.org/t/p/w500/" + (poster_path ? poster_path : Placeholder)} alt="movie poster" width="270" height="405"/>
            <Thumb><span>{title}</span><span>{year}</span></Thumb></MovieLink></ShadowBox>}
        )}
    </MovieLinkBox>
    </>
}