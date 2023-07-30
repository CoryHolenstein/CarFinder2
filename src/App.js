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
