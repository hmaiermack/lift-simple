import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
 
export const WorkoutItem = (props) => {
    const { deleteWorkoutItem, activeWorkout, setChanged } = useContext(GlobalContext)

    function handleDelete(e) {
        activeWorkout(null)
        deleteWorkoutItem(props.id)        
    }

    return (
        <div>
        <span onClick={() => {
            setChanged(true)
            activeWorkout(props.id)
            setChanged(false)
        }}>
            {props.name}
        </span>
        <button className="deleteButton" onClick={handleDelete}>X</button><br></br>
        </div>
    )
}
