import React, { useState } from "react";
import { findUser, addUser } from "../../../api";

import './Modal.css'

const Modal = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggingIn, setLoggingIn] = useState(false);

    const logIn = function (e) {
        if (loggingIn) {
            const [, home, dashboard] = document.querySelector('.app').children;
            findUser(username, password)
                .then(res => {
                    let userFound, allowLogin;
                    ({ userFound, allowLogin } = res.data);
                    if (userFound && allowLogin) {
                        props.setSignedIn(true);
                        props.setCurrUser(username);
                        document.querySelector('.dashboard').querySelector('h1').textContent = `${username}'s Study Space`
                        document.querySelector('.modal').classList.toggle('hidden');
                        home.classList.toggle('blur');
                        dashboard.classList.toggle('blur');
                        // Do other stuff like load tasks and stuff
                    } else if (userFound && !allowLogin) {
                        document.querySelectorAll('input').forEach((inp) => inp.classList.toggle('wrong'));

                    } else {
                        document.querySelectorAll('input').forEach((inp) => inp.classList.toggle('wrong'));
                    }
                })
        } else {
            findUser(username, password)
                .then(res => {
                    let userFound;
                    ({ userFound } = res.data);
                    if (userFound) {
                        console.log("This user already exists");
                    } else {
                        addUser({
                            username: username,
                            password: password,
                            tasks: [],
                            background: 'study_image.jpeg'
                        })
                            .then((res) => console.log(res))
                            .catch((err) => console.log(err.message))
                        const [, home, dashboard] = document.querySelector('.app').children;
                        document.querySelector('.dashboard').querySelector('h1').textContent = `${username}'s Study Space`
                        document.querySelector('.modal').classList.toggle('hidden');
                        home.classList.toggle('blur');
                        dashboard.classList.toggle('blur');
                        setUsername((prevValue) => '');
                        setPassword((prevValue) => '')
                    }
                })
        }
    }

    return (
        <div className="modal hidden">
            <h1>{!loggingIn ? 'Sign Up' : ' Log In'}</h1>
            <input type="text" value={username} placeholder="Username" onChange={(e) => setUsername(e.target.value)}></input>
            <input type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
            <button className="logIn" onClick={logIn}>{!loggingIn ? 'Sign Up' : ' Log In'}</button>
            <p>Already have an account? <a onClick={() => {
                setLoggingIn(true);
                setUsername((prevValue) => '');
                setPassword((prevValue) => '');
            }}>Log in</a></p>
        </div>
    );
}

export default Modal;