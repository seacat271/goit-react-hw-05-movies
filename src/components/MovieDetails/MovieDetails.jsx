import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet, Link, useParams } from "react-router-dom";

export const MovieDetails = () => {
const [movie, setMovie] = useState(null)
const {movieId} = useParams();
const FetchById = async params => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${params}?api_key=4e997d9f74601693c84e243277b61d66`)
    console.log(response.data)
    return response.data
}
useEffect(()=>{
    FetchById(movieId).then(setMovie)
  
}, [])
// const {poster_path, original_title, popularity, overview, genres} = movie;

    return  (movie && (<>
        <button>Go back</button>
        <div>
            <img src={movie.poster_path} alt="movie poster" width ="200" height="300" />
            <div>
                <h1>{movie.title}</h1>
                <p>User score: {Math.round(movie.vote_average *10) + "%"}</p>
                <p>Overview</p>
                <p>{movie.overview}</p>
                <p>Genres</p>
                <p>{movie.genres.map(item => item.name).join(",")}</p>
            </div>
        </div>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
        </>))
    
    
}