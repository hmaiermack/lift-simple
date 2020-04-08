import React, { useContext } from 'react'
import { ProgramsList } from '../../components/ProgramsList/ProgramsList'
import { WorkoutsList } from '../../components/WorkoutsList/WorkoutsList'
import { GlobalContext } from '../../context/GlobalContext'

export const ProgramsPage = () => {
    const { programs, workouts } = useContext(GlobalContext)
    return (
        <div>
            <header><h2>Programs</h2></header>
            <ProgramsList programs={programs}/>
            <WorkoutsList workouts={workouts} />
        </div>
    )
}
