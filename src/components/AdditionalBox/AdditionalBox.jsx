import { Link } from "react-router-dom"

export const AdditionalBox = ({state}) => {
    return (     
    <div>       
        <h2>Additional information</h2>
        <Link to="cast" state ={state}>Cast</Link>
        <Link to="reviews" state ={state}>Reviews</Link>
    </div>
    )
}