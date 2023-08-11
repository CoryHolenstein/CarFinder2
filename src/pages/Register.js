
import { emailState, loggedInState } from '../atoms';
import * as React from 'react';
import { useState } from "react";
import { TextField, Button } from '@aws-amplify/ui-react';
import axios from 'axios';
import { useRecoilState } from 'recoil'
import { useNavigate } from 'react-router-dom';
function Register() {

    //const [email, setEmail] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useRecoilState(loggedInState);
    const [email, setEmail] = useRecoilState(emailState);
    const [password, setPassword] = useState("");
    const [passwordConf, setPasswordConf] = useState("");

    let navigate = useNavigate();
    const routeChange = (input) => {
        let path = input;
        navigate(path);
    }

    const submitForm = (event) => {
        event.preventDefault();
        console.log(email, password);

        if (password !== passwordConf) {
            alert("Passwords do not match!");
            return;
        } else {
            axios.post('/user', {
                email: email,
                password: password
            })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });

            routeChange("../home");
            setIsLoggedIn("true");
        }
    }

    return (
        <div>

            <center>
                <div> Register </div>


                <form onSubmit={submitForm}>
                    <TextField
                        placeholder="Email"
                        label="Email"
                        errorMessage="There is an error"
                        onChange={e => setEmail(e.target.value)}

                    />
                    <br></br>
                    <TextField
                        placeholder="Password Confirmation"
                        label="Password"
                        errorMessage="There is an error"
                        onChange={e => setPassword(e.target.value)}
                    />
                    <br></br>
                    <TextField
                        placeholder="Password"
                        label="Password"
                        errorMessage="There is an error"
                        onChange={e => setPasswordConf(e.target.value)}
                    />
                    <Button size="small" type="submit">Register</Button>
                </form>


            </center>
        </div>

    );
}

export default Register;
