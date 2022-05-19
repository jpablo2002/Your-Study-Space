import React, { useState } from "react";
import Dashboard from "./components/Home/Dashboard";
import Home from "./components/Home/Home";

import './App.css'
import Modal from "./components/Nav/Login/Modal";

const App = () => {
    const [signedIn, setSignedIn] = useState(false);
    const [currUser, setCurrUser] = useState('');

    return (
        <div className="app">
            <Modal signedIn={signedIn} currUser={currUser} setSignedIn={setSignedIn} setCurrUser={setCurrUser} />
            <Home signedIn={signedIn} currUser={currUser} setSignedIn={setSignedIn} setCurrUser={setCurrUser} />
            <Dashboard />
        </div>
    );
}

export default App;