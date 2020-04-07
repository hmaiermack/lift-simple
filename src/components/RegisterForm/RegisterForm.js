import React from 'react'

export default function RegisterForm(props){

    handleSubmit = e => {
        e.preventDefault();

    }

    return(
        <form className="registrationForm"
        onSubmit={handleSubmit()}>

        </form>
    )
}