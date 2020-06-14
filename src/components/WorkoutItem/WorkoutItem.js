import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import UserServices from "../../services/UserServices"
import { useAuth0 } from "../../react-auth0-spa"

 
export const WorkoutItem = (props) => {
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
        getTokenSilently()
            .then(token => 
                updateData(id, token, JSON.stringify(data))
            )
    }

    return (
        <div>
        <span onClick={() => {
            setChanged(true)
            activeWorkout(props.id)
            setChanged(false)
        }}>
            {props.name}
        </span>
        <button className="deleteButton" onClick={handleDelete}>X</button><br></br>
        </div>
    )
}
