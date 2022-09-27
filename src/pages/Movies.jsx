import { useState, useEffect } from "react";
import {useSearchParams } from "react-router-dom";
import { useGetData } from "helpers/useGetData";
import { SearchForm } from "components/SearchForm/SearchForm";
import { MovieList } from "components/MovieList/MovieList";
import { Section } from "./common.styled";
export const Movies = () => {
const [query, setQuery] = useState("");
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
    <Section>
        <SearchForm onHandleSubmit ={onHandleSubmit}/>
        <MovieList data={data}/>
    </Section>
)
} 