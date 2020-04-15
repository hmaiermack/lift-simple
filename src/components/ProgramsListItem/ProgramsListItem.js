import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'


export const ProgramsListItem = (props) => {
    const {deleteProgramItem, activeProgram, setChanged, activeWorkout} = useContext(GlobalContext)

    function handleDelete(e) {
        activeProgram(null)
        deleteProgramItem(props.id)        
    }

    return (
        <div>
        <span onClick={() => {
            setChanged(true)
            activeProgram(props.id)
            activeWorkout(null)
            setChanged(false)
            }}>
            {props.name}
        </span>
        <button className="deleteButton" onClick={handleDelete}>X</button><br></br>
        </div>
    )
}
