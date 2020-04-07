import React from 'react'
import { DeleteButton } from '../DeleteButton/DeleteButton'

export const ProgramsListItem = (props) => {
    return (
        <li>
            {props.name}<DeleteButton />
        </li>
    )
}
