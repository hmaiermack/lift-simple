import React from 'react'
import store from '../../dummystore'
import { ProgramsList } from '../../components/ProgramsList/ProgramsList'

export const ProgramsPage = () => {
    return (
        <div>
            <header><h2>Programs</h2></header>
            <ProgramsList programs={store.programs}/>
        </div>
    )
}
