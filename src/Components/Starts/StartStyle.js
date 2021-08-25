import styled from "styled-components";
import background from '../../images/background.jpg';

export const InitContainer = styled.div`
    background-image: url(${background});
    width: 100vw;
    height: 100vh;
    background-position: center;
    background-size: cover;
    display: ${(({display}) => display ? 'none' : 'flex')};
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 3;
`

export const Brand = styled.img`
    width: 15rem;
`
export const StartProductive = styled.h1`
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`

export const Card = styled.div`
    background: #fff;
    padding: 4rem 8rem;
    border-radius: 7px;
    border: 3px solid #000;
    box-shadow: .5rem .5rem 0 #000;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const Input = styled.input`
    width: 100%;
    padding: 0.2rem 2rem;
    margin-top: 1rem;
    box-sizing: border-box;
    outline: none;
    border: 2px solid #000;
    border-radius: 7px;
    text-align: center;
    display: ${(({start}) => start ? 'block' : 'none')};
`