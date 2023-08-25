

import { usernameState, isLoggedInState } from '../atoms';
import * as React from 'react';
import { useState } from "react";
import { TextField, Button } from '@aws-amplify/ui-react';
import axios from 'axios';
import {useRecoilState } from 'recoil'
import { useNavigate, NavLink } from 'react-router-dom';

function Login() {

    //const [email, setEmail] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);
    const [username, setUsername] = useRecoilState(usernameState);
    const [password, setPassword] = useState("");

    let navigate = useNavigate();
    const routeChange = (input) => {
        let path = input;
        navigate(path);
    }

    const submitForm = (event) => {
        event.preventDefault();
        console.log(username, password);

        const body = {
            username: username,
            password: password
        };

        var url = "https://jcgz0lxwv3.execute-api.us-east-1.amazonaws.com/dev/user/login";

        axios.post(url, {
            username: username,
            password: password
        })
            .then(function (response) {
                console.log(response);
                if (response.data === "OK") {
                    setIsLoggedIn("true");
                    routeChange("../home");
                }
            })
            .catch(function (error) {
                console.log(error);
            });

        //  routeChange("../home");
       
    }

    return (
        <div>

        <center>
              <div> Login </div> 


              <form onSubmit={submitForm}>
                <TextField
                        placeholder="Email"
                        label="Email"
                        errorMessage="There is an error"
                        onChange={e => setUsername(e.target.value)}
                    
                    />
                <br></br>
                <TextField
                        placeholder="Password"
                        label="Password"
                        errorMessage="There is an error"
                        onChange={e => setPassword(e.target.value)}
                    />
                <Button size="small" type="submit">Login</Button>
             </form>
                <h1> No Account?</h1>
                <NavLink to="/register">Register now!</NavLink>

            </center>
        </div>

    );
}

export default Login;
