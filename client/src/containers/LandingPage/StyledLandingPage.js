import styled from "styled-components";

export const StyledLandingPage = styled.div`
  background-image: url("https://media.traveler.es/photos/61376fd4d4923f67e298efba/master/w_1600%2Cc_limit/132486.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  position: relative;

  .container{
        position: absolute;
        top: 15%;
        left: 0px;
        right: 0px;
        margin-right: auto;
        margin-left: auto;
        font-size: 30px;
        padding: 0 30px;
        transform: translateY(-50%);
        text-shadow: 0px 0px 10px #fff, 0px 0px 50px #fff;
        color: #fff;
    }
    a{
    text-decoration: none;
    }

    h1 a {
        color: white;
        font-size: 34px;
        border: 3px solid white;
        margin-top: 30px;
        padding: 15px 35px;
        background-color: transparent;
        transition: background-color 200ms ease;
        box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.5);

        &:hover{
            background-color: white;
            color: black;
        text-shadow: none;
        cursor: pointer;
        transition: background-color 1s ease;
        }
`;
