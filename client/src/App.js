import React, { useState } from "react";
import Dashboard from "./components/Home/Dashboard";
import Home from "./components/Home/Home";

import './App.css'
import Modal from "./components/Nav/Login/Modal";

const App = () => {
    const [signedIn, setSignedIn] = useState(false);
    const [currUser, setCurrUser] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggingIn, setLoggingIn] = useState(false);

    return (
        <div className="app">
            <Modal signedIn={signedIn} currUser={currUser} setSignedIn={setSignedIn} setCurrUser={setCurrUser} username={username} password={password} loggingIn={loggingIn} setUsername={setUsername} setPassword={setPassword} setLoggingIn={setLoggingIn} />
            <Home signedIn={signedIn} currUser={currUser} setSignedIn={setSignedIn} setCurrUser={setCurrUser} setUsername={setUsername} setPassword={setPassword} setLoggingIn={setLoggingIn} />
            <Dashboard setUsername={setUsername} setPassword={setPassword} setLoggingIn={setLoggingIn} />
        </div>
    );
}

export default App;