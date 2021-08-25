import React, { useState } from 'react';
import { Input, Select, SelectTime, A, Form, Close} from './TasksStyle'

export const AddTask = ({setData, work, setWork}) => {

    // timeOption (minutes or hours)

    const [timeOption, setTimeOption] = useState('')

    const optionSelect = (e) => {
        setTimeOption(e.target.value)
    }

    // Limit hours or minutes

    const [time, setTime] = useState([])

    const setNewTime = (e) => {
        setTime(e.target.value)
    }

    const setMax = () => {
        if (timeOption === "Minutes") {
            return "60";
        }else {
            return "2";
        }
    }

    // setCategorie

    const [categorie, setCategorie] = useState('')

    const sendCategorie = (e) => {
        setCategorie(e.target.value)
    }

    // send form
    
    const sendInfo = () => {   
        if (categorie.length > 2) {
            setData(val => [...val, [timeOption, time, categorie]])
        } 

        if (setData) {
            setCategorie('')
        }
    }

    // set state form 

    const close = () => {
        if (work === true) {
            setWork(!true)
        }
    }



    return (
        <>
        <Form work={work}>
            <Close onClick={close}/>
            <Input
            placeholder="Ej. programar, leer, matematicas, fisica"
            type="text"
            value={categorie}
            onChange={sendCategorie}
            />
            <Select
            type="text"
            onChange={optionSelect}
            >   
                <option hidden selected>Choose your time</option>
                <option value="Minutes">Minutes</option>
                <option value="Hours">Hours</option>
            </Select>
            <SelectTime 
            type="number"
            min="1" 
            max={setMax()}    
            onChange={setNewTime}
            />
            <A onClick={sendInfo}>Add Task +</A>
        </Form>
        </>
    )
}
