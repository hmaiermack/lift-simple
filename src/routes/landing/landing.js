import React, {useContext, useEffect} from 'react'
import './landing.css'
import {Link} from 'react-router-dom'




function Landing(props) {
    return (
        <div className="landing">
            <header className="landingHeader">
                <h1>No hassle, just progress.</h1>
            </header>

            <section>
                <h3>Log your workouts quickly and easily</h3>
                <p style={{width: 400, height: 250, backgroundColor: 'white', margin: '0 auto 0 auto'}}>placeholder screenshot of log page</p>
                <p>Lift Simple gives you an easy, unintrusive way to quickly
                log your exercises and get back to what matters: the workout.
                </p>
            </section>

            <section>
                <h3>Track your progress</h3>
                <p style={{width: 400, height: 250, backgroundColor: 'white', margin: '0 auto 0 auto'}}>placeholder screenshot of history page</p>
                <p>Find all of your completed workouts in one place and easily
                see your workout history.
                </p>
            </section>
            <Link to="register" className="signup">Register Now!</Link>
        </div>
    )
}

export default Landing;