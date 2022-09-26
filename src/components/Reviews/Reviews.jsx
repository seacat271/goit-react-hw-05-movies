import { useGetData } from "helpers/useGetData";
import { useOutletContext } from "react-router-dom";



export const Reviews = () => {

    const movieId = useOutletContext()
    const key = "reviews";
    const [data] = useGetData(key, movieId)

    if (!data) return null;
    const {results} = data;
    if (results.length === 0) return <h1>We don't have any reviews for this movie.</h1>
    
    return (
        <ul>
            {results.map(({author, content, id}) => 
                <li key = {id}>
                    <h2>{author}</h2>
                    <p>{content}</p>
                </li>
            )}
        </ul>

    )
}