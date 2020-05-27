import React, { Fragment } from "react";
import { useAuth0 } from "../react-auth0-spa";

const Profile = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return null
  }

  return (
    <div>
        <img src={user.picture} alt="Profile" />
        <p>{user.nickname}</p>
    </div>
  );
};

export default Profile;
