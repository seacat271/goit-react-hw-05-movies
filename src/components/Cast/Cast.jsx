import { useGetData } from "helpers/useGetData";
import { useOutletContext } from "react-router-dom";
import Male from "../../placeholders/placeholder-male-612x612.jpg";
import Female from "../../placeholders/placeholder-female-612x612.jpg"
import { Image, CastBox, CastCard, ButtonLoadMore } from "./Cast.styled";
import { useRef } from "react";


const Cast = () => {
    const movieId = useOutletContext()
    const key = "credits"
    const [data, setData] = useGetData(key, movieId)
   
    let endStep = useRef(10);
 
    
    
    if (!data) return null;
    const {cast} = data;
    if (cast.length === 0) return <h1>We don't have any information about actors.</h1>
 
  

    const onHandleLoad = () => {
    
        endStep.current += 10;
        setData(prev => ({...prev, endStep}))
 
    }

   const visibleCast = cast.slice(0, endStep.current)
    
    if(!visibleCast) return;
    return (
        <CastBox>
            {visibleCast.map(({profile_path, name, character, id, gender}) => 
                <CastCard key = {id}>
                    <Image 
                    src={profile_path ? "https://image.tmdb.org/t/p/w185/" + profile_path : (gender === 2 ? Male : Female)} 
                    alt={"photo" + ({name} ?? "Noname")} 
                    width="100" 
                    height="150"/>
                    <p>{name}</p>
                    <p>{character}</p>
                </CastCard>
            )}
            {cast.length >= endStep.current ? <ButtonLoadMore type="button" onClick={onHandleLoad}>Load More</ButtonLoadMore> : null}
        </CastBox>

    )
}
export default Cast;