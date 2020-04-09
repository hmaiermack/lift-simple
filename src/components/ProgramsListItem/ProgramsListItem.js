import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'


export const ProgramsListItem = (props) => {
    const {deleteProgramItem, activeProgram} = useContext(GlobalContext)

    function handleDelete(e) {
        activeProgram(null)
        deleteProgramItem(props.id)        
    }

    return (
        <div>
        <span onClick={() => activeProgram(props.id)}>
            {props.name}
        </span>
        <button className="deleteButton" onClick={handleDelete}>X</button><br></br>
        </div>
    )
}
