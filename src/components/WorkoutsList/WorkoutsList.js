import React, {useContext, useState} from 'react'
import { WorkoutItem } from '../WorkoutItem/WorkoutItem'
import { GlobalContext } from '../../context/GlobalContext'

export const WorkoutsList = (props) => {
    const {workouts, active_program, addWorkout} = useContext(GlobalContext)

    const [showAddWorkout, setShowAddWorkout] = useState(false)
    const [workoutName, setWorkoutName] = useState('')

    const activeWorkouts = workouts.filter(item  => 
            item.program_id.some(id => id === active_program)
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
                name: workoutName,
                id: workouts.length,
                program_id: [active_program],
                exercises: []
            })
            addWorkout(workoutName)
            setShowAddWorkout(false)
    
        }

    return (
        <div className="workoutsList">
            {activeWorkouts.map((workout, i) => 
                <WorkoutItem name={workout.name} key={i} id={workout.id}/>)}
            {showAddWorkout ?
                <form>
                <label htmlFor="programName">Workout Name::</label>
                <input type="text" name="programName" value={workoutName} onChange={handleChange}></input>
                <button type="submit" onClick={handleSubmit}> check</button>
            </form>
        : <button onClick={() => handleAddClick()}>Add</button>}
        </div>
    )
}
