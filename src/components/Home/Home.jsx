import { useState, useEffect } from "react";

import axios from "axios";
import { TrendingMoviesLink } from "./Home.styled";

export const Home = () => {

const [trendingMovie, setTrendingMovie] = useState([]);

const getTrendingMovie = async () => {
    const response = await axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=4e997d9f74601693c84e243277b61d66')
    return response.data
}

useEffect(()=>{

getTrendingMovie().then(data => {
    setTrendingMovie(data.results)});

}, [])

    return(
    <>
    <h1>Trending movie</h1>
        {trendingMovie.map(({title, id}) => {
return (<TrendingMoviesLink key = {id} to={`movies/${id}`} >{title}</TrendingMoviesLink>)
        })}

    </>)
} 