
import { useLocation } from "react-router-dom";
import { useGetData } from "helpers/useGetData";

import { TrendingMoviesLink } from "./Home.styled";

export const Home = () => {

const location = useLocation()
const requestPeriod = "day";
const key = "trending";
const [data] = useGetData(key, requestPeriod)

if(!data) return
const {results} = data;

    return(
    <>
    <h1>Trending movie</h1>
        {results.map(({title, id}) => {
return (<TrendingMoviesLink key = {id} to={`movies/${id}`} state ={{from: location}}>{title}</TrendingMoviesLink>)
        })}

    </>)
} 