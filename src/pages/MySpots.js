

import * as React from 'react';
import { useState, useEffect } from "react";
import { TextField, Button } from '@aws-amplify/ui-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function MySpots() {


    useEffect(() => {
        
       

        axios.post('/GetSpots', {
            
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    });


    return (
        <div>My Spots</div>

    );
}

export default MySpots;
