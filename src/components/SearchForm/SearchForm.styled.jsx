import styled from "styled-components";

export const SearchButton = styled.button`
width: 100px;
height: 40px;
padding: 0;
border: 3px solid black;
display: block;
font-weight: 500;
font-size: 20px;
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
export const Input = styled.input`
box-shadow: 3px 3px 3px black;
margin-right: 20px;
width: 400px;
height: 40px;
padding: 10px;
border: 3px solid black;
outline: none;
font-weight: 500;
font-size: 20px;
box-sizing: border-box;
display: block;
transition: 250ms box-shadow linear;
&:focus{
    box-shadow: none;
}
`
export const Form = styled.form`
justify-content: center;
display: flex;

`