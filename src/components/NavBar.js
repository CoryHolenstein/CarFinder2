import React from 'react';
import { NavLink } from "react-router-dom";
export const NavBar =() => {
    return (
        <div>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/myspots">My Spots</NavLink>
            </li>
            <li>
                <NavLink to="/logout">Logout</NavLink>
            </li>
        
        </div>
    );
}
