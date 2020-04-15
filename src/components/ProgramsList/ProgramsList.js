import React, {useContext, useState} from 'react'
import { ProgramsListItem } from '../ProgramsListItem/ProgramsListItem'
import './programslist.css'
import { GlobalContext } from '../../context/GlobalContext'

export const ProgramsList = (props) => {

    let{programs, addProgram} = useContext(GlobalContext)

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
        setShowAddProgram(false)

    }

    return (
        <div className="programList">
            <h4 style={{margin: 0}}>Programs</h4>
            {programs.map(program => 
                <ProgramsListItem name={program.name} key={program.id} id={program.id} />
            )}
            {showAddProgram ? 
                <form>
                    <label htmlFor="programName">Program Name:</label>
                    <input type="text" name="programName" value={programName} onChange={handleChange}></input>
                    <button type="submit" onClick={handleSubmit}> check</button>
                </form>
            : <button onClick={() => handleAddClick()}>Add</button>}
            
            
        </div>
    )
}
