import React, {useContext, useEffect} from 'react'
import {GlobalContext} from '../../context/GlobalContext'
import { useAuth0 } from "../../react-auth0-spa"
import UserServices from "../../services/UserServices"


export const Username = (props) => {
    const { setPrograms, setWorkouts, setHistory } = useContext(GlobalContext)

    const { user, getTokenSilently } = useAuth0();

    const id = user.sub.substr(6)

    const {getUserData} = UserServices;

    useEffect(() => {

        getTokenSilently()
        .then(token => getUserData(id, token, setPrograms, setWorkouts, setHistory))

    }, [user])


    return (
        <span>
            {props.name}
        </span>
    )
}
