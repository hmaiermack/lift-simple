import React, { useContext } from 'react'
import { ExerciseListItem } from '../ExerciseListItem/ExerciseListItem'
import { GlobalContext } from '../../context/GlobalContext'

export const ExerciseList = () => {
    const { workouts, active_workout } = useContext(GlobalContext)

    
    return (
        <div className="exerciseList">
            {active_workout !== null ? 
            workouts[active_workout].exercises.map((item, index) => 
                <ExerciseListItem name={item.name} sets={item.sets} reps={item.reps} key={index}/>
            )
            : <span />}
        </div>
    )
}
