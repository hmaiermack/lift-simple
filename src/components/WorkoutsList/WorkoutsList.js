import React, {useContext, useState} from 'react'
import { WorkoutItem } from '../WorkoutItem/WorkoutItem'
import { GlobalContext } from '../../context/GlobalContext'
import UserServices from "../../services/UserServices"
import { useAuth0 } from "../../react-auth0-spa"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheck} from '@fortawesome/free-solid-svg-icons'



export const WorkoutsList = (props) => {
    const check = <FontAwesomeIcon icon={faCheck} />;
    const { user, getTokenSilently } = useAuth0();
    const {workouts, active_program, addWorkout, programs, history} = useContext(GlobalContext)
    const {updateData} = UserServices;
    const id = user.sub.substr(6);

    const data = {
        programs,
        workouts,
        history
    }

    const [showAddWorkout, setShowAddWorkout] = useState(false)
    const [workoutName, setWorkoutName] = useState('')

    

    let activeWorkouts = workouts.filter(item  => 
            item.program_id === active_program
        )

        function handleAddClick() {
            setShowAddWorkout(true)
        }    
    
        function handleChange(e) {
            setWorkoutName(e.target.value)
        }
    
        const handleSubmit = (e) => {
            e.preventDefault();
            workouts.push({
                id: workouts.length,
                name: workoutName,
                program_id: active_program,
                exercises: []
            })
            addWorkout(workoutName)
            activeWorkouts = workouts.filter(item  => 
                item.program_id === active_program
            )
            getTokenSilently()
                .then(token => 
                    updateData(id, token, JSON.stringify(data))
                )

            setShowAddWorkout(false)
    
        }

    return (
        <div className="listContainer">
            {active_program !== null &&
                <h4 className="listHeader" style={{margin: 0}}>Workouts</h4>}
            {activeWorkouts.map((workout, i) => 
                <WorkoutItem name={workout.name} key={i} id={workout.id}/>)}
            {showAddWorkout &&
                <form className="addForm" onSubmit={handleSubmit}>
                <label htmlFor="programName">Workout Name: </label>
                <input type="text" className="addInput" name="programName" value={workoutName} onChange={handleChange}></input>
                <span className="checkButton" onClick={handleSubmit}>{check}</span>
            </form>}
            {active_program !== null &&
                (showAddWorkout !== true &&
                <button type="button" className="addButton" onClick={() => handleAddClick()}>Add a workout</button>)
            }
        </div>
    )
}
