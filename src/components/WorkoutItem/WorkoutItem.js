import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
 
export const WorkoutItem = (props) => {
    const { deleteWorkoutItem, activeWorkout } = useContext(GlobalContext)


    function handleDelete(e) {
        activeWorkout(null)
        deleteWorkoutItem(props.id)        
    }

    return (
        <div>
        <span onClick={() => activeWorkout(props.id)}>
            {props.name}
        </span>
        <button className="deleteButton" onClick={handleDelete}>X</button><br></br>
        </div>
    )
}
