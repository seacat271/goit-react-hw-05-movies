import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { getData } from "helpers/getData";
import { TrendingMoviesLink } from "./Home.styled";

export const Home = () => {

const [trendingMovie, setTrendingMovie] = useState([]);
const location = useLocation()
const requestPeriod = "day";
const key = "trending";



useEffect(()=>{

    getData(key, requestPeriod).then(data => {
    setTrendingMovie(data.results)});

}, [])

    return(
    <>
    <h1>Trending movie</h1>
        {trendingMovie.map(({title, id}) => {
return (<TrendingMoviesLink key = {id} to={`movies/${id}`} state ={{from: location}}>{title}</TrendingMoviesLink>)
        })}

    </>)
} 