import styled from "styled-components";
import { Link } from "react-router-dom";

export const MovieLink = styled(Link)`
display: block;
width: 270px;
text-decoration: none;
color: black;
font-weight: 500;
&:not(:last-child) {
margin-bottom: 15px;
}
`

export const MovieLinkBox = styled.ul`
padding: 20px 0;
display: flex;
gap: 40px;
flex-wrap: wrap;
flex-basis: calc((100% - (3 * 40 )) / 4);
`