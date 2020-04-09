import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'

export const ExerciseListItem = (props) => {

    const { deleteExerciseItem, workouts, active_workout } = useContext(GlobalContext)

    function handleDelete (e) {

            const  newEx  = workouts[active_workout].exercises.filter(item => item.name !== props.name)
            workouts[active_workout].exercises = newEx;
    }

    return (
        <div>
        <span>
            {props.name}: {props.sets} x {props.reps}
        </span>
        <button className="deleteButton" onClick={handleDelete}>X</button><br></br>
        </div>
    )
}
