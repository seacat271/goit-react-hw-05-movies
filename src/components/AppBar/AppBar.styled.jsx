import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
padding: 10px;
background-color: #000;
width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;
`

export const Nav = styled.nav`
background-color: #fff;`

export const NavItem = styled(NavLink)`
display: inline-block;
text-align: center;
padding: 10px;
&:not(:last-child) {
    margin-right: 30px;
};

&.active{
color: white;
background-color: black;
};

&:hover:not(.active),
&:focus-visible:not(.active){
    color: white;
    background-color: black;
};
    
    `