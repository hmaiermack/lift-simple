import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import { ProgChoice } from '../../components/LogChoices/ProgChoice'
import { WorkChoice } from '../../components/LogChoices/WorkChoice'
import { LogForm } from '../../components/LogForm/LogForm'
import './logPage.css'

export const LogPage = () => {

    const { active_program, active_workout } = useContext(GlobalContext)
    return (
        <div className="pageContainer logPage">
            <h1>Log Workout</h1>
            <div className="listContainer" style={{maxWidth: '70%' }}>
                <ProgChoice />
                {active_program !== null ?
                    <WorkChoice /> :
                    null}
                {active_workout !== null &&
                    <LogForm />}
            </div>
        </div>
    )
}
