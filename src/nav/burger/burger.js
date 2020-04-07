import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import {NavLink} from 'react-router-dom'
import './burger.css'

function Burger(props) {
    return (
    <Menu right >
        <NavLink to="/">Home</NavLink>
        <NavLink to="/log">Log Workout</NavLink>
        {/*Need to determine conditional rendering based on logged in/out 
        <NavLink to="/signup">Sign Up</NavLink>
        <NavLink to="/login">Log In</NavLink>
        <Link to="/">Log Out</NavLink>
        */}
    </Menu>)
}

export default Burger;