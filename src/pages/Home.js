

import { useRecoilValue } from 'recoil';
import { usernameState } from '../atoms';
import * as React from 'react';
import { useState } from "react";
import { TextField, Button, Flex } from '@aws-amplify/ui-react';
import { useGeolocated } from "react-geolocated";
import axios from 'axios';
function Home() {
    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 5000,
        });
    const username = useRecoilValue(usernameState);

    const [spotName, setSpotName] = useState("");
    const [spotNumber, setSpotNumber] = useState("");
    const [spotLevel, setSpotLevel] = useState("");
    const [streetName, setStreetName] = useState("");
    const [spotNotes, setSpotNotes] = useState("");

    const saveSpot = (event) => {
        event.preventDefault();
        axios.post('https://jcgz0lxwv3.execute-api.us-east-1.amazonaws.com/dev/user/savespot', {
            username: username,
            latitude: coords.latitude,
            longitude: coords.longitude,
            altitude: coords.altitude,
            spotName: spotName,
            spotNumber: spotNumber,
            spotLevel: spotLevel,
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

    if (!isGeolocationAvailable || !isGeolocationEnabled) {
        return <div>Geolocation not available / enabled!</div>
    } else {

    return (
        <div>
            <h1>Home</h1>
            <h2>Hello {username}</h2>
            <h3>Save a Spot</h3>
            <center>
            <Flex direction="column" width="55%">
            <form onSubmit={saveSpot}>
            <TextField
                placeholder="Spot Name"
                label="Spot name"
                errorMessage="There is an error"
                onChange={e => setSpotName(e.target.value)}

             />
             <TextField
                    placeholder="Spot Number"
                    label="Spot Number"
                    errorMessage="There is an error"
                    onChange={e => setSpotNumber(e.target.value)}
                />
            <TextField
                    placeholder="Spot Level"
                    label="Spot Level"
                    errorMessage="There is an error"
                    onChange={e => setSpotLevel(e.target.value)}
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
                </Flex>
            </center>
        </div>

        );
    }
}

export default Home;
