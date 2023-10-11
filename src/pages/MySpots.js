import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { TextField, Button, Flex } from '@aws-amplify/ui-react';
import { usernameState } from '../atoms';
import { NavLink } from 'react-router-dom';
import { NavBar } from '../components/NavBar'

const API_URL = 'https://jcgz0lxwv3.execute-api.us-east-1.amazonaws.com/dev/user/getspots';

const MySpots = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errorResponse, setErrorResponse] = useState("");
    const [searchInput, setSearchInput] = useState("");
    const [searchedSpot, setSearchedSpot] = useState([]);
    const [searchedSpotLabel, setSearchedSpotLabel] = useState("");
    

    const username = useRecoilValue(usernameState);
    const body = {
        username: username
    };

    useEffect(() => {
        setIsLoading(false);
        const fetchData = async () => {
            try {
                const response = await axios.post(API_URL, body);
                setData(response.data);
                //console.log(response);
                if (response.data === "NONE") {
                    setErrorResponse("No saved spots!");
                } else if (response.data === "ERROR") {
                    setErrorResponse("Error connecting to server.");
                }
               // console.log(errorResponse);

            } catch (error) {
                console.error(error);
            }
        };
      
        const filterData =  () => {
            // If the search input is empty, return the original data
            if (!searchInput) {
                return [];
            }
            const regex = new RegExp(searchInput, 'i');
            return data.filter((item) => regex.test(item.spotname));
        };
        
        fetchData();
        setSearchedSpot(filterData());
    }, [searchInput]);




    const style = {
        "--primary-color": "#01B0D3",
        "--secondary-color": "#01B0D3",
        "--background-color": "#242333",
        "--label-color": "#FFFFFF",
    };

    if (isLoading === true) {
        return <div>Loading...</div>
    } else if (errorResponse !== "") {
        return <div>
            <h3 className="error-response">{errorResponse}</h3><br></br>
            <NavLink to="/home">Return home</NavLink> <br></br>
        </div>
    } else {
        return (
            <div>
                <center>
                    <div className="spots" style={{
                        ...style,
                        backgroundColor: "var(--background-color)",
                        height: "100vh",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                      
                        <div>
                            <NavBar />
                            <h1 style={{ color: "var(--primary-color)", marginBottom: "5px" }}>My Spots</h1>
                            <h3 style={{ color: "var(--label-color)", marginBottom: "5px" }}>
                                Search spots
                            </h3>
                            <label style={{ color: "var(--label-color)", marginBottom: "3px" }}>
                                {searchedSpotLabel}
                            </label>
                            <TextField 
                                placeholder="Find a spot"
                                required={true}
                                errorMessage="There is an error"
                                value={searchInput}
                                onChange={e => setSearchInput(e.target.value)}
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
                        <div>
                            {searchedSpot.map((item, index) => (
                                <h3 key={index} style={{
                                    color: "white",
                                    width: "200px",
                                    margin: "10px",
                                    border: "2px solid var(--primary-color)",
                                    borderRadius: "5px",
                                    padding: "5px",
                                    boxShadow: "0 0 5px var(--secondary-color)",
                                }}>
                                    <tr> Spot Name: {item.spotname} {item.createtime} </tr>
                                    Streetname: {item.streetname}
                                    Notes: {item.spotnotes}
                                    <br></br><button> Open in maps</button>
                                </h3>
                            ))}
                            </div>
                            <h2 style={{ color: "var(--label-color)", marginBottom: "3px" }}>All Spots</h2>
                        {data.map((item, index) => (
                            <h3 key={index} style={{
                                color: "white",
                                width: "200px",
                                margin: "10px",
                                border: "2px solid var(--primary-color)",
                                borderRadius: "5px",
                                padding: "5px",
                                boxShadow: "0 0 5px var(--secondary-color)",
                            }}>
                                <tr> Spot Name: {item.spotname} {item.createtime} </tr>
                                Streetname: {item.streetname}
                                Notes: {item.spotnotes}
                                <br></br><button > Open in maps</button>
                            </h3>
                        ))}
                        </div>
                       
                    </div>

                </center>
                <div style={{
                    ...style,
                    backgroundColor: "var(--background-color)",
                    display: "flex",
                    color: "white",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <NavLink to="/home">Save another spot!</NavLink> <br></br>
                </div>
            </div>

        );
    }

};

export default MySpots;
/*  {foundSpot.map((item, index) => (
                                <h3 key={index} style={{
                                    color: "white",
                                    width: "200px",
                                    margin: "10px",
                                    border: "2px solid var(--primary-color)",
                                    borderRadius: "5px",
                                    padding: "5px",
                                    boxShadow: "0 0 5px var(--secondary-color)",
                                }}>
                                    <tr> Spot Name: {item.spotname} {item.createtime} </tr>
                                    Streetname: {item.streetname}
                                    Notes: {item.spotnotes}
                                    <br></br><button> Open in maps</button>
                                </h3>
                            ))}
                */

                                    /*
                                     const filterData = async () => {
            console.log("hi1");
            if (!searchInput) {
                console.log("no input");
                return [];
            } else {
                for (let i = 0; i < data.length; i++) {
                    if (searchInput === data[i].spotname) { //found
                        console.log("found");
                        console.log(data[i]);
                        searchedSpotData = data[i];
                        console.log("assigned value: " + JSON.stringify(searchedSpotData));
                        return data[i];
                    }
                    console.log("not found");
                    return "not found";
                }
            }
        }
        
                                    */

                    /*
                        
                            {searchedSpotData.map((item, index) => (
                                <h3 key={index} style={{
                                    color: "white",
                                    width: "200px",
                                    margin: "10px",
                                    border: "2px solid var(--primary-color)",
                                    borderRadius: "5px",
                                    padding: "5px",
                                    boxShadow: "0 0 5px var(--secondary-color)",
                                }}>
                                    <tr> Spot Name: {item.spotname} {item.createtime} </tr>
                                    Streetname: {item.streetname}
                                    Notes: {item.spotnotes}
                                    <br></br><button> Open in maps</button>
                                </h3>
                            ))}   */