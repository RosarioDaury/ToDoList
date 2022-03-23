import styled from "styled-components";

export const Conteiner = styled.div`
    display: grid;
    grid-template-columns: 15vw 85vw;

    @media (max-width: 800px){
        display: flex;
        flex-direction: column;
        justify-content: start;
    }
`