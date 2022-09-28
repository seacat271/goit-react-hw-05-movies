import styled from "styled-components";
import { SearchButton } from "components/SearchForm/SearchForm.styled";
export const Image = styled.img`
object-fit: cover;
display: block;
`

export const CastBox = styled.ul`
display: flex;
flex-wrap: wrap;
gap: 10px;
padding: 20px;`

export const CastCard = styled.li`
width: 100px;
`

export const ButtonLoadMore = styled(SearchButton)`
width: 60px;
height: 150px;

`