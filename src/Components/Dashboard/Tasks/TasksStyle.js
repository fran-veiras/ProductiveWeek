import styled from "styled-components";
import {AiOutlineClose} from 'react-icons/ai'

export const Input = styled.input`
    width: 50%;
    padding: 0.2rem 2rem;
    margin-top: 1rem;
    box-sizing: border-box;
    outline: none;
    border: 2px solid #000;
    border-radius: 7px;
    font-size: 25px;
    margin-left: 3%;
`

export const Container = styled.div`
    width: 80%;
    margin: 0 auto;
`

export const Select = styled.select`
    width: 30%;
    padding: 0.4rem 1rem;
    margin-top: 1rem;
    box-sizing: border-box;
    outline: none;
    border: 2px solid #000;
    border-radius: 7px;
    font-size: 25px;
    margin-left: 1.2%;
`

export const SelectTime = styled.input`
    width: 10%;
    padding: 0.22rem 2rem;
    margin-top: 1rem;
    box-sizing: border-box;
    outline: none;
    border: 2px solid #000;
    border-radius: 7px;
    font-size: 25px;
    margin-right: 3%;
    margin-left: 1.2%;
`

export const A = styled.a`
    display: block;
    position: absolute;
    margin: 0.4rem 1rem;
    right: 13%;
    cursor: pointer;
`

export const Form = styled.form`
    display: ${({work}) => work ? 'block' : 'none'}
`

export const TaskBox = styled.div`
    height: 50vh;
    margin-top: 2rem;
    overflow: hidden;
    overflow-y: scroll;
`

export const Close = styled(AiOutlineClose)`
    cursor: pointer;
    display: block;
    width: 20px;
    height: 20px;
`