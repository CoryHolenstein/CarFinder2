
import { usernameState, isLoggedInState } from '../atoms';
import * as React from 'react';
import { useState } from "react";
import { TextField, Button, Flex } from '@aws-amplify/ui-react';
import axios from 'axios';
import { useRecoilState } from 'recoil'
import { useNavigate, NavLink } from 'react-router-dom';
import { getEmailRegex } from '../constants/RegexPatterns' 
function Register() {

    //const [email, setEmail] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);
    const [username, setUsername] = useRecoilState(usernameState);
    const [password, setPassword] = useState("");
    const [passwordConf, setPasswordConf] = useState("");
    const [errorResponse, setErrorResponse] = useState("");
   
    let navigate = useNavigate();
    const routeChange = (input) => {
        let path = input;
        navigate(path);
    }

    const submitForm = (event) => {
        event.preventDefault();
        console.log(username, password);

        if (password !== passwordConf) {
            alert("passwords do not match")
            return;
        } 

        if (password.length < 10) {
            alert("password needs to be at least 10 characters")
            return;
        }

        


        var url = "https://jcgz0lxwv3.execute-api.us-east-1.amazonaws.com/dev/user/register";
        axios.post(url, {
           username: username,
            password: password
        })
                .then(function (response) {
                    console.log(response);
                    if (response.data === "OK") {
                        setIsLoggedIn("true");
                        routeChange("../verifyemail");
                    } else {
                        setErrorResponse("Email exists already!");
                        setTimeout(() => { setErrorResponse("") }, 8500);
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });

          //  routeChange("../home");
            setIsLoggedIn("true");
        }

    return (
        <div>

            <center>
                <div> Register </div>

                <Flex direction="column" width="55%">
                <form onSubmit={submitForm}>
                        <TextField
                            type="email"
                            placeholder="Email"
                            label="Email"
                            required={true}
                            errorMessage="There is an error"
                            onChange={e => setUsername(e.target.value)}
                            pattern={getEmailRegex}
                    />
                    <br></br>
                    <TextField
                            placeholder="Password"
                            label="Password"
                            errorMessage="There is an error"
                            required={true}
                            onChange={e => setPassword(e.target.value)}
                    />
                    <br></br>
                    <TextField
                        placeholder="Password Confirmation"
                        label="Password Confirmation"
                            errorMessage="There is an error"
                            required={true}
                        onChange={e => setPasswordConf(e.target.value)}
                        />
                        <Button size="small" type="submit" >Register</Button>
                    </form>
                    <h3 className="error-response">{errorResponse}</h3>
                </Flex>
                <h1> Have an Account?</h1>
                <NavLink to="/login">Login here!</NavLink>

            </center>
        </div>

    );
}

export default Register;
