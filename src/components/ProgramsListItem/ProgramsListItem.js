import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'


export const ProgramsListItem = (props) => {
    const {deleteProgramItem} = useContext(GlobalContext)
    return (
        <span>
            {props.name}<button className="deleteButton" onClick={() => deleteProgramItem(props.id)}>X</button><br></br>
        </span>
    )
}
