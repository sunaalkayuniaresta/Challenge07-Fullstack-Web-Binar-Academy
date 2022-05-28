import * as React from 'react';
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { GoogleLogin } from 'react-google-login';

function SignIn() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    setIsLoggedIn(!!token);
  }, [token]);

  const handleSuccessGoogle = (response) => {
    console.log(response);
    console.log(response.tokenId);
    if(response.tokenId) {
        localStorage.setItem("token", token);
        setIsLoggedIn(token);
    }
  }

  const handleFailureGoogle = (response) => {
    console.log(response);
    alert(response);
  }

  return (
    <React.Fragment>    
    {!isLoggedIn ? (
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Login with Google"
        onSuccess={handleSuccessGoogle}
        onFailure={handleFailureGoogle}
        cookiePolicy={'single_host_origin'}
        /> 
    ):(
      <Navigate to="carimobil" />
    )}
    </React.Fragment>
  );
}

export default SignIn;