
import {  NavLink } from 'react-router-dom';
import * as React from 'react';
import { useState, useEffect } from "react";
import { TextField, Button } from '@aws-amplify/ui-react';
import axios from 'axios';


import { useRecoilValue } from 'recoil';
import { usernameState } from '../atoms';

function MySpots() {
    const [savedSpots, setSavedSpots] = useState([]);
    const username = useRecoilValue(usernameState);
    useEffect(() => {
        
        var url = "https://jcgz0lxwv3.execute-api.us-east-1.amazonaws.com/dev/user/getspots";
      
        axios.post(url, {
            username: username

        })
            .then(function (response) {
                setSavedSpots(response.data);
                console.log("response " + response);
                console.log("saved spots " + savedSpots[0].spotname);
            })
            .catch(function (error) {
                console.log(error);
            });
    },[]);


    return (
        <div>
        <div>My Spots </div>
            <div>
                {savedSpots.map(spot => {
                    <tr key={spot.spotname}>
                        
                        <td>{spot.createtime} </td>  
                        <td>{spot.spotname} </td>  
                        <td>{spot.createtime} </td>  
                    </tr>
                })}

                <NavLink to="/home">Save another spot!</NavLink>

            </div>

        </div>
    );
}

export default MySpots;
