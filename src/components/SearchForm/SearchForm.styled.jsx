import styled from "styled-components";
import { Link } from "react-router-dom";

export const MovieLink = styled(Link)`
display: block;
text-decoration: none;
&:not(:last-child) {
    margin-bottom: 15px;
}
`