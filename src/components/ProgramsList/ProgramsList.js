import React from 'react'
import { ProgramsListItem } from '../ProgramsListItem/ProgramsListItem'
import { DeleteButton } from '../DeleteButton/DeleteButton'

export const ProgramsList = (props) => {

    let programs = props.programs;
    return (
        <div>
            <ul className="programsList">
                {programs.map(program => 
                    <ProgramsListItem name={program.name} key={program.id} />
                )}
                <DeleteButton />
            </ul>
        </div>
    )
}
