import { useState, useEffect } from "react";

import axios from "axios";






export const Movies = () => {
const [query, setQuery] = useState("");
const [queryList, setQueryList] = useState(null)

const onHandleSubmit = event => {
    event.preventDefault();
    setQuery(event.target.query.value)
}

const FetchByName = async params => {
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=4e997d9f74601693c84e243277b61d66&query=${params}&language=en-US&`)
    console.log(response.data)
    return response.data
}




useEffect(()=>{
    if(query === "") return
    FetchByName(query).then(setQueryList)
}, [query])


return(
    <>
    <form onSubmit={onHandleSubmit}>
        <input name="query" autoComplete="off" />
        <button type="submit">Search</button>
    </form>
    {queryList && <ul>
        <li><p>"query is come"</p></li>
    </ul>}
    </>
)
} 