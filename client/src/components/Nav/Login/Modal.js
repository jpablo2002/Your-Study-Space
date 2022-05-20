import React from "react";
import { findUser, addUser } from "../../../api";

import './Modal.css'

const Modal = (props) => {
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    // const [loggingIn, setLoggingIn] = useState(false);

    const logIn = function () {
        if (props.loggingIn) {
            const [, home, dashboard] = document.querySelector('.app').children;
            findUser(props.username, props.password)
                .then(res => {
                    let userFound, allowLogin;
                    ({ userFound, allowLogin } = res.data);
                    if (userFound && allowLogin) {
                        props.setSignedIn(true);
                        props.setCurrUser(props.username);
                        document.querySelector('.dashboard').querySelector('h1').textContent = `${props.username}'s Study Space`
                        document.querySelector('.modal').classList.toggle('hidden');
                        home.classList.toggle('blur');
                        dashboard.classList.toggle('blur');
                        props.setUsername('');
                        props.setPassword('')
                    } else if (userFound && !allowLogin) {
                        document.querySelectorAll('input').forEach((inp) => inp.classList.toggle('wrong'));
                        props.setUsername('');
                        props.setPassword('');

                    } else {
                        document.querySelectorAll('input').forEach((inp) => inp.classList.toggle('wrong'));
                        props.setUsername('');
                        props.setPassword('');
                    }
                })
        } else {
            findUser(props.username, props.password)
                .then(res => {
                    let userFound;
                    ({ userFound } = res.data);
                    if (userFound) {
                        alert("This user already exists");
                        props.setUsername('');
                        props.setPassword('')
                    } else {
                        addUser({
                            username: props.username,
                            password: props.password,
                            tasks: [],
                            background: 'study_image.jpeg'
                        })
                            .then((res) => console.log(res))
                            .catch((err) => console.log(err.message))
                        const [, home, dashboard] = document.querySelector('.app').children;
                        document.querySelector('.dashboard').querySelector('h1').textContent = `${props.username}'s Study Space`
                        document.querySelector('.modal').classList.toggle('hidden');
                        home.classList.toggle('blur');
                        dashboard.classList.toggle('blur');
                        props.setUsername('');
                        props.setPassword('')
                    }
                })
        }
    }

    return (
        <div className="modal hidden">
            <h1>{!props.loggingIn ? 'Sign Up' : ' Log In'}</h1>
            <input type="text" value={props.username} placeholder="Username" onChange={(e) => {
                props.setUsername(e.target.value);
                document.querySelectorAll('input').forEach((inp) => inp.classList.remove('wrong'));
            }}></input>
            <input type="password" value={props.password} placeholder="Password" onChange={(e) => {
                props.setPassword(e.target.value);
                document.querySelectorAll('input').forEach((inp) => inp.classList.remove('wrong'));
            }}></input>
            <button className="logIn" onClick={logIn}>{!props.loggingIn ? 'Sign Up' : ' Log In'}</button>
            <p>Already have an account? <a onClick={() => {
                props.setLoggingIn(true);
                props.setUsername((prevValue) => '');
                props.setPassword((prevValue) => '');
            }}>Log in</a></p>
        </div>
    );
}

export default Modal;