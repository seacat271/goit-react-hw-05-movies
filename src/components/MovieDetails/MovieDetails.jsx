import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useLocation, Outlet } from "react-router-dom";
import { DetailsBox, TextTitle, PrimaryBox } from "./MovieDetails.styled";


export const MovieDetails = () => {
const [movie, setMovie] = useState(null)
const {movieId} = useParams();
const location = useLocation();
const FetchById = async params => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${params}?api_key=4e997d9f74601693c84e243277b61d66`)
    return response.data
}
useEffect(()=>{
    FetchById(movieId).then(setMovie)
  
}, [movieId])

if(!movie) return null;
const {poster_path, title, vote_average, overview, genres} = movie;
    return  (<PrimaryBox>
        <Link to={ location.state.from}>Go back</Link>
        <DetailsBox>
            <img src={poster_path} alt="movie poster" width ="200" height="300" />
            <div>
                <h1>{title}</h1>
                <p>User score: {Math.round(vote_average *10) + "%"}</p>
                <TextTitle>Overview</TextTitle>
                <p>{overview}</p>
                <TextTitle>Genres</TextTitle>
                <p>{genres.map(item => item.name).join(",")}</p>
            </div>
        </DetailsBox>
        <div>       
        <h2>Additional information</h2>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link></div>
        <Outlet/>
 
        </PrimaryBox>)
    
    
}