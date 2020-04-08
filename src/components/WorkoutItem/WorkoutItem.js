import React, { useContext } from 'react'
import { DeleteButton } from '../DeleteButton/DeleteButton'
import { GlobalContext } from '../../context/GlobalContext'

export const WorkoutItem = (props) => {
    const { deleteWorkoutItem } = useContext(GlobalContext)
    return (
        <span>{props.name}<button className="deleteButton" onClick={() => deleteWorkoutItem(props.id)}>X</button><br></br></span>
    )
}
