import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'

export const ProgChoice = () => {
    const {programs, activeProgram, activeWorkout } = useContext(GlobalContext)
    return (
        <div >
            <h4 className="listHeader" style={{margin: 0}}>Select Program</h4>
            {programs.length === 0 &&
                <p>You haven't created any programs yet!</p>}
            {programs.map(program => 
                <span onClick={() => {
                    activeProgram(program.id)
                    activeWorkout(null)
                    }} key={program.id} className={"progChoice itemName listItem"}>
                    {program.name}
                    <br></br>
                </span>
            )}
        </div>
    )
}
