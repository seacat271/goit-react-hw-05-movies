import { useGetData } from "helpers/useGetData";
import { MovieList } from "components/MovieList/MovieList";
import { Title } from "components/Title/Title";
import { Section } from "./common.styled";

const Home = () => {
const requestPeriod = "day";
const key = "trending";
const [data] = useGetData(key, requestPeriod)

    return(
    <Section>
        <Title text ={"Trending movie"}/>
        <MovieList  data={data}/>
    </Section>)
};
export default Home;