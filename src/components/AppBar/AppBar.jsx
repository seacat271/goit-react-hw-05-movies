// import { Link } from "react-router-dom";
import { Header, NavItem, Nav } from "./AppBar.styled";

export const AppBar = () => {
return (
    <>
    <Header>
        <Nav>
            <NavItem to="/">Home</NavItem>
            <NavItem to="movies">Movies</NavItem>
        </Nav>
    </Header>
        </>
)
}