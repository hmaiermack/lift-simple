import React from 'react'

export const RegisterForm = () => {
    return (
            <form>
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-input" name="username" />

                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-input" name="email" />

                <label htmlFor="password" className="form-label">Password</label>
                <input type="text" className="form-input" name="password" />

                <button type="submit" className="form-button">Register</button>
            </form>
    )
}