import React, {useContext, useState} from 'react'
import { ProgramsListItem } from '../ProgramsListItem/ProgramsListItem'
import './programslist.css'
import { GlobalContext } from '../../context/GlobalContext'
import UserServices from "../../services/UserServices"
import { useAuth0 } from "../../react-auth0-spa"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheck} from '@fortawesome/free-solid-svg-icons'

 

export const ProgramsList = (props) => {
    const check = <FontAwesomeIcon icon={faCheck} />;
    const { user, getTokenSilently } = useAuth0();
    const { programs, addProgram, workouts, history } = useContext(GlobalContext)
    const id = user.sub.substr(6);
    const {updateData} = UserServices;

    const data = {
        programs,
        workouts,
        history
    }

    const [showAddProgram, setShowAddProgram] = useState(false);
    const [programName, setProgramName] = useState('')

    function handleAddClick() {
        setShowAddProgram(true)
    }    

    function handleChange(e) {
        setProgramName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        programs.push({
            name: programName,
            id: programs.length
        })
        addProgram(programName)
        console.log(JSON.stringify(data))
        getTokenSilently()
            .then(token => 
                updateData(id, token, JSON.stringify(data))
            )

        setShowAddProgram(false)
        setProgramName('')
    }

    return (
        <div className="listContainer">
            <h4 className="listHeader" style={{margin: 0}}>Programs</h4>
            {programs.map(program => 
                <ProgramsListItem name={program.name} key={program.id} id={program.id} />
            )}
            {showAddProgram ? 
                <form className="addForm">
                    <label htmlFor="programName">Program Name: </label>
                    <input type="text" className="addInput" name="programName" value={programName} onChange={handleChange}></input>
                    <span className="checkButton" onClick={handleSubmit}>{check}</span>
                </form>
            : <div className="addButton" onClick={() => handleAddClick()}>Add a program</div>}
            
            
        </div>
    )
}
