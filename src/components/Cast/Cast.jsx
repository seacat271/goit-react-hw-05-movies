import axios from "axios";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Male from "../../placeholders/placeholder-male-612x612.jpg";
import Female from "../../placeholders/placeholder-female-612x612.jpg"
import { Image } from "./Cast.styled";


export const Cast = () => {
    const [cast, setCast] = useState(null)
    const movieId = useOutletContext()


    const FetchByCast = async params => {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${params}/credits?api_key=4e997d9f74601693c84e243277b61d66`)
        return response.data
    }

    useEffect(()=>{
        FetchByCast(movieId).then(setCast)
      
    }, [movieId])
    if (!cast) return null;
    const {cast: actors} = cast
    
    return (
        <ul>
            {actors.map(({profile_path, name, character, id, gender}) => 
                <li key = {id}>
                    <Image 
                    src={profile_path ? "https://image.tmdb.org/t/p/w185/" + profile_path : (gender === 2 ? Male : Female)} 
                    alt={"photo" + {name}} 
                    width="100" 
                    height="150"/>
                    <p>{name}</p>
                    <p>{character}</p>
                </li>
            )}
        </ul>

    )
}