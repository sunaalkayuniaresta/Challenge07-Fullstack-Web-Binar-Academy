import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useState, useEffect } from "react";
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { Navigate, useNavigate } from "react-router-dom";
import ListCars from '../ListCars';
import Home from '../../Home';
import CariMobil from '../../CariMobil';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Navbar';
import SearchForm from '../FormCari';

export default function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const token = localStorage.getItem("token");  
    const navigate = useNavigate();

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

      function handleLogout(e) {
        e.preventDefault();
        localStorage.removeItem("token");
        localStorage.clear();
        window.location.reload();
        navigate("/");
        <GoogleLogout/>
      }

    return (
        <div>
        {!isLoggedIn ? (
            <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                buttonText="Login with Google"
                onSuccess={handleSuccessGoogle}
                onFailure={handleFailureGoogle}
                cookiePolicy={'single_host_origin'}
                /> 
            ) : (
                <Button style={{background: "#56b659",color:'white'}} onClick={handleLogout}>Logout</Button>
            )}
            {!isLoggedIn ? (
                // <Home/>
                <div></div>
            ) : (     
                navigate('/carimobil')
            )}
        </div>
    );
}
