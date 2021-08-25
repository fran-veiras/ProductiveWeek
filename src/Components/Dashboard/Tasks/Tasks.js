import React, {useState} from 'react'
import { AddTask } from './AddTask'
import { Cycles } from './Cycles/Cycles'
import {Container, TaskBox} from './TasksStyle'

export const Tasks = ({work, setWork}) => {

    const [data, setData] = useState([])

    const CyclesData = data.map(cat => {
        return {
            timeOption: cat[0],
            time: cat[1],
            categorie: cat[2]
        }
    })

    return (
        <Container>
            <AddTask setWork={setWork} work={work} setData={setData}/>
            <TaskBox>
            {
                CyclesData.map(cat => (
                    <Cycles 
                    timeOption={cat.timeOption}
                    time={cat.time}
                    categorie={cat.categorie}
                    />
                ))
            }
            </TaskBox>
        </ Container >
    )
}
