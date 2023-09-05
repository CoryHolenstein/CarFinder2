
import { useRecoilValue } from 'recoil';
import { usernameState } from '../atoms';
import { NavBar } from '../components/NavBar'
import * as React from 'react';


function Settings() {
    const username = useRecoilValue(usernameState);


    return (
        <div>
        <NavBar/>

            Settings
            <h2>Hello,</h2>
            <h1>{username}</h1>
        </div>

    );
}

export default Settings;
