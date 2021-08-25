import React, {useState} from 'react'
import { Tasks } from './Tasks/Tasks';
import {Container,
        Info, 
        Brand,
        Welcome,
        Button,
        Span,
        ButtonContainer,
        Hr
} from './DashboardStyle';
import brand from '../../images/brand.png'

export const Dashboard = ({name}) => {

    const [work, setWork] = useState(false)

    const toggler = () => {
        if (work === false) {
            setWork(!false)
        }
    }

    return (
        <Container>
                <Brand src={brand}/>
            <Info>
                <div>
                <Welcome>Hello, {name}.</Welcome>
                </div>
                <ButtonContainer>
                    <Button onClick={toggler}>
                        <Span>Start Working</Span>
                    </Button>
                </ButtonContainer>
            </Info>
            <Hr />
            <Tasks work={work} setWork={setWork}/>
        </Container>
    )
}
