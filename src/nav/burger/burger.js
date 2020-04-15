import React, { useContext } from 'react'
import { slide as Menu } from 'react-burger-menu'
import {NavLink} from 'react-router-dom'
import './burger.css'
import { GlobalContext } from '../../context/GlobalContext'

function Burger(props) {
    const { activeProgram, activeWorkout } = useContext(GlobalContext)

    function handleClick() {
        activeProgram(null);
        activeWorkout(null);
    }

    return (
    <Menu right>
        <NavLink to="/" onClick={handleClick}>Home</NavLink>
        <NavLink to="/programs" onClick={handleClick}>Programs</NavLink>
        <NavLink to="/log" onClick={handleClick}>Log Workout</NavLink>
        <NavLink to="/register" onClick={handleClick}>Register</NavLink>
        <NavLink to="/login" onClick={handleClick}>Log In</NavLink>
        <NavLink to="/history" onClick={handleClick}>History</NavLink>
    </Menu>)
}

export default Burger;