import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import {NavLink} from 'react-router-dom'
import './burger.css'

function Burger(props) {
    return (
    <Menu right >
        <NavLink to="/">Home</NavLink>
        <NavLink to="/programs">Programs</NavLink>
        <NavLink to="/log">Log Workout</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/history">History</NavLink>
    </Menu>)
}

export default Burger;