import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
width: 100px;
height: 40px;
padding: 0;
border: 3px solid black;
display: flex;
text-decoration: none;
padding-top: auto;
padding-bottom: auto;
align-items: center;
justify-content: center;
font-weight: 500;
font-size: 20px;
color: black;
background-color: white;
transition: 250ms color linear, 250ms background-color linear, 250ms box-shadow linear, 50ms text-shadow linear;
box-shadow: 3px 3px 3px black;
text-shadow: 3px 3px 3px lightgrey;
&:hover,
&:focus {
    color: white;
    background-color: black;
    box-shadow: none;
    text-shadow: none;
}
`
