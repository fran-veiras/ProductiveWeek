import React, {useState} from 'react'
import { Dashboard } from './Components/Dashboard/Dashboard'
import { Start } from './Components/Starts/Start'

export const ProductiveWeek = () => {
    
    const [name, setName] = useState(localStorage.getItem("name")) 

    function saveLocalStorage() {
        localStorage.setItem("name", name)
    }

    saveLocalStorage()
    
    return (
        <>
            <Start name={name} setName={setName}/>
            <Dashboard name={name}/>
        </>
    )
}
