import styled from "styled-components";

export const StyledFilter = styled.div`
    background: #de6262;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #de6262, #ffb88c);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #C05F39, #E78E64); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    border-radius: 20px;
    margin: 20px;
    padding: 20px;
    border: 2px solid var(--color);
  div {
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 90%;
    select {
      padding: 5px 10px;
      margin: 5px;
      outline: none;
      font-size: 15px;
      border-radius: 10px;
      border: 1px solid var(--color);
    }
    button {
      color: #fff;
      background-color: #F8AF7B;
      border: none;
      padding: 10px 15px;
      border-radius: 5px;
      transition: background-color 200ms ease;
      margin-top: 20px;
      font-size: 15px;
      font-weight: bold;
      &:hover {
        font-weight: bold;
        cursor: pointer;
        color: #fff;
        background-color: #702B1C;
      }
      &:active {
        transform: scale(0.95);
      }
    }
  }
  .filter-by {
      margin-top: 20px;
  }
  h1 {
    margin-bottom: 15px;
    color: #fff;
  }
`;
