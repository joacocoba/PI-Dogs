import styled from "styled-components";

export const StyledDetail = styled.div`
  margin: 125px auto 30px;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  max-width: 800px;
  min-height: 650px;
  width: 90%;
  border-radius: 20px;
  border: 2px solid var(--color);
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  background: #c05f39; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #c05f39,
    #e78e64
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #c05f39,
    #e78e64
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  .detail-container {
    width: 100%;
    margin-right: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .image-container {
    width: 400px;
    text-align: center;

    img {
      max-width: 400px;
      align-items: center;
      border-radius: 20px;
    }
  }
  .information-container{
      display: flex;
      flex-direction: column;
      justify-content: space-around;
  }
  .stats-container{
      display: flex;
      justify-content: center;
      p {
          margin: 10px 35px;
          display: flex;
          align-items: center;
          font-size: 30px;
          font-weight: bold;
          svg {
              margin-right: 15px;   
          }
      }
  }
  .stats-values{
      display: flex;
      flex-direction: row;
      margin-left: 170px;
    p {
          margin: 10px 5px;
          display: flex;
          align-items: center;
          font-size: 30px;
          font-weight: bold;
    }
    .separator {
        margin-right: 35px;
        margin-left: 35px;
    }
  }
    .temperament-container {
      h5 {
        margin-top: 20px;
        margin-bottom: 10px;
        font-size: 36px;
        color: #fff;
      }
      .temperaments {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        .temp {
            font-size: 12px;    
          margin-right: 10px;
          margin-top: 5px;
          color: #fff;
          background-color: black;
          border-radius: 20px;
          padding: 10px;
        }
      }
    }
  }
`;
