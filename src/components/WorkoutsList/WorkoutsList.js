import React from 'react'
import { WorkoutItem } from '../WorkoutItem/WorkoutItem'
import { AddButton } from '../AddButton/AddButton'

export const WorkoutsList = (props) => {
    return (
        <div className="workoutsList">
            {props.workouts.map((workout, i) => 
                <WorkoutItem name={workout.name} key={i} id={workout.id}/>)}
                <AddButton />
        </div>
    )
}
