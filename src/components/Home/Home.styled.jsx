import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const TrendingMoviesLink = styled(NavLink)`
display: block ;
&:not(:last-child) {
    margin-bottom: 15px;
    padding-left: 50px;
    text-decoration: none;
}

`
