import React from "react";

import './Controls.css'

const Controls = () => {
    return (
        <div className="controls">
            <p>Drowsy Morning by JP Acosta</p>
            <audio src="drowsy_morning_mixed.mp3" autoPlay controls loop className="controls"></audio>
        </div>
    );
}

export default Controls;