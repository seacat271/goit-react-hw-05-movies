import { useGetData } from "helpers/useGetData";
import { MovieList } from "components/MovieList/MovieList";
import { Title } from "components/Title/Title";

export const Home = () => {
const requestPeriod = "day";
const key = "trending";
const [data] = useGetData(key, requestPeriod)

    return(
    <>
        <Title text ={"Trending movie"}/>
        <MovieList  data={data}/>
    </>)
} 