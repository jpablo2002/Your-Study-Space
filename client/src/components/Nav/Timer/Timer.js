import React from "react";
import { useState } from "react";

import './Timer.css'

const Timer = () => {
    const [studying, setStudying] = useState(false)

    return (
        <div className="timer">
            <h1>5:00</h1>
            <button className="study-button button">{!studying ? 'Begin Studying!' : 'Stop'}</button>
        </div>
    );
}

export default Timer;