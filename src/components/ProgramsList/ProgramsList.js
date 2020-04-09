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

    //need to implement form submit logic
    //why does this have to live in programslist??
    const handleSubmit = (e) => {
        console.log('type of programs: ' + typeof(programs))
        e.preventDefault();
        programs.push({
            name: programName,
            id: programs.length
        })
        addProgram(programName)
        console.log('type of programs: ' + typeof(programs))
        setShowAddProgram(false)

    }

    return (
        <div className="programList">
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
