﻿import logo from './logo.svg';
import './App.css';
import { Route, Routes, Outlet, Navigate } from 'react-router-dom'

import Error from './pages/Error';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import MySpots from './pages/MySpots';
import Logout from './pages/Logout';
import VerifyEmail from './pages/VerifyEmail';
import Settings from './pages/Settings';
import TestPage from './pages/TestPage';

import { Protected } from './components/Protected'
import {
    useRecoilValue
} from 'recoil';
import { isLoggedInState } from './atoms';






function App() {

    const isLoggedIn = useRecoilValue(isLoggedInState);

  return (
    <div className="App">
  
          <Routes>
     
              <Route path="home"
                  element={
                      <Protected loginStatus={isLoggedIn}>
                          <Home />
                      </Protected>
                  } />
              <Route path="myspots"
                  element={
                      <Protected loginStatus={isLoggedIn}>
                          <MySpots />
                      </Protected>
                  } />
              <Route path="logout"
                  element={
                      <Protected loginStatus={isLoggedIn}>
                          <Logout />
                      </Protected>
                  } />
              <Route path="verifyemail"
                  element={
                      <Protected loginStatus={isLoggedIn}>
                          <VerifyEmail />
                      </Protected>
                  } />
              <Route path="settings"
                  element={
                      <Protected loginStatus={isLoggedIn}>
                          <Settings />
                      </Protected>
                  } />
                  <Route path="" element={<Login />} />
                  <Route path="/" element={<Login />} />
                  <Route path="login" element={<Login />} />
                  
                
                  <Route path="register" element={<Register />} />
              <Route path="error" element={<Error />} />
              <Route path="testpage" element={<TestPage />} />
              </Routes>
    
    </div>
  );
}

export default App;
//private routes
//https://stackoverflow.com/questions/62384395/protected-route-with-react-router-v6#:~:text=Here%20is%20my%20working%20example%20for%20implementing%20private,%28routes%20%28isLoggedIn%29%29%3B%20return%20%28%3C%3E%20%7Brouting%7D%20%3C%2F%3E%29%3B%20%7D%20routes.js