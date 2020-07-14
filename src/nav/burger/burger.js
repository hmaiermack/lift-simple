import React, { useContext } from 'react'
import { slide as Menu } from 'react-burger-menu'
import {NavLink} from 'react-router-dom'
import './burger.css'
import { GlobalContext } from '../../context/GlobalContext'
import { useAuth0 } from "../../react-auth0-spa"
import {Username} from './Username'

function Burger(props) {
    const { activeProgram, activeWorkout } = useContext(GlobalContext)

    //clear state vars for fresh components on navigation
    function handleClick() {
        activeProgram(null);
        activeWorkout(null);
    }

    //auth0 services
    const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  
    /*need to look into user account management with auth0 further
    const changePassword = () => {
        fetch('https://lift-simple.auth0.com/dbconnections/change_password', 
        {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                email: user.email,
                connection: "Username-Password-Authentication"
            }),
        })
        .then(res => console.log(res))
    }*/


    return (
    <Menu right>
        {isAuthenticated && <Username name={user.name} />}
        <NavLink to="/" onClick={handleClick}>Home</NavLink>
        {isAuthenticated && <NavLink className="bm-item" to="/programs" onClick={handleClick}>Programs</NavLink>}
        {isAuthenticated && <NavLink className="bm-item" to="/log" onClick={handleClick}>Log Workout</NavLink>}
        {isAuthenticated && <NavLink className="bm-item" to="/history" onClick={handleClick}>History</NavLink>}
        {/*login/out logic handled through auth0, as is acc management*/}
        {!isAuthenticated && <span onClick={() => loginWithRedirect({})}>Log in</span>}
        {isAuthenticated && <span onClick={() => logout()}>Log out</span>}
        {/* implement pass change here */}
            
    </Menu>)
}

export default Burger;