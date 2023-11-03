import { useNavigate, NavLink } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { usernameState, isVerifiedState } from '../atoms';
import { NavBar } from '../components/NavBar'
import * as React from 'react';


function Settings() {
    const username = useRecoilValue(usernameState);
    const isVerified = useRecoilValue(isVerifiedState);


    const style = {
        "--primary-color": "#01B0D3",
        "--secondary-color": "#01B0D3",
        "--background-color": "#242333",
        "--label-color": "#FFFFFF",
    };
    return (
        <div className = "settings-page"
            style = {{
                ...style,
                backgroundColor: "var(--background-color)",
                    height: "100vh",
                        display: "flex",
                            alignItems: "center",
                                justifyContent: "center",
            }} >
       

            <div>
                <NavBar />
                Settings
                <h2>Hello,</h2>


                <h4>{isVerified === "true" ? <p>Your email is verified</p> : <p> You are not verified! <NavLink to="/verifyemail">Verify now!</NavLink> </p>}</h4>
                <h1>{username}</h1>
            </div>
          
           
        </div>

    );
}

export default Settings;
