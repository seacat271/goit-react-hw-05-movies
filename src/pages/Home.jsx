
import { useLocation } from "react-router-dom";
import { useGetData } from "helpers/useGetData";


import { Title } from "components/Title/Title";
import { TrendingList } from "components/TrendingList/TrendingList";
export const Home = () => {

const location = useLocation()
const requestPeriod = "day";
const key = "trending";
const [data] = useGetData(key, requestPeriod)

if(!data) return
const {results} = data;
console.log(results)
    return(
    <>
        <Title text ={"Trending movie"}/>
        <TrendingList location ={location} data={results}/>
    </>)
} 