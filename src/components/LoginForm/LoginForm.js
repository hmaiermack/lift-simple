import React from 'react'

export const LoginForm = () => {
    return (
            <form>
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-input" name="username" />

                <label htmlFor="password" className="form-label">Password</label>
                <input type="text" className="form-input" name="password" />

                <button type="submit" className="form-button">Login</button>
            </form>
    )
}
