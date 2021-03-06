import React from "react";
import { useState } from "react";

import './Timer.css'

const Timer = () => {
    const [studying, setStudying] = useState(false);
    const [time, setTime] = useState(3600);
    const [remaining, setRemaining] = useState('1:00:00')
    const [timer, setTimer] = useState();


    const startTimer = function () {
        if (!studying) {
            const start = new Date(null);
            const end = new Date(null);
            end.setTime(end.getTime() + (time - 1) * 1000);

            const tick = setInterval(() => {
                const seconds = (end.getSeconds() - start.getSeconds() + '').padStart(2, '0');
                const minutes = (end.getMinutes() - start.getMinutes() + '').padStart(2, '0');

                setRemaining(`${minutes}:${seconds}`);
                setTime(prev => prev - 1)
                end.setTime(end.getTime() - 1000);

                if (seconds === '00' && minutes === '00') {
                    setTime(3600);
                    setRemaining('1:00:00');
                    clearInterval(tick);
                    setTimer();
                    setStudying(false)
                    alert('Great job! Take a break!😁');
                }
            }, 1000, [end])
            setTimer(tick);
        } else {
            clearInterval(timer);
            setTimer();
        }
        setStudying(!studying);

    }

    const resetTimer = function () {
        if (!studying) {
            setTime(3600);
            setRemaining('1:00:00');
            clearInterval(timer)
            setTimer();
        }
    }

    return (
        <div className="timer">
            <h1>{remaining}</h1>
            <button onClick={startTimer} className="study-button button">{!studying ? 'Begin Studying!' : 'Stop'}</button>
            <button onClick={resetTimer} className="study-button button">Reset</button>
        </div>
    );
}

export default Timer;