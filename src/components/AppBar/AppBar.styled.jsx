import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
padding: 10px;
background-color: black;
color: black;
width: 1200px;
margin-left: auto;
margin-right: auto;
padding-left: 15px;
padding-right: 15px;
box-shadow: 0px 0px 3px 3px black;
`
export const Nav = styled.nav`
background-color: white;
`
export const NavItem = styled(NavLink)`
display: inline-block;
text-align: center;
padding: 10px;
font-weight: 500;
font-size: 20px;
color: black;
margin-left: 30px;
text-shadow: 3px 3px 3px lightgrey;
transition: 250ms background-color linear, 250ms color linear, 250ms text-shadow linear;
&.active{
color: white;
background-color: black;
text-shadow: none;
};
&:hover:not(.active),
&:focus-visible:not(.active){
    color: white;
    background-color: black;
    text-shadow: none;
}; 
`