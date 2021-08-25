import React, { useState } from 'react'
import {CycleBox, Ps, P2, Cross, Check, Delete} from './CyclesStyle';

export const Cycles = ({timeOption, time, categorie}) => {

    const [state, setState] = useState(false)

    const complete = () => {
        if (state === false) {
            setState(!false)
        }
    }

    const inComplete = () => {
        if (state === true) {
            setState(!true)
        }
    }

    const [deleteTask, setDeleteTask] = useState(true)

    const deleteOptionFunc = () => {
        if (deleteTask === true) {
            setDeleteTask(!true)
        }
    }

    return (
        <CycleBox deleteTask={deleteTask}>
            <Ps><Delete onClick={deleteOptionFunc}/>{categorie}</Ps>
            <P2>Time: {time} {timeOption}</P2>
            <Cross onClick={complete} state={state}>❌</Cross>
            <Check onClick={inComplete} state={state}>✅</Check>
        </CycleBox>
    )
}
