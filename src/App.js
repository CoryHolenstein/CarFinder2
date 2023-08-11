import logo from './logo.svg';
import './App.css';
import {  Route, Routes } from "react-router-dom";

import Error from './pages/Error';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
function App() {
  return (
    <div className="App">
  
              <Routes>
                  <Route path="home" default element={<Home />} />
                  <Route path="" element={<Home />} />
                  <Route path="login" element={<Login />} />
                  <Route path="register" element={<Register />} />

                  <Route path="error" element={<Error />} />
              </Routes>
    
    </div>
  );
}

export default App;
//private routes
//https://stackoverflow.com/questions/62384395/protected-route-with-react-router-v6#:~:text=Here%20is%20my%20working%20example%20for%20implementing%20private,%28routes%20%28isLoggedIn%29%29%3B%20return%20%28%3C%3E%20%7Brouting%7D%20%3C%2F%3E%29%3B%20%7D%20routes.js