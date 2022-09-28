import styled from "styled-components";
import { Link } from "react-router-dom";

export const MovieLink = styled(Link)`
display: flex;
flex-direction: column;
width: 270px;
text-decoration: none;
color: black;
font-weight: 500;
background-color: lightgrey;
height: 100%;
&:not(:last-child) {
margin-bottom: 15px;
}
`

export const ShadowBox = styled.li`
box-shadow: 3px 3px 3px black;
`

export const MovieLinkBox = styled.ul`
padding: 20px 0;
display: flex;
gap: 40px;
flex-wrap: wrap;
flex-basis: calc((100% - (3 * 40 )) / 4);
`

export const Image = styled.img`
display: block;
`

export const Thumb = styled.div`
padding: 10px;
display: flex;
justify-content: space-between;
align-items: center;
flex-grow: 1;
`