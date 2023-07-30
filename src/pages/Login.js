


import * as React from 'react';
import { useState } from "react";
import { TextField, Button } from '@aws-amplify/ui-react';
import axios from 'axios';
function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const submitForm = (event) => {
        event.preventDefault();
        console.log(email, password);

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
                        onChange={e => setEmail(e.target.value)}
                    
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


            </center>
        </div>

    );
}

export default Login;
