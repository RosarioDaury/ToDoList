import styled from "styled-components";

export const FormStyled = styled.form`
    width: 75vw;
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    margin: auto;

    div{
        display:flex;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        width: 100%;
        height: 30%;
        margin: .5rem 0;
    }

    div > spam{
        width: 20%;
        height: 40%;
        padding: .3rem;
        background: grey;
        text-align: center;
        color: white;
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 1.1rem;
        border-bottom-left-radius: 5px;
        border-top-left-radius: 5px;
    }
    
    div > input[type="text"]{
        width: 80%;
        height: 40%;
        padding: .2rem;
        margin: .2rem 0;
        text-align: center;
        border-color: rgb(165, 165, 165, .2);
        border-width: solid;
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 1.3rem;
        border-bottom-right-radius: 5px;
        border-top-right-radius: 5px;

        @media (max-width: 800px){
            width: 90%;
        }
    }

    input[type="submit"]{
        margin-top: 1rem;
        width: 20%;
        padding: 1rem;
        background: #6495ED;
        border: none;
        border-radius: 5px;
        color: white;
        font-weight: bold;
        font-size: 1rem;

        @media (max-width: 800px){
            width: 25%;
        }
    }

    input[type="submit"]:hover{
        cursor: pointer;
        background: blue;
    }

`