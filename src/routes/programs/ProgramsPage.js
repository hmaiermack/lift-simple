import React, { useContext } from 'react'
import { ProgramsList } from '../../components/ProgramsList/ProgramsList'
import { WorkoutsList } from '../../components/WorkoutsList/WorkoutsList'
import { GlobalContext } from '../../context/GlobalContext'
import { ExerciseList } from '../../components/ExerciseList/ExerciseList'

export const ProgramsPage = () => {
    const { programs, workouts, active_program, active_workout } = useContext(GlobalContext)
    return (
        <div>
            <ProgramsList programs={programs}/>

            {active_program !== null &&
                <WorkoutsList workouts={workouts} />}
            {active_workout !== null &&
                <ExerciseList />}
        </div>
    )
}
