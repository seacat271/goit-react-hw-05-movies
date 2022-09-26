import { getData } from "helpers/getData";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";



export const Reviews = () => {
    const [reviews, setReviews] = useState(null)
    const movieId = useOutletContext()
    const key = "reviews";



    useEffect(()=>{
        getData(key, movieId).then(setReviews)
      
    }, [movieId])
    if (!reviews) return null;
    const {results} = reviews;
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