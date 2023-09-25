
import React, { useState } from "react";


function TestPage() {
    // Use state hooks to store the username and password
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // A function to handle the form submission
    const handleSubmit = (event) => {
        // Prevent the default browser behavior
        event.preventDefault();
        // Perform the login logic here
        // For example, you can call an API to verify the credentials
        console.log("Username: " + username);
        console.log("Password: " + password);
    };

    // A function to handle the username input change
    const handleUsernameChange = (event) => {
        // Set the username state to the input value
        setUsername(event.target.value);
    };

    // A function to handle the password input change
    const handlePasswordChange = (event) => {
        // Set the password state to the input value
        setPassword(event.target.value);
    };

    // Define some CSS variables for the color scheme
    const style = {
        "--primary-color": "#5cb8ff",
        "--secondary-color": "#62c3ff",
        "--background-color": "#7482b5",
        "--label-color": "#0066ff",
    };

    // Return the JSX code for the login page
    return (
        <div
            className="login-page"
            style={{
                ...style,
                backgroundColor: "var(--background-color)",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
          
            <form onSubmit={handleSubmit} style={{ border: "2px solid var(--primary-color)", padding: "25px" }}>
                <h1 style={{ color: "var(--primary-color)" }}>Car Finder</h1>
                <h2 style={{ color: "var(--primary-color)" }}>Login</h2>
                <div className="form-group" style={{ display: "flex", flexDirection: "column" }}>
                    <label htmlFor="username" style={{ color: "var(--label-color)", marginBottom: "5px" }}>
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={handleUsernameChange}
                        style={{
                            width: "200px",
                            margin: "10px",
                            border: "2px solid var(--primary-color)",
                            borderRadius: "5px",
                            padding: "5px",
                            boxShadow: "0 0 5px var(--secondary-color)",
                        }}
                    />
                </div>
                <div className="form-group" style={{ display: "flex", flexDirection: "column" }}>
                    <label htmlFor="password" style={{ color: "var(--label-color)", marginBottom: "5px" }}>
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={handlePasswordChange}
                        style={{
                            width: "200px",
                            margin: "10px",
                            border: "2px solid var(--primary-color)",
                            borderRadius: "5px",
                            padding: "5px",
                            boxShadow: "0 0 5px var(--secondary-color)",
                        }}
                    />
                </div>
                <button
                    type="submit"
                    style={{
                        width: "100px",
                        margin: "10px",
                        backgroundColor: "var(--primary-color)",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        padding: "10px",
                    }}
                >
                    Login
                </button>
            </form>
        </div>
    );
}

export default TestPage;
