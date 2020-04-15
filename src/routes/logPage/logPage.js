import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import { ProgChoice } from '../../components/LogChoices/ProgChoice'
import { WorkChoice } from '../../components/LogChoices/WorkChoice'
import { LogForm } from '../../components/LogForm/LogForm'

export const LogPage = () => {

    const { active_program, active_workout } = useContext(GlobalContext)
    return (
        <div>
            <header><h1>Log Workout</h1></header>
            <ProgChoice />
            {active_program !== null ?
                <WorkChoice /> :
                null}
            {active_workout !== null &&
                <LogForm />}
        </div>
    )
}
