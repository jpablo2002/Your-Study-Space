import React, { useState } from "react";

import { updateTasks } from "../../../api";

const Note = (props) => {
    const [removed, setRemoved] = useState(false)
    const removeTask = function () {
        const i = props.tasks.findIndex((t) => {
            return props.listId === t._id
        });
        const updatedTasks = props.tasks.slice(0, i).concat(props.tasks.slice(i + 1));
        updateTasks(props.currUser, updatedTasks)
            .then(res => {
                if (res.data?.updateTasks) {
                    setRemoved(true);
                    setTimeout(() => {
                        props.setTasks(updatedTasks)
                    }
                        , 400);
                }
            })
            .catch(err => console.log(err.message))
    };

    return (
        <div className={`note ${removed ? 'remove' : ''}`}>
            <p className="task">{props.task}</p>
            <p className="deadline">{props.deadline}</p>
            <button className="doneTask" onClick={removeTask}><span>&#10003;</span></button>
        </div>
    );
}

export default Note;