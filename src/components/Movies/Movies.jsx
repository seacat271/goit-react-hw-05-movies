import { useState, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { MovieLink } from "./Movies.styled";
import axios from "axios";


export const Movies = () => {
const [query, setQuery] = useState("");
const [queryList, setQueryList] = useState(null);
const location = useLocation();
const [searchParams, setSearchParams] = useSearchParams();

const onHandleSubmit = event => {
    event.preventDefault();
    setQuery((event.target.query.value).trim().toLowerCase())
    event.target.reset()
   
}

const FetchByName = async params => {
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=4e997d9f74601693c84e243277b61d66&query=${params}&language=en-US&`);
    return response.data
}




useEffect(()=>{
    if(query === "") return
  
    FetchByName(query).then(setQueryList)

    setSearchParams(query !== "" ? {query: query} : {})
     // eslint-disable-next-line 
}, [query])

useEffect(()=>{

    searchParams.get("query") && setQuery(searchParams.get("query"))

},[searchParams])




if(queryList) {
    console.log(queryList.results)
}

return(
    <>
    <form onSubmit={onHandleSubmit}>
        <input name="query" autoComplete="off"/>
        <button type="submit">Search</button>
    </form>
    {queryList && <ul>
        {queryList.results.map(movie => <MovieLink 
        key = {movie.id} 
        to={`${movie.id}`} 
        state ={{from: location}}
        >{movie.title}</MovieLink>
        )}
    </ul>}
    </>
)
} 