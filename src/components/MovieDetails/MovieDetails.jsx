import { useGetData } from "helpers/useGetData";
import { Link, useParams, useLocation, Outlet } from "react-router-dom";
import { DetailsBox, TextTitle, PrimaryBox } from "./MovieDetails.styled";


export const MovieDetails = () => {

const {movieId} = useParams();
const location = useLocation();
const key = null;
const [data] = useGetData(key, movieId)


if(!data) return;
const {poster_path, title, vote_average, overview, genres} = data;

    return  (<PrimaryBox>
        <Link to={location.state?.from ? location.state.from : "/movies"}>Go back</Link>
        <DetailsBox>
            <img src={"https://image.tmdb.org/t/p/w500/" + poster_path} alt="movie poster" width ="200" height="300" />
            <div>
                <h1>{title}</h1>
                <p>User score: {Math.round(vote_average *10) + "%"}</p>
                <TextTitle>Overview</TextTitle>
                <p>{overview}</p>
                <TextTitle>Genres</TextTitle>
                <p>{genres.map(item => item.name).join(",")}</p>
            </div>
        </DetailsBox>
        <div>       
        <h2>Additional information</h2>
        <Link to="cast" state ={{from: location.state?.from}}>Cast</Link>
        <Link to="reviews" state ={{from: location.state?.from}}>Reviews</Link></div>
        <Outlet context={movieId}/>
 
        </PrimaryBox>)
    
    
}