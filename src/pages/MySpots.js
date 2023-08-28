import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { usernameState } from '../atoms';
import { NavLink } from 'react-router-dom';

const API_URL = 'https://jcgz0lxwv3.execute-api.us-east-1.amazonaws.com/dev/user/getspots';

const MySpots = () => {
    const [data, setData] = useState([]);
    const username = useRecoilValue(usernameState);

    const body = {
        username: username
    };

    useEffect(() => {
        

        const fetchData = async () => {
            try {
                const response = await axios.post(API_URL, body);
                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>My Spots</h1>
            <center>
            <div className="spots">
                {data.map((item, index) => (
                    <h3 key={index}>
                        <tr> Spot Name: {item.spotname} {item.createtime} </tr>
                           Streetname: {item.streetname}
                            Notes: {item.spotnotes}
                           <br></br><button> Open in maps</button>


                    </h3>
                ))}
                </div>
            </center>
            <NavLink to="/home">Save another spot!</NavLink> <br></br>
        </div>
    );
};

export default MySpots;
