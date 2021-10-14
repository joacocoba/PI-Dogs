import styled from "styled-components";

export const StyledCreateBreed = styled.div`
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
  background: #C05F39,;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #C05F39, #E78E64);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #C05F39, #E78E64); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    .form{
        width: 50%;
        margin-right: 10px;
    }
    .form-top{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 20px 0 0;
    }
    .form-title{
        color: #fff;
        margin-bottom: 40px;
    }
    .form-containers{
        width: 100%;
        p {
                    font-size: 16px;
                    font-weight: bold;
                    margin-top: 0px;
                    margin-bottom: 10px;
                }
    }
    input {
                font-size: 15px;
                margin-bottom: 20px; 
                padding: 8px 10px;
                border-radius: 10px;
                border: 1px solid black;
                outline: none;
                width: 70%;
               
                }

            select{
                padding: 10px;
                border-radius: 10px;
                outline: none;
                font-size: 15px;
                margin-bottom: 20px;
                border: 1px solid black;
                width: 70%;
            }
            .submit{
                color: #fff;
                background-color: #F8AF7B;
                font-weight: bold;
                width: 70%;
                border: none;
                padding: 10px 15px;
                border-radius: 5px;
                transition: background-color 300ms ease, font-weight 300ms ease;;
                outline: none;
                cursor: pointer;
                
                &:hover {
                font-weight: bold;
                cursor: pointer;
                color: #fff;
                background-color: #702B1C;
                }
            }
            .submit:active{
                transform: scale(0.95);
            }

            .temp-container{
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            margin-bottom: 15px;
            
            p {
                background-color: var(--color);
                color: #fff;
                padding: 3px;
                border-radius: 5px;
                margin: 5px;
            }
            button {
                margin: 1px;
                cursor: pointer;
                padding: 3px;
                border-radius: 5px;
                background: linear-gradient(to right, #e43a15, #e65245);
                color: #fff
            }
        }
        .image-container{
        background-image: url('https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80');
        background-size: cover;
        width: 50%;
        border-radius: 20px;
        background-position: center;

    }

    @media (max-width: 900px){
    margin: 200px auto 30px;
}

@media (max-width: 650px){
    flex-direction: column-reverse;

    .form{
        width: 100%;
    }

    .img-container{
        height: 300px;
        width: 100%;
        background-position: center;
    }
    .form{
        margin: 10px 0 0;

        .form-top{
            input, select{
                width: 100%;
            }
        }
    }
}
`;
