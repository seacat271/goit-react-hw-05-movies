import { useState, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { MovieLink } from "./Movies.styled";
import { useGetData } from "helpers/useGetData";


export const Movies = () => {
const [query, setQuery] = useState("");
const location = useLocation();
const [searchParams, setSearchParams] = useSearchParams();
const key = "search"
const [data] = useGetData(key, query);



const onHandleSubmit = event => {
    event.preventDefault();
    setQuery((event.target.query.value).trim().toLowerCase())
    event.target.reset()
}

useEffect(()=>{
    if(query === "") return
   
    setSearchParams(query !== "" ? {query: query} : {})
     // eslint-disable-next-line 
}, [query])

useEffect(()=>{

    searchParams.get("query") && setQuery(searchParams.get("query"))

},[searchParams])


return(
    <>
    <form onSubmit={onHandleSubmit}>
        <input name="query" autoComplete="off"/>
        <button type="submit">Search</button>
    </form>
    {data && <ul>
        {data.results.map(movie => <MovieLink 
        key = {movie.id} 
        to={`${movie.id}`} 
        state ={{from: location}}
        >{movie.title}</MovieLink>
        )}
    </ul>}
    </>
)
} 