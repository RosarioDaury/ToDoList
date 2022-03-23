import styled from "styled-components";

export const SideConteiner = styled.div`
    width: 15vw;
    height: 90vh;
    position: sticky;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    background: #6495ED;
    color: white;
    padding: 1rem;
    margin: auto .5rem;
    border-radius: 10px;

    @media (max-width: 800px){
        position: static;
        display: flex;
        flex-direction: row; 
        justify-content: space-evenly;
        width: 95vw;
        height: 40vh;
        margin: 2rem 0;
        margin-top: 0;
    }
    
    @media (max-width:800px){
        img{
            display: none;
        }
    }

    h2{
        font-size: 1.3rem;
    }

    .options-side{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        margin-top: 2rem;
    }

    h3 {
        background-image: linear-gradient(
            to right,
            white,
            white 50%,
            #000 50%
        );
        background-size: 200% 100%;
        background-position: -100%;
        display: inline-block;
        padding: 5px 0;
        position: relative;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        transition: all 0.3s ease-in-out;
    }

    h3:before{
        content: '';
        background: white;
        display: block;
        position: absolute;
        bottom: -3px;
        left: 0;
        width: 0;
        height: 3px;
        transition: all 0.3s ease-in-out;
    }

    h3:hover {
        background-position: 0;
        cursor: pointer;
    }

    h3:hover::before{
        width: 100%;
    }
`