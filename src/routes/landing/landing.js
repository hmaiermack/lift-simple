import React from 'react'
import './landing.css'
import  progPage from '../../assets/progPage.jpg'
import historyPage from '../../assets/historyPage.jpg'
import logPage from '../../assets/logPage.jpg'

import { useAuth0 } from "../../react-auth0-spa"





function Landing(props) {
    const { isAuthenticated, loginWithRedirect} = useAuth0();

    return (
        <div className="landing">
            <header className="landingHeader">
                <h1>No hassle, just progress.</h1>
            </header>
            
            <section className="lSection">
                <h3>Create your programs</h3>
                <img src={progPage} alt="program creation page" className="landingImg"></img>
                <p>Create and customize as many programs as you need.
                </p>
            </section>

            <section className="lSection">
                <h3>Log your workouts quickly and easily</h3>
                <img src={logPage} alt="Page to log your workouts" className="landingImg"></img>
                <p>Lift Simple gives you an easy, unintrusive way to quickly
                log your exercises and get back to what matters: the workout.
                </p>
            </section>

            <section className="lSection">
                <h3>Track your progress</h3>
                <img src={historyPage} alt="Workout history page" className="landingImg"></img>
                <p>Find all of your completed workouts in one place and easily
                see your workout history.
                </p>
            </section>
            {!isAuthenticated && <span className="addButton" onClick={() => loginWithRedirect({})}>Register Now!</span>}        
            </div>
    )
}

export default Landing;