

import { usernameState, isLoggedInState } from '../atoms';
import * as React from 'react';
import { useState } from "react";
import { TextField, Button, Flex } from '@aws-amplify/ui-react';
import axios from 'axios';
import {useRecoilState } from 'recoil'
import { useNavigate, NavLink } from 'react-router-dom';

function Logout() {

    
    const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);
    const [username, setUsername] = useRecoilState(usernameState);
    
    let navigate = useNavigate();
    const routeChange = (input) => {
        let path = input;
        navigate(path);
    }
   
    const submitForm = (event) => {
        // event.preventDefault();
        setUsername("");
        setIsLoggedIn("false");
        routeChange("../login");
       
    }

    return (
        <div>

        <center>
                <div> Logout </div> 
                <h1>Are you sure you want to logut?</h1>
                <button onClick={() => submitForm()}>Logout</button><br></br>
                <NavLink to="/Home">Return Home</NavLink>
            </center>
        </div>

    );
}

export default Logout;
