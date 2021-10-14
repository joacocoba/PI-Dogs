import styled from "styled-components";

export const StyledHome = styled.nav`
  .container {
    display: flex;
    margin-top: 0px;
    ${'' /* background-image: url('/foto-perros.jpeg'); */}
    ${'' /* background-size: cover; */}
  }

  .filter {
    margin-top: 100px;
    width: 20%;
    position: fixed;
  }
  .cards-container {
    margin-top: 100px;
    width: 80%;
    padding-top: 20px;
    margin-left: 20%;
  }
  .cards-group {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    /* padding: 40px; */
    /* margin-top: 80px; */
  }
`;
