import React, {useContext, useState} from 'react'
import { WorkoutItem } from '../WorkoutItem/WorkoutItem'
import { GlobalContext } from '../../context/GlobalContext'
import UserServices from "../../services/UserServices"
import { useAuth0 } from "../../react-auth0-spa"


export const WorkoutsList = (props) => {
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
            console.log(data)
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
        <div className="workoutsList">
            {active_program !== null &&
                <h4 style={{margin: 0}}>Workouts</h4>}
            {activeWorkouts.map((workout, i) => 
                <WorkoutItem name={workout.name} key={i} id={workout.id}/>)}
            {showAddWorkout &&
                <form>
                <label htmlFor="programName">Workout Name::</label>
                <input type="text" name="programName" value={workoutName} onChange={handleChange}></input>
                <button type="submit" onClick={handleSubmit}> check</button>
            </form>}
            {active_program !== null &&
                (showAddWorkout !== true &&
                <button onClick={() => handleAddClick()}>Add</button>)
            }
        </div>
    )
}
