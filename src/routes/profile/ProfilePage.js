import React, { useState } from 'react'
import { useAuth0 } from "../../react-auth0-spa"

export const ProfilePage = () => {
    const { user } = useAuth0();

  
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
    }

    return (
      <>
      <button onClick={changePassword}>change pass</button>
      </>
    );
  
}
