import styled from 'styled-components';

export const StyledNavBar = styled.nav`
width: 100%;
position: fixed;
background-color: var(--color);
top: 0;
z-index: 10;
border-bottom: 2px solid var(--color); 

.container{
    margin: auto;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: black;
    padding: 10px;

    .social-media{
        margin: 0 15px;
        font-size: 40px; 
        display: flex;
        align-items: center;
        justify-content: center;       
        a{
            color: #fff;
            background-color: var(--color)
            margin: 10px;
            transition: color 200ms ease;

            &:hover{
                color: var(--color)
            }
            
        }
    }
}


.title{
    font-weight: bold;
    color: #fff;    
}
.list {
    list-style: none;
    display: flex;
    align-items: center;
}
.list-item {
    margin: 0 5px;
    display: flex;
    align-items: center;
}

.list-item a {
    color: #fff;
    padding: 6px 14px;
    margin-top: 5px;
    margin-bottom: 5px;
    text-decoration: none;
    border-radius: 20px;
    transition: background-color 250ms ease;
    font-weight: bold;
    border: 2px solid #fff;
}

.active {
    background: linear-gradient(to right, #C05F39, #E78E64);
}

.list-item a:hover{
    background-color: var(--color);
    color: white;
    font-weight: bold;
    transform: scale(1.02); 
}

@media (max-width: 900px){
    .container{
        flex-direction: column;
    }
}

@media (max-width: 650px){
    .social-media{
        height: 50px;
        i{
            font-size: 35px;
        }
    }
    .list-item a {
        font-size: 14px;
    }
}
`