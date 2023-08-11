

import { useRecoilValue } from 'recoil';
import { emailState } from '../atoms';
import * as React from 'react';
import { useState } from "react";
import { TextField, Button } from '@aws-amplify/ui-react';
import axios from 'axios';
function Home() {

    const [email, setEmail] = useRecoilValue(emailState);
    const [spotName, setSpotName] = useState("");
    const [streetName, setStreetName] = useState("");
    const [spotNotes, setSpotNotes] = useState("");


    const saveSpot = (event) => {
        event.preventDefault();
        axios.post('/savespot', {
            username: "username",
            spotName: spotName,
            streetName: streetName,
            spotNotes: spotNotes
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
            <h1>Home</h1>
            <h2>Hello {email}</h2>
            <h3>Save a Spot</h3>
            <form onSubmit={saveSpot}>
            <TextField
                placeholder="Spot Name"
                label="Spot name"
                errorMessage="There is an error"
                onChange={e => setSpotName(e.target.value)}

            />
            <TextField
                placeholder="Street Name"
                label="Street name"
                errorMessage="There is an error"
                onChange={e => setStreetName(e.target.value)}
            />
            <TextField
                placeholder="Spot Notes"
                label="Spot Notes"
                errorMessage="There is an error"
                onChange={e => setSpotNotes(e.target.value)}
            />
            <Button size="small" type="submit">Save Spot</Button>
            </form>
        </div>

    );
}

export default Home;
