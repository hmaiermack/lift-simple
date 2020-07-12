import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import UserServices from "../../services/UserServices"
import { useAuth0 } from "../../react-auth0-spa"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTimes} from '@fortawesome/free-solid-svg-icons'

 
export const WorkoutItem = (props) => {
    const del = <FontAwesomeIcon icon={faTimes} />;
    const { user, getTokenSilently } = useAuth0();
    const { deleteWorkoutItem, activeWorkout, setChanged, programs, workouts, history } = useContext(GlobalContext)
    const id = user.sub.substr(6);
    const {updateData} = UserServices;

    const data = {
        programs,
        workouts,
        history
    }

    function handleDelete(e) {
        activeWorkout(null)
        deleteWorkoutItem(props.id)
        const update = {
            ...data,
            workouts: data.workouts.filter(item => item.id !== props.id)
        }
        console.log(update)
        getTokenSilently()
            .then(token => 
                updateData(id, token, JSON.stringify(update))
            )
    }

    return (
        <div className="listItem">
            <span className="itemName" onClick={() => {
                setChanged(true)
                activeWorkout(props.id)
                setChanged(false)
            }}>
                {props.name}
            </span>
            <span className="deleteButton" onClick={handleDelete}>{del}</span><br></br>
        </div>
    )
}
