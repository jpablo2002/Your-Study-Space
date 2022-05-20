import React from "react";

import './SignIn.css'

const SignIn = (props) => {

    const openModal = function () {
        if (!props.signedIn) {
            const [, home, dashboard] = document.querySelector('.app').children;
            const modal = document.querySelector('.modal');
            modal.classList.toggle('hidden');
            home.classList.toggle('blur');
            dashboard.classList.toggle('blur')
        } else {
            props.setCurrUser('');
            props.setSignedIn(false);
            props.setTasks([]);
            document.querySelector('.title').textContent = '';
            props.setUsername('');
            props.setLoggingIn(false);
            props.setPassword('')
        }
    }

    return (
        <div className="signin">
            <button className="login-button button" onClick={openModal}>{props.signedIn ? 'Log Out' : 'Sign Up'}</button>
        </div>
    );
}

export default SignIn;