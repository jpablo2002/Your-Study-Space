import React from "react";

import { updateTasks } from "../../../api";

const Note = (props) => {
    const removeTask = function () {
        const i = props.tasks.findIndex((t) => {
            return props.task === t.task && props.deadline === t.deadline
        });
        const updatedTasks = props.tasks.slice(0, i).concat(props.tasks.slice(i + 1));
        console.log(props.tasks.slice(0, i), props.tasks.slice(i + 1, -1));
        console.log(i, updatedTasks);
        updateTasks(props.currUser, updatedTasks)
            .then(res => {
                if (res.data?.updateTasks) props.setTasks(updatedTasks);
            })
            .catch(err => console.log(err.message))
    };

    return (
        <div className="note">
            <p className="task">{props.task}</p>
            <p className="deadline">{props.deadline}</p>
            <button className="doneTask" onClick={removeTask}><span>&#10003;</span></button>
        </div>
    );
}

export default Note;