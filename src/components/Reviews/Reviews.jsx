import { useGetData } from "helpers/useGetData";
import { useOutletContext } from "react-router-dom";
import { ReviewsBox } from "./Reviews.styled";

const Reviews = () => {
    const movieId = useOutletContext()
    const key = "reviews";
    const [data] = useGetData(key, movieId)

    if (!data) return null;
    const {results} = data;
    if (results.length === 0) return <h1>We don't have any reviews for this movie.</h1>
    
    return (
        <ReviewsBox>
            {results.map(({author, content, id}) => 
                <li key = {id} style={{marginBottom: "20px",}}>
                    <h2 style={{marginBottom: "20px",}}>{author}</h2>
                    <p>{content}</p>
                </li>
            )}
        </ReviewsBox>
    )
}

export default Reviews;