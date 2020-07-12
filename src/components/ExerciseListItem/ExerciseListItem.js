import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTimes} from '@fortawesome/free-solid-svg-icons'


export const ExerciseListItem = (props) => {
    const del = <FontAwesomeIcon icon={faTimes} />;
    
    return (
        <div className="listItem">
        <span>
            {props.name}: {props.sets} x {props.reps}
        </span>
        <span className="deleteButton" onClick={props.handleDelete} name={props.name}>{del}</span><br></br>
        </div>
    )
}
