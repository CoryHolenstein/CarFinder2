
import { useNavigate, NavLink } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { usernameState, isVerifiedState } from '../atoms';
import { NavBar } from '../components/NavBar';
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
    const isVerified = useRecoilValue(isVerifiedState);

    const [spotName, setSpotName] = useState("");
    const [spotNumber, setSpotNumber] = useState("");
    const [spotLevel, setSpotLevel] = useState("");
    const [streetName, setStreetName] = useState("");
    const [spotNotes, setSpotNotes] = useState("");

    let altitude = "";
    let navigate = useNavigate();
    const routeChange = (input) => {
        let path = input;
        navigate(path);
    }
    const saveSpot = (event) => {
        event.preventDefault();
        console.log("latitude: " + coords.latitude);
        console.log("longitude: " + coords.longitude);
        console.log("altitude: " + altitude);

        console.log("username: " + username);
        console.log("spotName: " + spotName);
        console.log("spotNumber: " + spotNumber);
        console.log("spotLevel: " + spotLevel);
        console.log("streetName: " + streetName);
        console.log("spotNotes: " + spotNotes);

        if (coords.altitude === null) {
            altitude = "0";
        }

        axios.post('https://jcgz0lxwv3.execute-api.us-east-1.amazonaws.com/dev/user/savespot', {
            username: username,
            latitude: coords.latitude,
            longitude: coords.longitude,
            altitude: altitude,
            spotName: spotName,
            spotNumber: spotNumber,
            spotLevel: spotLevel,
            streetName: streetName,
            spotNotes: spotNotes
             
        })
            .then(function (response) {
                console.log(response);
                if (response.data === "OK") {
                    routeChange("../myspots");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    } 

    const style = {
        "--primary-color": "#01B0D3",
        "--secondary-color": "#01B0D3",
        "--background-color": "#242333",
        "--label-color": "#FFFFFF",
    };

    if (!isGeolocationAvailable || !isGeolocationEnabled) {
        return <div>Geolocation not available / enabled!</div>
    } else {
    return (
        
            <div className="home" style={{
                ...style,
                backgroundColor: "var(--background-color)",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
        }}>
           
            <div>
                <center>
                <h1 style={{ color: "var(--primary-color)", fontSize:"50px" }}>Home</h1>
            
            <h4>{isVerified === "true" ? <p></p> : <p> You are not verified! <NavLink to="/verifyemail">Verify now!</NavLink> </p>}</h4>
                <div> <NavBar /></div> 
            
                <h3 style={{ color: "var(--primary-color)" }}>Save a Spot</h3>
            
            <Flex direction="column" width="75%">
             <form onSubmit={saveSpot}>
                            <label style={{ color: "var(--label-color)", marginBottom: "3px" }}>
                                Spot Name
                            </label>
                            <TextField
                              
                                placeholder="Spot Name"
                required="true"
                errorMessage="There is an error"
                                onChange={e => setSpotName(e.target.value)}
                                style={{
                                    color: "white",
                                    width: "200px",
                                    margin: "10px",
                                    border: "2px solid var(--primary-color)",
                                    borderRadius: "5px",
                                    padding: "5px",
                                    boxShadow: "0 0 5px var(--secondary-color)",
                                }}

                            />
                            <label style={{ color: "var(--label-color)", marginBottom: "3px" }}>
                                Spot Number
                            </label>
             <TextField
                    placeholder="Spot Number"
                    errorMessage="There is an error"
                                onChange={e => setSpotNumber(e.target.value)}
                                style={{
                                    color: "white",
                                    width: "200px",
                                    margin: "10px",
                                    border: "2px solid var(--primary-color)",
                                    borderRadius: "5px",
                                    padding: "5px",
                                    boxShadow: "0 0 5px var(--secondary-color)",
                                }}
                            />
                            <label style={{ color: "var(--label-color)", marginBottom: "3px" }}>
                                Spot Level
                            </label>
            <TextField
                    placeholder="Spot Level"
                                errorMessage="There is an error"

                                onChange={e => setSpotLevel(e.target.value)}
                                style={{
                                    color: "white",
                                    width: "200px",
                                    margin: "10px",
                                    border: "2px solid var(--primary-color)",
                                    borderRadius: "5px",
                                    padding: "5px",
                                    boxShadow: "0 0 5px var(--secondary-color)",
                                }}
                            />
                            <label style={{ color: "var(--label-color)", marginBottom: "3px" }}>
                                Street Name
                            </label>
            <TextField
                placeholder="Street Name"
                errorMessage="There is an error"
                                onChange={e => setStreetName(e.target.value)}
                                style={{
                                    paddingRight: "50px",
                                    color: "white",
                                    width: "200px",
                                    margin: "10px",
                                    border: "2px solid var(--primary-color)",
                                    borderRadius: "5px",
                                    padding: "5px",
                                    boxShadow: "0 0 5px var(--secondary-color)",
                                }}
                            />
                            <label style={{ color: "var(--label-color)", marginBottom: "3px" }}>
                                Spot Notes
                            </label>
            <TextField
                placeholder="Spot Notes"
                errorMessage="There is an error"
                                onChange={e => setSpotNotes(e.target.value)}
                                style={{
                                    color: "white",
                                    width: "200px",
                                    margin: "10px",
                                    border: "2px solid var(--primary-color)",
                                    borderRadius: "5px",
                                    padding: "5px",
                                    boxShadow: "0 0 5px var(--secondary-color)",
                                }}
            />
               <Button size="medium" type="submit" style={{ color: "var(--primary-color)", marginBottom: "3px" }}>Save Spot</Button>
                </form>
                </Flex>
       
               
                </center>
            </div>
            </div>
       

        );
    }
}

export default Home;
