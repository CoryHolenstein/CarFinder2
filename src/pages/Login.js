

import { usernameState, isLoggedInState } from '../atoms';
import * as React from 'react';
import { useState } from "react";
import { TextField, Button, Flex } from '@aws-amplify/ui-react';
import axios from 'axios';
import {useRecoilState } from 'recoil'
import { useNavigate, NavLink } from 'react-router-dom';

function Login() {

    //const [email, setEmail] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);
    const [username, setUsername] = useRecoilState(usernameState);
    const [password, setPassword] = useState("");

    const [errorResponse, setErrorResponse] = useState("");

    let navigate = useNavigate();
    const routeChange = (input) => {
        let path = input;
        navigate(path);
    }

    const submitForm = (event) => {
        event.preventDefault();
        console.log(username, password);

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
                } else {
                    setErrorResponse("Wrong email or password!");
                    setTimeout(() => { setErrorResponse("") }, 8500);
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

                <Flex direction="column" width="55%">
              <form onSubmit={submitForm}>
                <TextField
                            placeholder="Email"
                            required={true}
                            label="Email"
                            type="email"
                        errorMessage="There is an error"
                        onChange={e => setUsername(e.target.value)}
                    
                    />
                <br></br>
                <TextField
                        placeholder="Password"
                            label="Password"
                            required={true}
                        errorMessage="There is an error"
                        onChange={e => setPassword(e.target.value)}
                    />
                        <Button size="small" type="submit" >Login</Button>
                    </form>
                    <h3 className="error-response">{errorResponse}</h3>
                </Flex>
                <h1> No Account?</h1>
                <NavLink to="/register">Register now!</NavLink>
            </center>
        </div>

    );
}

export default Login;
