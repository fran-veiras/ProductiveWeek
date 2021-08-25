import styled from "styled-components";
import {AiOutlineClose} from 'react-icons/ai'

export const CycleBox = styled.div`
    background: #E6DD3B;
    border-radius: 7px;
    width: 95%;
    margin: 1.2rem auto;
    padding: 0.4rem 2rem;
    height: 3rem;
    display: ${({deleteTask}) => deleteTask ? 'flex' : 'none'};
    position: relative;
`

export const Ps = styled.p`
    flex: 1;
`

export const P2 = styled.p`
    flex: 1.5;
`

export const Cross = styled.p`
    display: ${({state}) => state ? 'none' : 'block'};
    cursor: pointer;
`

export const Check = styled.p`
    display: ${({state}) => state ? 'block' : 'none'};
    cursor: pointer;
`

export const Delete = styled(AiOutlineClose)`
    width: 15px;
    height: 15px;
    cursor: pointer;
    position: absolute;
    left: 1%;
    top: 35%;
`