import React from 'react'

export const ExerciseListItem = (props) => {
    
    return (
        <div>
        <span>
            {props.name}: {props.sets} x {props.reps}
        </span>
        <button className="deleteButton" onClick={props.handleDelete} name={props.name}>X</button><br></br>
        </div>
    )
}
