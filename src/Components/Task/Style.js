import styled from "styled-components";

export const TaskConteiner = styled.div`
    width: 75vw;
    height: 60vh;
    margin: 2rem auto;
    display: flex;
    border-radius: 10px;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    background: #6495ED;
    overflow-y: scroll;

    &::-webkit-scrollbar{
        background-color: rgb(156, 155, 155, .4);
        border-radius: 20px;
    }

    &::-webkit-scrollbar-thumb{
        background-color: rgb(156, 155, 155, .6);
        border-radius: 20px;
    }

    @media (max-width: 800px){
        width: 90vw;
    }


    .single{
        width: 95%;
        height: auto;
        padding: .5rem;
        margin-top: .7rem;
        border-radius: 10px;
        background: white;
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        @media (max-width: 800px){
            width: 75vw;
            flex-direction: column;
        }
        
    }

    button{
        padding: 1rem;
        background: #6495ED;
        border: none;
        border-radius: 5px;
        color: white;
        font-weight: bold;
        font-size: 1rem;

        @media (max-width: 800px){
            margin: 1rem 0;
        }
    }

    button:hover{
        cursor:pointer;
        background: blue;
    }

    input[type="checkbox"]{
        width: 20px;
        height: 20px;
    }

    h3{
        color: black;
        font-size: 1rem;
    }
`