import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import UserServices from "../../services/UserServices"
import { useAuth0 } from "../../react-auth0-spa"


export const ProgramsListItem = (props) => {
    const {deleteProgramItem, activeProgram, setChanged, activeWorkout, programs, workouts, history, changed} = useContext(GlobalContext)
    const { user, getTokenSilently } = useAuth0();
    const id = user.sub.substr(6);
    const {updateData} = UserServices;

    const data = {
        programs,
        workouts,
        history
    }

    function handleDelete(e) {
        activeProgram(null)
        deleteProgramItem(props.id)
        setChanged(!changed)
        getTokenSilently()
        .then(token => 
            updateData(id, token, JSON.stringify(data))
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
