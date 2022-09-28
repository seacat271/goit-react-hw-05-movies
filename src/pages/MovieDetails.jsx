import { useGetData } from "helpers/useGetData";
import { useParams, useLocation, Outlet } from "react-router-dom";
import {PrimaryBox } from "../components/MovieDetails/MovieDetails.styled";

import { GoBackButton } from "components/GoBackButton/GoBackButton";
import { AdditionalBox } from "components/AdditionalBox/AdditionalBox";
import { DetailsBox } from "components/DetailsBox/DetailsBox";

const MovieDetails = () => {

const {movieId} = useParams();
const location = useLocation();
const key = null;
const [data] = useGetData(key, movieId)

const pathButton = location.state?.from ? location.state.from : "/movies";
console.log(data)

if(!data) return;

    return  (
        <PrimaryBox>
            <GoBackButton pathButton={pathButton}/>
            <DetailsBox data={data}/>
            <AdditionalBox state={{from: location.state?.from}}/>
            <Outlet context={movieId}/>
        </PrimaryBox>)

}

export default MovieDetails;