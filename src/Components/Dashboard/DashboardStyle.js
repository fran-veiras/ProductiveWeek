import styled from "styled-components";
import background from '../../images/background.jpg';

export const Container = styled.div`
    background-image: url(${background});
    width: 100vw;
    height: 100vh;
    background-position: center;
    background-size: cover;
    z-index: 1;
`

export const Info = styled.div`
    width: 80%;
    margin: 1rem auto;
    display: flex;
    align-items: center;
`

export const Brand = styled.img`
    width: 10rem;
    margin-left: 10%;
`

export const Welcome = styled.h2`
    
`

export const ButtonContainer = styled.div`
    flex: 1;
    text-align: end;
`

export const Button = styled.button`
    pointer-events: auto;
    cursor: pointer;
    background: #e7e7e7;
    border: none;
    padding: 1.5rem 3rem;
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    position: relative;
    display: inline-block;

    background: #000;
    font-weight: 700;
    padding: 0;
    border-radius: 5px;
`

export const Span = styled.span`
    display: block;
    background: #29BB89;
    padding: 1rem 2rem;
    border: 1px solid #000;
    border-radius: 5px;
    transform: translate3d(-4px, -4px, 0);

    &:hover {
        transform: translate3d(-8px, -8px, 0);
        transition: transform 0.3s cubic-bezier(0.7, 0, 0.2, 1);
    }
`

export const Hr = styled.hr`
    width: 80%;
    margin: 2rem auto;
`