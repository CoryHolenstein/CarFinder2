
import { usernameState, isLoggedInState } from '../atoms';
import React, { useState, useEffect } from 'react';
import { TextField, Button, Flex } from '@aws-amplify/ui-react';
import axios from 'axios';
import { useRecoilState } from 'recoil'
import { useNavigate, NavLink } from 'react-router-dom';


const API_URL = 'https://jcgz0lxwv3.execute-api.us-east-1.amazonaws.com/dev/user/createcode';
function VerifyEmail() {

    //const [email, setEmail] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);
    const [username, setUsername] = useRecoilState(usernameState);
    const [emailCode, setEmailCode] = useState("");
    const [errorResponse, setErrorResponse] = useState("");
    const [data, setData] = useState([]);


    let navigate = useNavigate();
    const routeChange = (input) => {
        let path = input;
        navigate(path);
    }

    const body = {
        username: username
    };

    function verifyLater() {
        navigate("/Home");
    }

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

    //for when click the send button
    const submitForm = (event) => {
        //event.preventDefault();
        var url = 'https://jcgz0lxwv3.execute-api.us-east-1.amazonaws.com/dev/user/verifyemail'; 
        axios.post(url, {
            username: username,
            code: emailCode
        })
                .then(function (response) {
                    console.log(response);
                    if (response.data === "OK") {
                        setIsLoggedIn("true");
                        routeChange("../Home");;
                    } else {
                        setErrorResponse("Invalid code");
                        //setTimeout(() => { setErrorResponse("") }, 12500);
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });

          //  routeChange("../home");
           // setIsLoggedIn("true");
        }

    const style = {
        "--primary-color": "#01B0D3",
        "--secondary-color": "#01B0D3",
        "--background-color": "#242333",
        "--label-color": "#FFFFFF",
    };
    return (
        <div className="home" style={{
            ...style,
            backgroundColor: "var(--background-color)",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <center>
                <div style={{ color: "var(--primary-color)", fontSize: "20px" }}> <h1>Verify Your Email</h1> </div>

                <Flex direction="column" width="55%">
                    <h3 style={{ color: "var(--label-color)" }}> Please enter the code that was sent to {username} </h3>  
                    <form>
                        <TextField
                        placeholder="Email Code"
                        required={true}
                        errorMessage="There is an error"
                        onChange={e => setEmailCode(e.target.value)}
                        />
                        <Button size="small" onClick={() => submitForm()} disabled={!emailCode}>Verify Code</Button>

                        <Button size="small"  disabled={true}>Send new code</Button>
                    </form>
                </Flex>
                
                <h3 className="error-response">{errorResponse}</h3>
                <h3>Or you can verify your email later</h3>
                <Button size="small" onClick={() => verifyLater()} >Verify Later</Button>
                <h1 style={{ color: "var(--primary-color)", fontSize: "20px" }}> Have an Account?</h1>
                <NavLink to="/login">Login here!</NavLink>

            </center>
        </div>

    );
}

export default VerifyEmail;
