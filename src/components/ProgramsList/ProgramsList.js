import React from 'react'
import { ProgramsListItem } from '../ProgramsListItem/ProgramsListItem'
import { AddButton } from '../AddButton/AddButton'
import './programslist.css'

export const ProgramsList = (props) => {

    let programs = props.programs;
    return (
        <div className="programList">
            
            {programs.map(program => 
                <ProgramsListItem name={program.name} key={program.id} id={program.id}/>
            )}
            <AddButton />
            
        </div>
    )
}
