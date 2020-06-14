import React, {useContext, useState} from 'react'
import { ProgramsListItem } from '../ProgramsListItem/ProgramsListItem'
import './programslist.css'
import { GlobalContext } from '../../context/GlobalContext'
import UserServices from "../../services/UserServices"
import { useAuth0 } from "../../react-auth0-spa"

 

export const ProgramsList = (props) => {
    const { user, getTokenSilently } = useAuth0();
    const { programs, addProgram, workouts, history } = useContext(GlobalContext)

    const data = {
        programs,
        workouts,
        history
    }

    const id = user.sub.substr(6);

    const {updateData} = UserServices;
 


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
                    .then(res =>
                        (res.ok) ? 
                        setShowAddProgram(false)
                        : alert("Something went wrong.")
                    )
                )
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
