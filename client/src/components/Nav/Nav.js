import React, { useState } from "react";
import Timer from "./Timer/Timer";
import SignIn from "./Login/SignIn"

import './Nav.css'
import Notepad from "./Notepad/Notepad";

const Nav = (props) => {
    const [tasks, setTasks] = useState([]);

    return (
        <div className="nav">
            <Notepad signedIn={props.signedIn} currUser={props.currUser} tasks={tasks} setTasks={setTasks} />
            <Timer />
            <SignIn signedIn={props.signedIn} setSignedIn={props.setSignedIn} setCurrUser={props.setCurrUser} setTasks={setTasks} setUsername={props.setUsername} setPassword={props.setPassword} setLoggingIn={props.setLoggingIn} />
        </div>
    );
}

export default Nav;