import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'

export const WorkChoice = () => {
    const {workouts, active_program, activeWorkout, setChanged, changed} = useContext(GlobalContext)

    let activeWorkouts = workouts.filter(item  => 
        item.program_id === active_program
    )

    return (
        <div>
            {active_program !== null &&
            <h4 className="listHeader" style={{margin: '.25em 0 0 0'}}>Select Workout</h4>}
            {activeWorkouts.length === 0 &&
            (active_program !== null &&
            <p style={{margin: 0}}>You haven't added any workouts to this program.</p>)} 
            {activeWorkouts.map((workout, i) => 
                <span onClick={() => {
                    activeWorkout(workout.id)
                    setChanged(!changed)
                }} key={workout.id} className={"workChoice itemName listItem"}>
                    {workout.name}
                    <br></br>
            </span>)}
        </div>
    )
}
