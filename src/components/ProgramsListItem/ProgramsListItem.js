import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import UserServices from "../../services/UserServices"
import { useAuth0 } from "../../react-auth0-spa"


export const ProgramsListItem = (props) => {
    const {deleteProgramItem, activeProgram, setChanged, activeWorkout, programs, workouts, history, changed, setPrograms, setWorkouts, setHistory} = useContext(GlobalContext)
    const { user, getTokenSilently } = useAuth0();
    const id = user.sub.substr(6);
    const {updateData, getUserData} = UserServices;


    function handleDelete(e) {
        const data = {
            programs,
            workouts,
            history
        }

        activeProgram(null)
        deleteProgramItem(props.id)
        setChanged(!changed)
        console.log(programs)
        let update = {...data,
            programs: data.programs.filter(item => item.id !== props.id),
            workouts: data.workouts.filter(item => item.program_id !== props.id)}
        console.log(update)
        getTokenSilently()
        .then(token => 
            updateData(id, token, JSON.stringify(update))
        )          
    }

    return (
        <div>
        <span onClick={() => {
            setChanged(true)
            activeProgram(props.id)
            activeWorkout(null)
            setChanged(false)
            }}>
            {props.name}
        </span>
        <button className="deleteButton" onClick={handleDelete}>X</button><br></br>
        </div>
    )
}
