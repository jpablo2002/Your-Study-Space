import React from "react";
import Nav from "../Nav/Nav";

import './Home.css'

const App = (props) => {
    const closeModal = function (e) {
        const modal = document.querySelector('.modal');
        const login = document.querySelector('.login-button')
        const [, home, dashboard] = document.querySelector('.app').children;
        if (e.target !== login && e.target !== modal && !modal.classList.contains('hidden')) {
            modal.classList.toggle('hidden');
            home.classList.toggle('blur');
            dashboard.classList.toggle('blur');
            props.setUsername('');
            props.setLoggingIn(false);
            props.setPassword('')
        }
    }

    return (
        <div className="home" onClick={closeModal}>
            <Nav signedIn={props.signedIn} currUser={props.currUser} setSignedIn={props.setSignedIn} setCurrUser={props.setCurrUser} setUsername={props.setUsername} setPassword={props.setPassword} setLoggingIn={props.setLoggingIn} />
        </div>
    );
}

export default App;