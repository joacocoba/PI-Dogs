import styled from 'styled-components';

export const StyledPaginate = styled.div`
padding-bottom: 50px;
ul {
    display: flex;
    list-style: none;
    justify-content: center;
    a {
        background-color: #F8AF7B;
        margin: 2px;
        text-decoration: none;
        color: black;
        padding: 10px 15px;
        border-radius: 5px;
    }
    a:hover{
        background-color: #702B1C;
        color: #fff;
        cursor: pointer;
    }
}
`
