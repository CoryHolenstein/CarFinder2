

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
    const style = {
        "--primary-color": "#5cb8ff",
        "--secondary-color": "#62c3ff",
        "--background-color": "#cccccc",
        "--label-color": "#0066ff",
    };
    return (
        <div
            className="login-page"
            style={{
                ...style,
                backgroundColor: "var(--background-color)",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >

            <center>
                <h1 style={{ color: "var(--label-color)", }}>Car Finder</h1>
                <h2 style={{ color: "var(--primary-color)" }}>Login</h2>

                <Flex direction="column" >
                    <form onSubmit={submitForm} style={{ border: "2px solid var(--primary-color)", padding: "25px" }}>
                        <label style={{ color: "var(--label-color)", marginBottom: "5px" }}>
                            Email
                        </label>
                <TextField
                            placeholder="Email"
                            required={true}
                            type="email"
                        errorMessage="There is an error"
                        onChange={e => setUsername(e.target.value)}
                         style={{
                                width: "200px",
                                margin: "10px",
                                border: "2px solid var(--primary-color)",
                                borderRadius: "5px",
                                padding: "5px",
                                boxShadow: "0 0 5px var(--secondary-color)",
                            }}
                    />
                        <br></br>
                        <label style={{ color: "var(--label-color)", marginBottom: "5px" }}>
                            Password
                        </label>
                <TextField
                        placeholder="Password"
                            required={true}
                        errorMessage="There is an error"
                            onChange={e => setPassword(e.target.value)}
                            style={{
                                width: "200px",
                                margin: "10px",
                                border: "2px solid var(--primary-color)",
                                borderRadius: "5px",
                                padding: "5px",
                                boxShadow: "0 0 5px var(--secondary-color)",
                            }}
                    />
                        <Button size="small" type="submit" style={{
                            width: "100px",
                            margin: "10px",
                            backgroundColor: "var(--primary-color)",
                            color: "white",
                            border: "none",
                            borderRadius: "5px",
                            padding: "10px",
                        }} >Login</Button>
                    </form>
                    <h3 className="error-response">{errorResponse}</h3>
                </Flex>
                <h2 style={{ color: "var(--label-color)" }}>No Account?</h2>
                <NavLink to="/register">Register now!</NavLink>
            </center>
        </div>

    );
}

export default Login;
