import React from 'react';
import { NavLink } from "react-router-dom";

export const NavBar = () => {
    const style = {
        "--primary-color": "#01B0D3",
        "--secondary-color": "#01B0D3",
        "--background-color": "#242333",
        "--label-color": "#FFFFFF",
    };
    return (


        <div style={{ border: "2px solid var(--secondary-color)" }}>
            
            <NavLink to="/home" style={{ padding: "8px" }}>Home</NavLink>
           
          
            <NavLink to="/myspots" style={{ padding: "8px" }}>My Spots</NavLink>
          
          
            <NavLink to="/settings" style={{ padding: "8px" }}>Settings</NavLink>
         
        
         
            <NavLink to="/logout" style={{ padding: "8px" }}>Logout</NavLink>
          
        
        </div>
    );
}
//    <NavLink to="/testpage" style={{ padding: "8px" }}>Test Page</NavLink>