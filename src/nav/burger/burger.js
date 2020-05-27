import React, { useContext } from 'react'
import { slide as Menu } from 'react-burger-menu'
import {NavLink} from 'react-router-dom'
import './burger.css'
import { GlobalContext } from '../../context/GlobalContext'
import { useAuth0 } from "../../react-auth0-spa"

function Burger(props) {
    const { activeProgram, activeWorkout } = useContext(GlobalContext)

    function handleClick() {
        activeProgram(null);
        activeWorkout(null);
    }

    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
    <Menu right>
        <NavLink to="/" onClick={handleClick}>Home</NavLink>
        <NavLink to="/programs" onClick={handleClick}>Programs</NavLink>
        <NavLink to="/log" onClick={handleClick}>Log Workout</NavLink>
        <NavLink to="/register" onClick={handleClick}>Register</NavLink>
        <NavLink to="/history" onClick={handleClick}>History</NavLink>
        {!isAuthenticated && (
            <span onClick={() => loginWithRedirect({})}>Log in</span>
        )}

        {isAuthenticated && <span onClick={() => logout()}>Log out</span>}
            
    </Menu>)
}

export default Burger;