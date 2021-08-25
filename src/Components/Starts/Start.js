import React, { useState, useEffect } from 'react'
import brand from '../../images/brand.png';
import {
    InitContainer,
    Brand,
    StartProductive,
    Input,
    Card
} from './StartStyle';

export const Start = ({setName, name}) => {
    
    // get name
    const [inputValue, setInputValue] = useState('')
    
    const changeValue = (e) => {
            setInputValue(e.target.value)
    }

    const commitValue = (e) => {
        if (e.key === 'Enter' && inputValue.trim().length > 2) {
            setName(inputValue)
        }
    }

    // set name info

    const [display, setDisplay] = useState(false)

    useEffect(() => {
        if (name.length < 2) {
            setDisplay(!true)
        }else {
            setDisplay(!false)
        }
    }, [name])

    
    // input start
    
    const [start, setStart] = useState(false)
    
    const toggler = () => {
        if (start === false) {
            setStart(!false)
        }
    }
    
    
    return (
        <InitContainer display={display}>
            <Card>
                <Brand src={brand}/>
                <StartProductive onClick={toggler}>Start</StartProductive>
                <Input
                    type="text"
                    start={start} 
                    placeholder="Your name.."
                    value={inputValue}
                    onChange={changeValue}
                    onKeyDown={commitValue} 
                    >
                </Input>
            </Card>
        </InitContainer>
    )
}
