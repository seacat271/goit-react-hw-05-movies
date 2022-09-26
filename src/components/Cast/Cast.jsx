import { useGetData } from "helpers/useGetData";
import { useOutletContext } from "react-router-dom";
import Male from "../../placeholders/placeholder-male-612x612.jpg";
import Female from "../../placeholders/placeholder-female-612x612.jpg"
import { Image } from "./Cast.styled";


export const Cast = () => {
    const movieId = useOutletContext()
    const key = "credits"
    const [data] = useGetData(key, movieId)
 

  
    if (!data) return null;
 
    const {cast} = data
    if (cast.length === 0) return <h1>We don't have any information about actors.</h1>
    return (
        <ul>
            {cast.map(({profile_path, name, character, id, gender}) => 
                <li key = {id}>
                    <Image 
                    src={profile_path ? "https://image.tmdb.org/t/p/w185/" + profile_path : (gender === 2 ? Male : Female)} 
                    alt={"photo" + ({name} ?? "Noname")} 
                    width="100" 
                    height="150"/>
                    <p>{name}</p>
                    <p>{character}</p>
                </li>
            )}
        </ul>

    )
}