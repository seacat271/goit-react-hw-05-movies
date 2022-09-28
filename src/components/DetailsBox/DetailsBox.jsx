import Placeholder from "../../placeholders/placeholder_for_movie.jpg"
import { TextTitle } from "components/MovieDetails/MovieDetails.styled"
export const DetailsBox = ({data}) => {
    const {poster_path, title, vote_average, overview, genres} = data;

    return (
    <div>
        <img src={"https://image.tmdb.org/t/p/w500/" + (poster_path ? poster_path : Placeholder)} alt="movie poster" width ="200" height="300" />
        <div>
            <h1>{title}</h1>
            <p>User score: {Math.round(vote_average *10) + "%"}</p>
            <TextTitle>Overview</TextTitle>
            <p>{overview}</p>
            <TextTitle>Genres</TextTitle>
            <p>{genres.map(item => item.name).join(",")}</p>
        </div>
    </div>)
}

