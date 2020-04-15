import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'

export const ProgChoice = () => {
    const {programs, activeProgram, activeWorkout } = useContext(GlobalContext)
    return (
        <div >
            <h4 style={{margin: 0}}>Select Program</h4>
            {programs.map(program => 
                <span onClick={() => {
                    activeProgram(program.id)
                    activeWorkout(null)
                    }} key={program.id} className={"progChoice"}>
                    {program.name}
                    <br></br>
                </span>
            )}
        </div>
    )
}
