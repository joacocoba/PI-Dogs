import styled from "styled-components";

export const StyledSearchBar = styled.div`
position: relative;
margin: auto;
max-width: 500px;
width: 100%;

    input {
        font-size: 20px;
        padding: 10px 55px 10px 20px;
        border-radius: 20px;
        outline: 0;
        border: 2px solid var(--color);
    }
    button {
        color: #fff;
        border: 2px solid #fff;
        background: #026389;
        font-weight: bold;
        font-size: 20px;
        padding: 10px;
        border-radius: 20px;
        cursor: pointer;
        margin: 0px 5px; 
    }
`