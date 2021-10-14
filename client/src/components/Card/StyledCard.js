import styled from "styled-components";

export const StyledCard = styled.div`
  margin: 30px;
  display: flex;
  border-radius: 10px;
  overflow: hidden;
  width: 600px;
  height: 250px;
  background-color: var(--color);
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  transition: transform 250ms ease;
  &:hover {
    transform: scale(1.02);
  }
  .card-image{
        width: 50%;
        height: 100%;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .card-information{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 20px;
        width: 50%;
        height: 100%;
        
        h3 {
            color: #fff;
            font-size: 25px;
            font-weight: 900;   
        }
        .weight-container {
            display: flex;
            color: #fff;
            font-size: 16px;
            font-weight: 700;
            justify-content: center;
            p{
                margin-left: 5px;
            }
        }
        .temperament-container{
                h5{
                    margin-bottom: 10px;
                    font-size: 18px;
                    color: #fff;
                }
                margin: 0 auto;
                .temperaments{
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    .temp{
                        margin-right: 10px;
                        margin-top: 5px;
                        color: #fff;
                        background-color: black;
                        border-radius: 20px;
                        padding: 5px;
                    }
                }
            }
    }

    @media (max-width: 650px) {
        flex-direction: column;
        width: 100%;
        height: 520px;
        margin: 30px 0;
        .card-image {
          width: 100%;
          max-height: 50%;
        }
        .card-information{
            padding: 0 15px;
            width: 100%;
            h2{
                font-size: 30px;
            }
            h5{
                font-size: 17px;
            }
            h6{
                font-size: 19px;
            }        
        }
        
    }


`;
