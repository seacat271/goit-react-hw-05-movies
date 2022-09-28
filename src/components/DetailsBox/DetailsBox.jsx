import { Button } from "components/GoBackButton/GoBackButton.styled";
import Placeholder from "../../placeholders/placeholder_for_movie.jpg"
import { TextTitle, SecondaryBox, Thumb, ThumbBox, AdditionalBox } from "./DetailsBox.styled"
import { Title } from "components/Title/Title";
export const DetailsBox = ({data, state}) => {
    const {poster_path, title, vote_average, overview, genres} = data;

    return (
    <SecondaryBox>
        <img src={"https://image.tmdb.org/t/p/w500/" + (poster_path ? poster_path : Placeholder)} alt="movie poster" width ="400" height="600" />
        <Thumb>
        <ThumbBox>
            <Title text= {title}></Title>
            <p style={{marginBottom: "20px",}}>User score: {Math.round(vote_average *10) + "%"}</p>
            <TextTitle>Overview</TextTitle>
            <p style={{marginBottom: "20px",}}>{overview}</p>
            <TextTitle>Genres</TextTitle>
            <p> {genres.map(item => item.name).join(",")}</p>
        </ThumbBox>
        <AdditionalBox>       
        <h2 style={{marginBottom: "20px",}}>Additional information</h2>
        <Button to="cast" state ={state} style={{marginBottom: "20px",}}>Cast</Button>
        <Button to="reviews" state ={state}>Reviews</Button>
        </AdditionalBox>
        </Thumb>
    </SecondaryBox>)
}

